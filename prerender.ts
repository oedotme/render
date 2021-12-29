import fs from 'fs'
import path from 'path'

// @ts-ignore
import { render } from './build/server/dist/server.js'

const template = fs.readFileSync(path.resolve('./build/static/dist/index.html'), 'utf-8')

const ls = (entry: string): string[] => {
  if (!fs.lstatSync(entry).isDirectory()) return [entry]
  return fs.readdirSync(entry).flatMap((file: string) => ls(path.join(entry, file)))
}

const files = ls('./src/pages')

const routes = files.map((file: string) => file.replace(/^src\/pages|index|\.(jsx|tsx)$/g, ''))

const colors = { cyan: '\x1b[36m', gray: '\x1b[37m', green: '\x1b[32m', magenta: '\x1b[35m', reset: '\x1b[0m' }
const padding = Math.max(...routes.map((route: string) => route.length)) * 2

console.log(`${colors.cyan}prerender v0.1.0 ${colors.green}prerendering...${colors.reset}`)
console.log(`${colors.green}✓${colors.reset} ${routes.length} pages prerendered.`)

for (const url of routes) {
  render(url).then((app: string) => {
    const html = template.replace('<div id="app"></div>', `<div id="app">${app}</div>`)

    const dist = 'build/static/dist'
    const file = `./${dist}${url.replace(/\/$/, '/index')}.html`
    const dir = file.replace(/\/\[?[\w|\d|\.{3}]+\]?.html$/, '')

    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(path.resolve(file), html)

    console.log(
      `${colors.green}${url.length > 1 ? url.replace(/\/$/, '') : `${url}`}`.padEnd(padding),
      `\t${colors.reset}${Math.round((fs.lstatSync(file).size / 1024) * 100) / 100} KiB`
    )
  })
}
