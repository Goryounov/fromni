import {forwardRef, HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {CreateCampaignDto} from './dto/create-campaign.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Campaign} from "./entities/campaign.entity";
import {KeyboardsService} from "../keyboards/keyboards.service";
import {ChannelsService} from "../channels/channels.service";
import {ProfilesService} from "../profiles/profiles.service";

@Injectable()
export class CampaignsService {
    constructor(@InjectRepository(Campaign) private campaignRepository: Repository<Campaign>,
                private keyboardsService: KeyboardsService,
                private channelsService: ChannelsService,
                @Inject(forwardRef(() => ProfilesService)) private profilesService: ProfilesService) {
    }

    async create(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
        const campaign = new Campaign();
        campaign.message = createCampaignDto.message;
        campaign.keyboard = await this.keyboardsService.create(createCampaignDto.keyboard);
        campaign.channel = await this.channelsService.getById(createCampaignDto.channelId);
        return await this.campaignRepository.manager.save(campaign);
    }

    async getAll(): Promise<Campaign[]> {
        const campaigns = await this.campaignRepository.find({
            relations: ['channel', 'keyboard.buttons']
        });
        if(!campaigns || campaigns.length === 0) throw new HttpException('Campaigns not found', HttpStatus.NOT_FOUND);
        return campaigns;
    }
}
