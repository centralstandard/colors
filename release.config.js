module.exports = {
  branches: ['main'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['dist/**/*.{js,map.ts}', 'docs', 'package.json'],
        message: 'chore(release): ${nextRelease.version}',
      },
    ],
  ],
}
