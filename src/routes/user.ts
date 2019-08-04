import * as ctrl from '../controllers/user';
import * as Router from 'koa-router';

import config from '../../config';

import * as compose from 'koa-compose';

const router = new Router({
    prefix: `${config.api.baseURL}/user`,
  });

router.post('/', ctrl.addUser);

router.post('/login', ctrl.login);

const routes = router.routes();
export default compose([routes]);
