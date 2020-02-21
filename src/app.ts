import express, { Application, Request, Response } from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app: Application = express();

// Add body parser middleware to read response body
app.use(bodyParser.json());

// Get /
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "API Running. GET /transactions to get list of transactions."
  });
});

// Get transactions
app.get("/transactions", (req: Request, res: Response) => {
  const transactions = fs.readFileSync("src/data/transactions.json", "utf-8");
  res.send(JSON.parse(transactions));
});

// Post a new transaction
app.post("/transactions", (req: Request, res: Response) => {
  const { currency } = req.body;

  // Throw an error if required fields are missing
  if (!currency) {
    res.send({
      status: "ERROR",
      message: "Field `currency` is missing."
    });
  } else {
    res.send({
      status: "SUCCESS",
      message: "Transaction saved."
    });
  }
});

app.listen(3000, () => console.log("Server running"));
