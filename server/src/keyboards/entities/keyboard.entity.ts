import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Button} from "../../buttons/entities/button.entity";

@Entity({name: 'keyboards'})
export class Keyboard {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    type: string;

    @OneToMany(() => Button, (button: Button) => button.keyboard)
    buttons: Button[];

}
