import { Request, Response } from "express";
import { ServiceContainer } from "../../Shared/infrastructure/ServiceContainer";
import { UserNotFoundError } from "../domain/UserNotFoundError";

export class ExpressUserController {
  async getAll(_req: Request, res: Response) {
    try {
      const users = await ServiceContainer.user.getAll.run();

      return res.status(200).json(users);
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  async getOneById(req: Request, res: Response) {
    try {
      const user = await ServiceContainer.user.getOneById.run(req.params.id);

      return res.status(200).json(user);
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const { createdAt, email, id, name } = req.body as {
        id: string;
        name: string;
        email: string;
        createdAt: string;
      };
      await ServiceContainer.user.create.run(
        id,
        name,
        email,
        new Date(createdAt)
      );

      return res.status(201).send();
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  async edit(req: Request, res: Response) {
    try {
      const { createdAt, email, id, name } = req.body as {
        id: string;
        name: string;
        email: string;
        createdAt: string;
      };
      await ServiceContainer.user.edit.run(
        id,
        name,
        email,
        new Date(createdAt)
      );

      return res.status(204).send();
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await ServiceContainer.user.delete.run(req.params.id);

      return res.status(204).send();
    } catch (error) {
      return this.handleError(error, res);
    }
  }

  private handleError(error: unknown, res: Response) {
    if (error instanceof UserNotFoundError) {
      return res.status(404).json({ message: error.message });
    }

    if (error instanceof Error) {
      return res.status(400).json({ message: error.message });
    }

    throw error;
  }
}
