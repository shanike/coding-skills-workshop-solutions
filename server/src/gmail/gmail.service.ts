import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class GmailService {


    functionnn(res: Response) {
        res.cookie('lang', 'he');
        return new Date();
    }
}