import  proxy from "express-http-proxy";
import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

type config = {ip: string; port: string}

const app = express();
const env = dotenv.config({path:'./.env'}).parsed as config

app.use('/',proxy(`${env.ip}:${env.port}`));
app.listen(`${env.port}`, () => {
    console.log(`
  ################################################
  🛡️  Server listening on port: ${env.port}🛡️
  ################################################
`);
});
