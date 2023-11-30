import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Truehook Root' };
  }

  @Get('truehook')
  @Render('truehook')
  truehook() {
    return { truehook: 'Truehook Page' };
  }
}
