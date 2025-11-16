import express, { Request, Response } from "express";
import cors from "cors";

// Create a new express application instance
const app = express();

// Set the network port
const port = process.env.PORT || 3000;

// Define the root path with a greeting message
app.get("/Prueba", (req: Request, res: Response) => {
    res.json({ message: "Welcome to the Express + TypeScript Server!" });
});

// Start the Express server
app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`);
});
 
app.use(cors({
    origin: 'http://localhost:5173' // Adjust the origin as needed
}));

const getData = async () => {
    // Simulate fetching data from a database or external API
    return [{ id: 1, name: "Sample Data", email: "simpledata@tes.com" },
    { id: 2, name: "Sample Data 2", email: "simpledata2@tes.com" }];
}
// Define the root path with a greeting message
app.get("/Datos", async (req: Request, res: Response) => {
    try {
        const data = await getData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "An error occurred while fetching data." });
    }
});
