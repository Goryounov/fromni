import {Module} from '@nestjs/common';
import {KeyboardsService} from './keyboards.service';
import {KeyboardsController} from './keyboards.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Keyboard} from "./entities/keyboard.entity";
import {ButtonsModule} from "../buttons/buttons.module";

@Module({
    controllers: [KeyboardsController],
    providers: [KeyboardsService],
    imports: [
        TypeOrmModule.forFeature([Keyboard]),
        ButtonsModule
    ],
    exports: [
        KeyboardsService
    ]
})
export class KeyboardsModule {
}
