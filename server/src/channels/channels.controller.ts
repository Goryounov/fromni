import {Controller, Get, Post, Body, Param, UsePipes, ValidationPipe} from '@nestjs/common';
import {ChannelsService} from './channels.service';
import {CreateChannelsDto} from './dto/create-channels.dto';

@Controller('channels')
export class ChannelsController {
    constructor(private readonly channelsService: ChannelsService) {
    }

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() createChannelsDto: CreateChannelsDto) {
        return this.channelsService.create(createChannelsDto);
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.channelsService.getById(+id);
    }
}
