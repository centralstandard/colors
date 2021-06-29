#!/usr/bin/env node

const { readFile, writeFile } = require('fs/promises')
const { join } = require('path')

const figma = require('@centralstandard/figma-tokens').default
const dotenv = require('dotenv')
const { build, dirname, glob, log, ts, tsconfig } = require('estrella')
const { Liquid } = require('liquidjs')
const kebabcase = require('lodash.kebabcase')
const prettier = require('prettier')

//
// Configuration
// -------------------------------------------------------------------------------------------------

const engine = new Liquid()
engine.registerFilter('kebabcase', (v) => kebabcase(v))

dotenv.config()

//
// Build scripts
// -------------------------------------------------------------------------------------------------

log.info('Fetching the colors from Figma...')

const options = { accessToken: process.env.FIGMA_PERSONAL_TOKEN, amount: 222, teamId: process.env.FIGMA_TEAM_ID }
figma(options).then(async (colors) => {
  log.info('Writing color files...')

  const typescriptTemplate = engine.parse(String(await readFile(join(__dirname, 'templates', 'index.ts.liquid'))))
  const typescript = prettier.format(await engine.render(typescriptTemplate, { colors }), { parser: 'babel-ts' })
  await writeFile(join(__dirname, 'index.ts'), typescript)

  const jsonTemplate = engine.parse(String(await readFile(join(__dirname, 'templates', 'colors.json.liquid'))))
  const json = prettier.format(await engine.render(jsonTemplate, { colors }), { parser: 'json' })
  await writeFile(join(__dirname, 'colors.json'), json)

  const cssTemplate = engine.parse(String(await readFile(join(__dirname, 'templates', 'index.css.liquid'))))
  const css = prettier.format(await engine.render(cssTemplate, { colors }), { parser: 'css' })
  await writeFile(join(__dirname, 'index.css'), css)

  const sassTemplate = engine.parse(String(await readFile(join(__dirname, 'templates', 'index.scss.liquid'))))
  const sass = prettier.format(await engine.render(sassTemplate, { colors }), { parser: 'scss' })
  await writeFile(join(__dirname, 'index.scss'), sass)

  const common = { entry: 'index.ts' }

  build({ ...common, format: 'cjs', platform: 'node', target: 'node10', outfile: 'index.cjs' })
  build({ ...common, format: 'esm', platform: 'neutral', onEnd, outfile: 'index.mjs' })

  function onEnd(config) {
    const outdir = dirname(config.outfile)
    const files = Array.from(new Set(config.entry.concat(tsconfig.include || []))).filter((v) => v)
    log.info('Generating type declaration files for', files.join(', '))

    const options = { ...tsconfig.compilerOptions, moduleResolution: undefined, declaration: true, outDir: outdir }
    const program = ts.ts.createProgram(files, options)

    program.emit(undefined, undefined, undefined, true)
    log.info('Wrote', glob(outdir + '/*.d.ts').join(', '))
  }
})
