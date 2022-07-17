import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ProfilesModule} from './profiles/profiles.module';
import {ButtonsModule} from './buttons/buttons.module';
import {KeyboardsModule} from './keyboards/keyboards.module';
import {ChannelsModule} from './channels/channels.module';
import {Profile} from "./profiles/entities/profile.entity";
import {Channel} from "./channels/entities/channel.entity";
import {Keyboard} from "./keyboards/entities/keyboard.entity";
import {Button} from "./buttons/entities/button.entity";
import {CampaignsModule} from './campaigns/campaigns.module';
import {Campaign} from "./campaigns/entities/campaign.entity";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            entities: [Profile, Campaign, Channel, Keyboard, Button],
            synchronize: true,
            autoLoadEntities: true
        }),
        ProfilesModule,
        ChannelsModule,
        KeyboardsModule,
        ButtonsModule,
        CampaignsModule
    ],
    controllers: [AppController]
})
export class AppModule {
}
