import * as ctrl from '../controllers/user';
import * as Router from 'koa-router';

import config from '../../config';

import * as compose from 'koa-compose';

const router = new Router({
    prefix: `${config.api.baseURL}/user`,
  });

router.post('/signup', ctrl.addUser);

router.post('/signin', ctrl.login);

const routes = router.routes();
export default compose([routes]);
