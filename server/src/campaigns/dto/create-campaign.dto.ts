import {Keyboard} from "../../keyboards/entities/keyboard.entity";
import {IsString} from "class-validator";

export class CreateCampaignDto {

    @IsString({message: 'Message must be string'})
    readonly message: string;

    readonly keyboard: Keyboard;

    readonly channelId?: number;

}

