import { constants } from '@config';
import { Controller, Get } from '@nestjs/common';

export const WELCOME_MESSAGE = `Welcome to ${constants.app.name}!`;

@Controller()
export class HomeController {
  @Get('/')
  getWelcome(): string {
    return WELCOME_MESSAGE;
  }
}
