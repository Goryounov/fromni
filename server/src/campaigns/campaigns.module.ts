import {forwardRef, Module} from '@nestjs/common';
import {CampaignsService} from './campaigns.service';
import {CampaignsController} from './campaigns.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Campaign} from "./entities/campaign.entity";
import {KeyboardsModule} from "../keyboards/keyboards.module";
import {ChannelsModule} from "../channels/channels.module";
import {ProfilesModule} from "../profiles/profiles.module";
import {Profile} from "../profiles/entities/profile.entity";

@Module({
    controllers: [CampaignsController],
    providers: [CampaignsService],
    imports: [
        TypeOrmModule.forFeature([Campaign, Profile]),
        forwardRef(() => ProfilesModule),
        KeyboardsModule,
        ChannelsModule,
    ],
    exports: [
        CampaignsService
    ]
})
export class CampaignsModule {
}
