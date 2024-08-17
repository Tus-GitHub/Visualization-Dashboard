import { getVariableListing } from "../controllers/variable.controller.js";
import express from 'express';

const variableListingRouter = express.Router();

variableListingRouter.get('/get', getVariableListing);

export default variableListingRouter;