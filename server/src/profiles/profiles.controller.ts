import {Controller, Get, Post, Body, Param, UsePipes, ValidationPipe} from '@nestjs/common';
import {ProfilesService} from './profiles.service';
import {CreateProfileDto} from './dto/create-profile.dto';

@Controller('profiles')
export class ProfilesController {

    constructor(private readonly profilesService: ProfilesService) {
    }

    @UsePipes(ValidationPipe)
    @Post()
    async create(@Body() createProfileDto: CreateProfileDto) {
        return await this.profilesService.create(createProfileDto);
    }

    @Get()
    getAll() {
        return this.profilesService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.profilesService.getById(+id);
    }
}
