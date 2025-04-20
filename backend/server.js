import dotenv from 'dotenv';
dotenv.config({ path: './config/config.env' });

import express from 'express';
import path from 'path';
import app from './app.js';

const __dirname = path.resolve();

// ✅ Serve Vite build files from frontend/dist
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER HAS STARTED AT PORT ${process.env.PORT}`);
});
