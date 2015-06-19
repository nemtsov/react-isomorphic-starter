import {Router} from 'express';
import info from '../../package.json';

const router = new Router();
const health = {
  status: 'ok',
  name: info.name,
  version: info.version
};

router.get('/', function (req, res) {
  res.send(health);
});

export default router;
