import {Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn} from "typeorm";
import {Campaign} from "../../campaigns/entities/campaign.entity";

@Entity({name: 'profiles'})
export class Profile {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Campaign, (campaign: Campaign) => campaign.profile)
    campaigns: any[];

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    createdAt: Date;

}
