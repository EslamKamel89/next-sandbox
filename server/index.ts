import { sleep } from "@/app/page";
import express from "express";
const app = express();
const PORT = 4000;

app.get("/timestamp", async (req, res) => {
  await sleep(3);
  return res.json({
    timestamp: Date.now(),
    iso: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
