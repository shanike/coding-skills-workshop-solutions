import { Controller, Get } from '@nestjs/common';

@Controller('/api/google')
export class GoogleController {
    @Get('/1')
    hiiii() {
        return "hello 2!!!"
    }

}
