module.exports = wallaby => {
  return {
    files: ['src/**/*.js'],
    tests: [
      'src/**/*.test.js',
    ],
    testFramework: 'ava',
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        presets: ['es2015', 'stage-2'],
        plugins: [
          require('babel-plugin-espower/create')(
            require('babel-core'), {
              patterns: require('ava/lib/enhance-assert').PATTERNS,
            }
          ),
          'rewire',
        ],
      }),
    },
  }
}
