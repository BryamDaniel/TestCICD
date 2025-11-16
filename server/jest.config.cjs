// server/jest.config.cjs (usando module.exports)
const config = {
  // Ya NO usamos 'preset: "ts-jest"' aquí
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  
  // SOLUCIÓN: Usar la clave 'transform' según la recomendación de ts-jest.
  // Esto le dice a Jest cómo transformar archivos .ts, resolviendo el error 'Unexpected token export'.
  transform: {
    // Aplica el transformador 'ts-jest' a todos los archivos .ts y .tsx
    '^.+\\.(ts|tsx)$': ['ts-jest', {
      // Configuraciones de ts-jest (opcional pero recomendado)
      tsconfig: './tsconfig.json',
      // Forzar un módulo consistente para las pruebas si tsconfig usa ESM
      module: 'commonjs', 
    }],
  },

  // Asegúrate de que no haya clave 'globals' con configuración de ts-jest antigua.
  // ... otras opciones como rootDir ...
};

module.exports = config;