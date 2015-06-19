import {Router} from 'express';

const router = new Router();

router.get('/', function (req, res) {
  res.end('');
});

export default router;
