import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  public getGraphQLHealth(): string {
    return 'ok';
  }
}
