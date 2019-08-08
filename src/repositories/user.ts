import { getRepository } from 'typeorm';
import { User } from '../entities/user';
import { UserRequest } from '../interfaces/user';

export const save = async (user: User) => {
    return getRepository(User).insert(user);
};

export const get = async (user: UserRequest) => {
    return getRepository(User).findOne({ name: user.name, password: user.password });
};
