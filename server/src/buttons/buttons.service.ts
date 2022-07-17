import {Injectable} from '@nestjs/common';
import {CreateButtonDto} from './dto/create-button.dto';
import {Button} from "./entities/button.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ButtonsService {

    constructor(@InjectRepository(Button) private buttonsRepository: Repository<Button>) {
    }

    async create(createButtonDto: CreateButtonDto): Promise<Button> {
        return await this.buttonsRepository.save(createButtonDto);
    }
}
