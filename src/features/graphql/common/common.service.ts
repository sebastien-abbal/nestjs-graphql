import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  public getTestResponse(): string {
    return 'ok';
  }
}
