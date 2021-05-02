import fs from 'node:fs'
import path from 'node:path'

import { render } from './dist/server/server.js'

const template = fs.readFileSync(path.resolve('./dist/static/index.html'), 'utf-8')

const pages = fs.readdirSync(path.resolve('./src/pages'))

const routes = pages.map((file) => {
  const name = file.replace(/\.tsx$/, '')
  return name === 'home' ? `/` : `/${name}`
})

for (const url of routes) {
  const context = {}
  const app = render(url, context)

  const html = template.replace(`<!--app-->`, app)

  const filePath = `./dist/static${url === '/' ? '/index' : url}.html`
  fs.writeFileSync(path.resolve(filePath), html)
}
