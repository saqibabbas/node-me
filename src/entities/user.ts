import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('userDetails')
export class User {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'character varying',
    })
    public name: string;

    @Column({
        type: 'character varying',
        unique: true
    })
    public email: string;

    @Column({
        type: 'character varying',
    })
    public password: string;
}
