import { config } from '@config';
import { Controller, Get } from '@nestjs/common';

export const WELCOME_MESSAGE = `Welcome to ${config.app.name}!`;

@Controller()
export class HomeController {
  @Get('/')
  getWelcome(): string {
    return WELCOME_MESSAGE;
  }
}
