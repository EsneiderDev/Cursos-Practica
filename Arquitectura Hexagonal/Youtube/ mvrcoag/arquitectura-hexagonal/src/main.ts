import express, { NextFunction, Request, Response } from "express";
import { ExpressUserController } from "./lib/User/infrastructure/ExpressUserController";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const userController = new ExpressUserController();

app.get("/users", (req, res) => userController.getAll(req, res));
app.get("/users/:id", (req, res) => userController.getOneById(req, res));
app.post("/users", (req, res) => userController.create(req, res));
app.put("/users/:id", (req, res) => userController.edit(req, res));
app.delete("/users/:id", (req, res) => userController.delete(req, res));

// Safety net: catches anything the controllers don't handle themselves
// (e.g. malformed request bodies rejected by express.json()).
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error);

  return res.status(500).json({ message: "Internal server error" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
