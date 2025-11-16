/** @type {import('ts-jest').JestConfigWithTsJest} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  // Directorio donde buscar archivos de prueba
  rootDir: './',
  modulePaths: ['<rootDir>'],
};  

export default config;