import * as ctrl from '../controllers/hero';
import * as Router from 'koa-router';

import config from '../../config';

import * as compose from 'koa-compose';
const authenticate = require('../middlewares/authenticate');

const router = new Router({
  prefix: `${config.api.baseURL}/hero`,
});

router.get('/', authenticate, ctrl.getAll);

router.post('/', authenticate, ctrl.addhero);

router.put('/', authenticate, ctrl.updatehero);

router.delete('/', authenticate, ctrl.deletehero);

const routes = router.routes();
export default compose([routes]);
