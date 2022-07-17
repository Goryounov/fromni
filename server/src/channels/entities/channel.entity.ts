import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import {Campaign} from "../../campaigns/entities/campaign.entity";

@Entity({name: 'channels'})
export class Channel {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => Campaign, (campaign: Campaign) => campaign.channel)
    campaigns: Campaign;

}
