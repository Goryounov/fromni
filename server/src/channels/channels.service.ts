import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {CreateChannelsDto} from './dto/create-channels.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Channel} from "./entities/channel.entity";

@Injectable()
export class ChannelsService {

    constructor(@InjectRepository(Channel) private channelRepository: Repository<Channel>) {
    }

    async create(createChannelsDto: CreateChannelsDto): Promise<Channel[]> {
        //@ts-ignore
        return await this.channelRepository.save(createChannelsDto);
    }

    async getById(id: number): Promise<Channel> {
        const channel = await this.channelRepository.findOneBy({id: id});
        if(!channel) throw new HttpException('Channel not found', HttpStatus.NOT_FOUND);
        return channel;
    }
}
