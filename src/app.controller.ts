import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  getNumberBlock(): Promise<number> {
    return this.appService.getCurrentBlock();
  }
  @Get('/test')
  getHello(): string {
    return this.appService.getHello();
  }
}
