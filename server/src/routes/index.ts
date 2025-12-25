// @ts-nocheck
import express, { type Express } from 'express';
var router = express.Router();

/* GET home page. */
export const indexRouter: Express = router.get('/', function(req, res, next) {
  res.json({'message': 'index'});
});
