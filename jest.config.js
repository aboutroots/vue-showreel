module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  snapshotSerializers: ['jest-serializer-vue'],
  transformIgnorePatterns: ['node_modules/(?!(vue-toast-notification|lodash-es|vue-ionicons)/)'],
  coverageReporters: ['json', 'html', 'lcov', 'json-summary'],
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx,vue}',
    'src/services/**/*.{js,jsx,ts,tsx,vue}',
    'src/store/**/*.{js,jsx,ts,tsx,vue}',
    'src/views/**/*.{js,jsx,ts,tsx,vue}',
  ],
};
