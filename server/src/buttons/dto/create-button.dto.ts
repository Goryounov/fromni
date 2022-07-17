import {IsString} from "class-validator";

export class CreateButtonDto {

    @IsString({message: 'Button type must be string'})
    readonly type: string;

    @IsString({message: 'Button body must be string'})
    readonly body: string;
}
