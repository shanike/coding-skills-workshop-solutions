import { BadRequestException, Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { GmailService } from './gmail.service';


@Controller('/api/gmail')
export class GmailController {
    constructor(private readonly gService: GmailService) { }

    @Get('ex')
    func(@Res() res: Response) {
        const value = this.gService.functionnn(res);
        return res.send(value);
    }

    @Get('/to-fixed')
    transformToFixed(@Query('ll') ll: number) {
        //! DTO or:
        if (!isNaN(Number(ll))) throw new BadRequestException();
        return ll.toFixed();
    }

}
