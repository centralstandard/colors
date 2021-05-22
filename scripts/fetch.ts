import { mkdir, writeFile } from 'fs/promises'
import { join } from 'path'

import figma from '@centralstandard/figma-tokens'
import { config } from 'dotenv'
import { render } from 'nunjucks'
import { format } from 'prettier'

config()

async function main() {
  const colors = await figma({
    accessToken: process.env.FIGMA_PERSONAL_TOKEN as string,
    amount: 222,
    teamId: process.env.FIGMA_TEAM_ID as string,
  })

  await mkdir(join(__dirname, '..', 'src'), { recursive: true })

  const typescript = format(render(join(__dirname, './index.ts.njk'), { colors }), { parser: 'babel-ts' })
  await writeFile(join(__dirname, '..', 'src', 'index.ts'), typescript)

  const json = format(render(join(__dirname, './colors.json.njk'), { colors }), { parser: 'json' })
  await writeFile(join(__dirname, '..', 'src', 'colors.json'), json)

  const css = format(render(join(__dirname, './index.css.njk'), { colors }), { parser: 'css' })
  await writeFile(join(__dirname, '..', 'src', 'index.css'), css)
}

main()
