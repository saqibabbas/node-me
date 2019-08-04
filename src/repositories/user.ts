import { getRepository } from 'typeorm';
import { User } from '../entities/user';

export const save = async (user: User) => {
    return getRepository(User).insert(user);
};

export const login = async (user: User) => {
    return getRepository(User).findOne({ email: user.email, password: user.password });
};
