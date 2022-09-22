/**
 * @desc: gen script command，make a new page generated by one click.
 * @author: nicejade
 */

const fs = require('fs')
const path = require('path')
const colors = require('colors')

const newFolderName = process.argv[2]

String.prototype.firstUpperCase = function() {
  return this.replace(/\b(\w)/g, $1 => {
    return $1.toLowerCase()
  })
}
const resolve = dir => {
  return path.join(__dirname, '../..', dir)
}

const successExecPrint = msg => {
  console.log(
    colors.green(`✓ `) +
      colors.cyan(`${msg} `) +
      colors.green('task has been successfully executed.')
  )
}

function createNewPage(newFolderPath) {
  const mReg = new RegExp('@PAGE_CLASS_NAME', 'g')
  const pageContent = fs.readFileSync(`${__dirname}/template.ux`, 'UTF-8')
  const rootClassName = newFolderName
    .firstUpperCase()
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
  const newContent = pageContent.replace(mReg, rootClassName)

  fs.mkdirSync(newFolderPath, 0777)
  fs.writeFile(`${newFolderPath}/index.ux`, newContent, error => {
    if (error) throw `Something went wrong: ${error}`
  })
  successExecPrint('Create New Page')
}

function saveRouter2Manifest() {
  const manifestPath = resolve('/src/manifest.json')
  let manifestConf = fs.readFileSync(manifestPath, 'UTF-8')
  manifestConf = JSON.parse(manifestConf)
  const routerPages = manifestConf.router.pages
  routerPages[`pages/${newFolderName}`] = {
    component: 'index'
  }
  manifestConf = JSON.stringify(manifestConf, null, 2)
  fs.writeFile(manifestPath, manifestConf, error => {
    if (error) throw `Something went wrong[@saveRouter2Manifest]: ${error}`
  })
  successExecPrint('Save Router Into Manifest')
}

function main() {
  if (!newFolderName) {
    return console.warn(`⚠️  Please enter the name of the page you want to create.`.underline.red)
  }

  const folderNameReg = /^[A-Z][[A-Za-z0-9]+$/
  if (!folderNameReg.test(newFolderName)) {
    return console.warn(`⚠️  Please enter the standard Folder name. Eg: XyzAbcde.`.underline.red)
  }

  const newFolderPath = path.join(__dirname, `../../src/pages/${newFolderName}`)
  const isExist = fs.existsSync(newFolderPath)

  if (isExist) {
    return console.warn(
      `⚠️  ${newFolderName} already exists in the /src/pages/ directory.`.underline.red
    )
  }
  createNewPage(newFolderPath)
  saveRouter2Manifest()
}

main()
