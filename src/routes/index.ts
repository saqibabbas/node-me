import * as compose from 'koa-compose';
import * as Router from 'koa-router';
import ping from './ping';
import hero from './hero';
import user from './user';

const router = new Router();
const routes = router.routes();
const routesToExport = [routes, ping, hero, user];

export default () => compose(routesToExport);
