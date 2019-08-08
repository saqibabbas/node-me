import * as  jwt from 'jsonwebtoken';
import { Context } from 'koa';

const secret = 'secret';

module.exports = async (ctx: Context, next: () => void) => {
    if (!ctx.headers.authorization) { ctx.throw(403, 'No token found.'); }

    const token = ctx.headers.authorization.split(' ')[1];

    try {
        jwt.verify(token, secret);
    } catch (err) {
        ctx.throw(err.status || 403, err.text);
    }

    await next();
};