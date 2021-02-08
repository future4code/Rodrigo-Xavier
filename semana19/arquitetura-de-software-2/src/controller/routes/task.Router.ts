import express from "express";
import { createTask, getTaskById } from "../taskController";

export const taskRouter = express.Router()

taskRouter.put("/", createTask)
taskRouter.put("/:id", getTaskById )