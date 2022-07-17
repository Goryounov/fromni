import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";
import {Keyboard} from "../../keyboards/entities/keyboard.entity";

@Entity({name: 'buttons'})
export class Button {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false})
    type: string;

    @Column({nullable: false})
    body: string;

    @ManyToOne(() => Keyboard, (keyboard: Keyboard) => keyboard.buttons)
    keyboard: Keyboard;

}
