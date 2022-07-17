import {Entity, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, Column} from "typeorm";
import {Channel} from "../../channels/entities/channel.entity";
import {Keyboard} from "../../keyboards/entities/keyboard.entity";
import {Profile} from "../../profiles/entities/profile.entity";

@Entity({name: 'campaigns'})
export class Campaign {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    message: string;

    @ManyToOne(() => Channel, (channel: Channel) => channel.campaigns)
    channel: Channel;

    @OneToOne(() => Keyboard)
    @JoinColumn()
    keyboard: Keyboard;

    @ManyToOne(() => Profile, (profile: Profile) => profile.campaigns)
    profile: Profile;
}
