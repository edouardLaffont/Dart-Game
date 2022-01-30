import { Controller, Get } from '@nestjs/common';

@Controller()
export class MyTestController {
  @Get()
  getTestHello() {
    return "Bonjour"
  }

  @Get('/bye')
  getTestBye() {
    return "A plus"
  }
}
