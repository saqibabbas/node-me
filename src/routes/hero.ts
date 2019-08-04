import * as ctrl from '../controllers/hero';
import * as Router from 'koa-router';

import config from '../../config';

import * as compose from 'koa-compose';

const router = new Router({
    prefix: `${config.api.baseURL}/hero`,
  });

router.get('/', ctrl.getAll);

router.post('/', ctrl.addhero);

router.put('/', ctrl.updatehero);

router.delete('/', ctrl.deletehero);

const routes = router.routes();
export default compose([routes]);
