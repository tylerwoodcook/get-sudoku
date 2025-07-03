import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve everything from current folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

import fetch from "node-fetch"; // run `npm install node-fetch` first (v3 requires ES module syntax)

app.get("/api/puzzle", async (req, res) => {
    try {
        const response = await fetch("https://youdosudoku.com/api/");
        const data = await response.json();
        res.json(data); // send puzzle data to your frontend
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch puzzle" });
    }
});
