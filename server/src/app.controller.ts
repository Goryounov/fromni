import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {

    @Get()
    getMessage() {
        return 'The server is running';
    }
}
