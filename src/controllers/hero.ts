import * as service from '../services/hero';
import { Context } from 'koa';
import { HeroRequest } from '../interfaces/hero';
import { Hero } from '../entities/hero';

export const getAll = async (ctx: Context, next: () => void) => {
    ctx.state.data = await service.getAll();
    await next();
};

export const addhero = async (ctx: Context, next: () => void) => {
    const hero: HeroRequest = ctx.request.body;
    ctx.state.data = await service.add(hero);
    await next();
};

export const updatehero = async (ctx: Context, next: () => void) => {
    const hero: Hero = ctx.request.body;
    ctx.state.data = await service.update(hero);
    await next();
};

export const deletehero = async (ctx: Context, next: () => void) => {
    const hero: Hero = ctx.request.body;
    ctx.state.data = await service.remove(hero);
    await next();
};
