// import * as Router from 'koa-router';

// import config from '../../config';

// import * as compose from 'koa-compose';
// import * as koaBodyparser from 'koa-bodyparser';

// import * as  jwt from 'jsonwebtoken';
// import { Context } from 'koa';
// import { LoginRequest } from '../interfaces/login';

// // const db = require('../db');
// // const bcrypt = require('../utilities/bcrypt');

// const secret = 'secret';
// const wrongUserPassMsg = 'Incorrect username and/or password.';


// const router = new Router({
//   prefix: `${config.api.baseURL}/hero`,
// });

// router.post('/', this.login);


// const login = async (ctx: Context) => {
//   const login: LoginRequest = ctx.request.body;

//   if (!login.userName) { ctx.throw(422, 'Username required.'); }
//   if (!login.password) { ctx.throw(422, 'Password required.'); }

//   //const dbUser = await db.first(['id', 'passwordHash']).from('users').where({ username });

//   //if (!dbUser) ctx.throw(401, wrongUserPassMsg);

//   //if (await bcrypt.compare(password, dbUser.passwordHash)) {
//   // const payload = { sub: dbUser.id };

//   const payload = { sub: login.userName };
//   const token = jwt.sign(payload, secret);

//   ctx.body = token;
// };

// const routes = router.routes();
// export default compose([routes]);