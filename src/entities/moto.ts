import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

 @Entity()
 export class product{
    @PrimaryGeneratedColumn()
    moto!: number;

    @Column("text")
    chassis!: string;

    @Column("text")
    plate!: string;

    @Column("text")
    color!: string;

    @Column("text")
    motor!: string;

    @Column("text")
    model!: string;
 }