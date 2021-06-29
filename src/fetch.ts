import { mkdir, readFile, writeFile } from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import figma from '@centralstandard/figma-tokens'
import * as dotenv from 'dotenv'
import { Liquid } from 'liquidjs'
import kebabcase from 'lodash.kebabcase'
import prettier from 'prettier'

//
// Configuration
// -------------------------------------------------------------------------------------------------

const ROOT_DIR = join(dirname(fileURLToPath(import.meta.url)), '..')

const engine = new Liquid()
engine.registerFilter('kebabcase', (v: string) => kebabcase(v))

dotenv.config()

//
// Main function
// -------------------------------------------------------------------------------------------------

async function main() {
  const colors = await figma({
    accessToken: process.env.FIGMA_PERSONAL_TOKEN as string,
    amount: 222,
    teamId: process.env.FIGMA_TEAM_ID as string,
  })

  await mkdir(join(ROOT_DIR, '.generated'), { recursive: true })

  const typescriptTemplate = engine.parse(String(await readFile(join(ROOT_DIR, 'templates', 'index.ts.liquid'))))
  const typescript = prettier.format(await engine.render(typescriptTemplate, { colors }), { parser: 'babel-ts' })
  await writeFile(join(ROOT_DIR, '.generated', 'index.ts'), typescript)

  const jsonTemplate = engine.parse(String(await readFile(join(ROOT_DIR, 'templates', 'colors.json.liquid'))))
  const json = prettier.format(await engine.render(jsonTemplate, { colors }), { parser: 'json' })
  await writeFile(join(ROOT_DIR, '.generated', 'colors.json'), json)

  const cssTemplate = engine.parse(String(await readFile(join(ROOT_DIR, 'templates', 'index.css.liquid'))))
  const css = prettier.format(await engine.render(cssTemplate, { colors }), { parser: 'css' })
  await writeFile(join(ROOT_DIR, '.generated', 'index.css'), css)

  const sassTemplate = engine.parse(String(await readFile(join(ROOT_DIR, 'templates', 'index.scss.liquid'))))
  const sass = prettier.format(await engine.render(sassTemplate, { colors }), { parser: 'scss' })
  await writeFile(join(ROOT_DIR, '.generated', 'index.scss'), sass)
}

main()
