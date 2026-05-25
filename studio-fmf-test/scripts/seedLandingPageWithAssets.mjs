import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'

import {getCliClient} from 'sanity/cli'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const studioRoot = path.resolve(__dirname, '..')
const projectRoot = path.resolve(studioRoot, '..')
const assetsRoot = path.resolve(projectRoot, 'src', 'assets')
const seedPath = path.resolve(studioRoot, 'seed', 'landingPage.json')

const client = getCliClient({apiVersion: '2026-05-22'})
const doc = JSON.parse(fs.readFileSync(seedPath, 'utf8'))
const uploaded = new Map()

const imageRef = (asset) => ({
  _type: 'image',
  asset: {
    _type: 'reference',
    _ref: asset._id,
  },
})

async function uploadImage(filename) {
  if (uploaded.has(filename)) return uploaded.get(filename)

  const filepath = path.resolve(assetsRoot, filename)
  let asset

  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      asset = await client.assets.upload('image', fs.createReadStream(filepath), {
        filename,
      })
      break
    } catch (error) {
      if (attempt === 3) throw error

      console.warn(`Retrying ${filename} after upload error: ${error.message}`)
      await new Promise((resolve) => setTimeout(resolve, attempt * 1200))
    }
  }

  const ref = imageRef(asset)

  uploaded.set(filename, ref)
  console.log(`Uploaded ${filename}`)

  return ref
}

async function tryUploadImage(filename) {
  try {
    return await uploadImage(filename)
  } catch (error) {
    console.warn(`Skipped ${filename}: ${error.message}`)
    return undefined
  }
}

doc.hero.image = await uploadImage('jar_main.png')
doc.productIntro.image = await uploadImage('sus_1.jpg')
doc.benefits.image = await uploadImage('jar_2.png')
doc.solution.image = await uploadImage('jar_3.png')
doc.composition.image = await uploadImage('spoon.jpg')
doc.audience.image = await uploadImage('walking.jpg')
doc.compare.image = await uploadImage('jar_4.png')
doc.compare.mobileImage = await uploadImage('jar_5.png')
doc.purchase.productImage = await uploadImage('jar_5.png')
doc.purchase.manualImage = await uploadImage('jar_6.png')
doc.purchase.manualMobileImage = await uploadImage('jar_6_mobile.png')

const benefitIcons = ['health_1.svg', 'health_2.svg', 'health_3.svg', 'health_4.svg', 'health_5.svg']

for (const [index, filename] of benefitIcons.entries()) {
  const icon = await tryUploadImage(filename)

  if (icon && doc.benefits.cards[index]) {
    doc.benefits.cards[index].icon = icon
  }
}

await client.createOrReplace(doc)
console.log(`Created/updated ${doc._id}`)
