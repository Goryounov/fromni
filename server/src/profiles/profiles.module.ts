import {Module} from '@nestjs/common';
import {ProfilesService} from './profiles.service';
import {ProfilesController} from './profiles.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Profile} from "./entities/profile.entity";
import {CampaignsModule} from "../campaigns/campaigns.module";
import {Campaign} from "../campaigns/entities/campaign.entity";

@Module({
    controllers: [ProfilesController],
    providers: [ProfilesService],
    imports: [
        TypeOrmModule.forFeature([Profile, Campaign]),
        CampaignsModule
    ],
    exports: [
        ProfilesService
    ]
})
export class ProfilesModule {
}
