import {Controller, Get, Post, Body, Param, UsePipes, ValidationPipe} from '@nestjs/common';
import {KeyboardsService} from './keyboards.service';
import {CreateKeyboardDto} from './dto/create-keyboard.dto';

@Controller('keyboards')
export class KeyboardsController {

    constructor(private readonly keyboardsService: KeyboardsService) {
    }

    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() createKeyboardDto: CreateKeyboardDto) {
        return this.keyboardsService.create(createKeyboardDto);
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.keyboardsService.getById(+id);
    }
}
