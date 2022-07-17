import {Campaign} from "../../campaigns/entities/campaign.entity";
import {IsNotEmpty} from "class-validator";

export class CreateProfileDto {

    @IsNotEmpty({message: 'No campaigns'})
    readonly campaigns: Campaign[]
}
