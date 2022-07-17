import {Controller, Get, Post, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import {CampaignsService} from './campaigns.service';
import {CreateCampaignDto} from './dto/create-campaign.dto';

@Controller('campaigns')
export class CampaignsController {

    constructor(private readonly campaignsService: CampaignsService) {
    }

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() createCampaignDto: CreateCampaignDto) {
        return this.campaignsService.create(createCampaignDto);
    }

    @Get()
    getAll() {
        return this.campaignsService.getAll();
    }
}
