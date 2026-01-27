import express from "express";
const app = express();
const PORT = 4000;

app.get("/timestamp", (req, res) => {
  return res.json({
    timestamp: Date.now(),
    iso: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
