import {getVariablesListing } from "../controllers/variable.controller.js";
import express from 'express';

const variableListingRouter = express.Router();

variableListingRouter.get('/get', getVariablesListing);

export default variableListingRouter;