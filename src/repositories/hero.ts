import { getRepository } from 'typeorm';
import { Hero } from '../entities/hero';

export const getAll = async () => {
    return getRepository(Hero).find({
        where: {
            isActive: true,
        }
    });
};

export const save = async (hero: Hero) => {
     return getRepository(Hero).insert(hero);
};

export const update = async (hero: Hero) => {
    return getRepository(Hero).save(hero);
};

export const remove = async (hero: Hero) => {
    return getRepository(Hero).delete(hero.id);
};
