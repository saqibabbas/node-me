import * as service from '../services/user';
import { Context } from 'koa';
import { UserRequest } from '../interfaces/user';

export const addUser = async (ctx: Context, next: () => void) => {
    const user: UserRequest = ctx.request.body;
    ctx.state.data = await service.add(user);
    await next();
};

export const login = async (ctx: Context, next: () => void) => {
    const user: UserRequest = ctx.request.body;
    ctx.state.data = await service.login(ctx,user);
    await next();
};
