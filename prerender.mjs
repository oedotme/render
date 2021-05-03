import fs from 'node:fs'
import path from 'node:path'

import { render } from './dist/server/server.js'

const template = fs.readFileSync(path.resolve('./dist/static/index.html'), 'utf-8')

function lsfiles(dir) {
  return fs.readdirSync(path.resolve(dir)).reduce((list, file) => {
    const name = path.join(dir, file)
    return list.concat(fs.statSync(name).isDirectory() ? lsfiles(name) : [name])
  }, [])
}

const files = lsfiles('./src/pages').filter((page) => !/\[.+\]/g.test(page))

const routes = files.map((file) => file.replace(/^src\/pages|index|\.tsx$/g, ''))

const padding = Math.max(...routes.map((route) => route.length))

console.log('\nprerender')

for (const url of routes) {
  const context = {}
  const app = render(url, context)

  const html = template.replace(`<!--app-->`, app)

  const dir = `./dist/static${url}`.replace(/\/$/, '')
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })

  const file = `./dist/static${url.replace(/\/$/, '/index')}.html`
  fs.writeFileSync(path.resolve(file), html)

  console.log(`\x1b[32m${url}`.padEnd(padding), `\t\x1b[37m${file.replace('./', '')}`)
}
