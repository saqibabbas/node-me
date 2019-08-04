import * as repo from '../repositories/user';
import { User } from '../entities/user';
import { UserRequest } from '../interfaces/user';
import * as joi from 'joi';

import util = require('util');

export const add = async (user: UserRequest) => {
    await joi.validate(user, {
        name: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required()
    });
    const saveUser = new User();
    saveUser.name = user.name;
    saveUser.email = user.email;
    saveUser.password = user.password;
    return repo.save(saveUser);
};

export const login = async (user: UserRequest) => {
    await joi.validate(user, {
        email: joi.string().required(),
        password: joi.string().required()
    });
    const loginUser = new User();
    loginUser.name = user.email;
    loginUser.password = user.password;

    return await repo.login(loginUser);
};
