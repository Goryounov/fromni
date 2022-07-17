import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateProfileDto} from './dto/create-profile.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Profile} from "./entities/profile.entity";
import {CampaignsService} from "../campaigns/campaigns.service";

@Injectable()
export class ProfilesService {
    constructor(@InjectRepository(Profile) private profilesRepository: Repository<Profile>,
                private campaignsService: CampaignsService) {
    }

    async create(createProfileDto: CreateProfileDto): Promise<Profile> {
        const profile = new Profile();
        profile.campaigns = [];
        for (const campaignEntity of createProfileDto.campaigns) {
            const campaign = await this.campaignsService.create(campaignEntity);
            profile.campaigns.push(campaign);
        }
        return await this.profilesRepository.manager.save(profile);
    }

    async getAll(): Promise<Profile[]> {
        const profiles = await this.profilesRepository.find({
            relations: ['campaigns.channel', 'campaigns.keyboard.buttons'],
            order: {
                createdAt: 'DESC'
            }
        });
        if (!profiles || profiles.length === 0) throw new HttpException('Profiles not found', HttpStatus.NOT_FOUND);
        return profiles;
    }

    async getById(id: number): Promise<Profile> {
        const profile = await this.profilesRepository.findOne({
            where: {id},
            relations: ['campaigns.keyboard.buttons']
        });
        if (!profile) throw new HttpException('Profile not found', HttpStatus.NOT_FOUND);
        return profile;
    }
}