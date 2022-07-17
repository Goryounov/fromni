import {Controller, Post, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import {ButtonsService} from './buttons.service';
import {CreateButtonDto} from './dto/create-button.dto';

@Controller('buttons')
export class ButtonsController {

    constructor(private readonly buttonsService: ButtonsService) {
    }

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() createButtonDto: CreateButtonDto) {
        return this.buttonsService.create(createButtonDto);
    }
}
