// server/jest.config.cjs
const config = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  
  // CRUCIAL: Configuración de la transformación explícita y moderna
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest', 
      {
        // Ruta al archivo de configuración de TypeScript
        tsconfig: './tsconfig.json', 
        // ¡Forzar el módulo CommonJS para el entorno de prueba!
        module: 'commonjs', 
      },
    ],
  },
  
  // Si tienes la clave 'preset' o 'globals', bórrala. 
  // Usa solo la clave 'transform' con la configuración de ts-jest.

  rootDir: './',
  modulePaths: ['<rootDir>'],
};

module.exports = config;