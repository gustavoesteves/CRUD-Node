import express = require("express");
import { get } from "config";
import { info } from "winston";

const app = express();

const port = process.env.port || get('PORT');
export const server = app.listen(port, () => info('listening on port: ' + port));