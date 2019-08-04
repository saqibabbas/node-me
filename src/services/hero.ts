import * as repo from '../repositories/hero';
import { Hero } from '../entities/hero';
import { HeroRequest } from '../interfaces/hero';
import * as joi from 'joi';

export const getAll = async () => {
    console.info('getall');
    return repo.getAll();
};

export const add = async (hero: HeroRequest) => {
    await joi.validate(hero, {
        name: joi.string().required(),
    });
    const saveHero = new Hero();
    saveHero.name = hero.name;
    return repo.save(saveHero);
};

export const update = async (hero: HeroRequest) => {
    await joi.validate(hero, {
        id: joi.number().required(),
        name: joi.string().required()
    });

    // get hero
    const updateHero = new Hero();
    updateHero.name = hero.name;
    return repo.update(updateHero);
};

export const remove = async (hero: Hero) => {
    await joi.validate(hero, {
        id: joi.number().required()
    });

    return repo.remove(hero);
};
