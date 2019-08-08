import * as repo from '../repositories/user';
import { User } from '../entities/user';
import { UserRequest } from '../interfaces/user';
import * as joi from 'joi';
import * as  jwt from 'jsonwebtoken';
import { Context } from 'koa';

import util = require('util');

const secret = 'secret';
const wrongUserPassMsg = 'Incorrect username and/or password.';
export const add = async (user: UserRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required()
    });
    const saveUser = new User();
    saveUser.name = user.name;
    saveUser.password = user.password;
    saveUser.email = user.email;
    return repo.save(saveUser);
};

export const login = async (ctx: Context,user: UserRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        password: joi.string().required()
    });

    const dbUser = await repo.get(user); 

    if (!dbUser) { ctx.throw(401, wrongUserPassMsg); }

    const payload = { sub: user.name };

    return jwt.sign(payload, secret);
};