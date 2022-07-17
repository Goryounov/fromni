import {IsString, IsNotEmpty} from "class-validator";
import {Button} from "../../buttons/entities/button.entity";

export class CreateKeyboardDto {

    @IsString({message: 'Keyboard type must be string'})
    readonly type: string;

    @IsNotEmpty({message: 'No buttons'})
    readonly buttons: Button[];
}
