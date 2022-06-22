module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  snapshotSerializers: ['jest-serializer-vue'],
  transformIgnorePatterns: ['node_modules/(?!(vue-toast-notification|lodash-es|vue-ionicons)/)'],
  coverageReporters: ['json', 'html', 'lcov'],
  collectCoverageFrom: [
    '<rootDir>/components/**/*.{js,vue,ts}',
    '<rootDir>/views/**/*.{js,vue,ts}',
    '<rootDir>/services/**/*.{js,vue,ts}',
    '<rootDir>/store/**/*.{js,vue,ts}',
    '<rootDir>/utils/**/*.{js,vue,ts}',
  ],
};
