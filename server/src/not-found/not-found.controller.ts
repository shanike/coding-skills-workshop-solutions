import { Controller, Get } from "@nestjs/common";

@Controller('')
export class NotFoundController {

    @Get('*')
    func404() {
        return "NOT FOUND";
    }
    
}
