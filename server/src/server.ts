import * as express from "express";
import { get } from "config";
import { info } from "winston";
import loginfo from "./config/loginfo.startup";
import db from "./config/db.startup";
import routes from "./config/routes.startup";

const app = express();

loginfo();
db(get('DATABASE'));
routes(app);

const port = process.env.port || get('PORT');
export const server = app.listen(port, () => info('listening on port: ' + port));