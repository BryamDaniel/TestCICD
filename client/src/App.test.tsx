import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App'; // Asegúrate de que la ruta a App sea correcta

describe('App Component', () => {
  it('debería renderizar la aplicación sin errores', () => {
    // 1. Renderizamos el componente en el DOM virtual
    render(<App />);
    
    // 2. Buscamos algo que sepamos que existe en tu App.
    // Si es la plantilla por defecto de Vite, suele haber un logo o texto "Vite + React".
    // Aquí intentaremos buscar una imagen o texto genérico, 
    // o simplemente verificar que el "body" existe (prueba de humo básica).
    
    // Ejemplo: Buscamos si hay algún elemento en el documento
    expect(document.body).toBeInTheDocument();
  });

  it('debería mostrar un título (ejemplo)', () => {
    render(<App />);
    // Intenta buscar un texto que sepas que está en tu pantalla
    // Por ejemplo, si tienes un <h1>Vite + React</h1>:
    // const titleElement = screen.getByText(/vite/i);
    // expect(titleElement).toBeInTheDocument();
  });
});