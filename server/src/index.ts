// 1. Importa el valor 'express' (la función)
import express from "express"; 
// 2. Importa SOLO el tipo 'Express' para la anotación de tipo
import type { Request, Response, Express } from 'express'; 
// 3. Importa el valor 'cors'
import cors from "cors";

// El resto de tu código
// Create a new express application instance
const app: Express = express(); // Usa el tipo 'Express' importado arriba

// Set the network port
const port = process.env.PORT || 3000;

// Middleware CORS debe ir antes de las rutas
app.use(cors({
    origin: 'http://localhost:5173' // Adjust the origin as needed
}));

// Define la ruta "/Prueba"
app.get("/Prueba", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

const getData = async () => {
    // Simulate fetching data from a database or external API
    return [{ id: 1, name: "Sample Data", email: "simpledata@tes.com" },
    { id: 2, name: "Sample Data 2", email: "simpledata2@tes.com" }];
}
// Define la ruta "/Datos"
app.get("/Datos", async (req: Request, res: Response) => {
    try {
        const data = await getData();
        res.json(data);
    } catch (error) {
        // Mejor logear el error para debug
        console.error("Error fetching data:", error); 
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
});

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});