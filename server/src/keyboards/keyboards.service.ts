import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateKeyboardDto} from './dto/create-keyboard.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Keyboard} from "./entities/keyboard.entity";
import {ButtonsService} from "../buttons/buttons.service";

@Injectable()
export class KeyboardsService {

    constructor(@InjectRepository(Keyboard) private keyboardsRepository: Repository<Keyboard>,
                private buttonsService: ButtonsService) {
    }

    async create(createKeyboardDto: CreateKeyboardDto): Promise<Keyboard> {
        if(!createKeyboardDto) return;
        const keyboard = new Keyboard();
        keyboard.type = createKeyboardDto.type;
        keyboard.buttons = [];
        for(const buttonEntity of createKeyboardDto.buttons) {
            const button = await this.buttonsService.create(buttonEntity)
            keyboard.buttons.push(button);
        }
        return await this.keyboardsRepository.manager.save(keyboard);
    }

    async getById(id: number): Promise<Keyboard> {
        const keyboard = await this.keyboardsRepository.findOne({
            where: {id},
            relations: ['buttons']
        })
        if(!keyboard) throw new HttpException('Keyboard not found', HttpStatus.NOT_FOUND);
        return keyboard;
    }
}
