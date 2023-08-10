import { Module } from "@nestjs/common";
import { GmailController } from "./gmail.controller";
import { GmailService } from "./gmail.service";

@Module({
    controllers: [GmailController,],
    providers: [GmailService],
})
export class GmailModule { }
