/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // 1. Use the ESM preset
  preset: 'ts-jest/presets/default-esm', 
  testEnvironment: 'node',
  
  // 2. Tell Jest to handle .ts files as modules
  extensionsToTreatAsEsm: ['.ts'],

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        // 3. vital for "type": "module" support
        useESM: true, 
        tsconfig: 'tsconfig.json',
      },
    ],
  },
};