import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpAdapterHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { logger } from '@utils';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  catch(
    exception: { name: string; message: string },
    host: ArgumentsHost,
  ): void {
    const { httpAdapter } = this.httpAdapterHost;
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    const response = ctx.getResponse();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception?.message ?? 'Internal server error';
    const payload = {
      statusCode,
      timestamp: new Date().toISOString(),
      path: request?.url ? request.url : '/',
    };

    logger.error({
      action: 'EXCEPTION',
      exception: {
        ...payload,
        path: request?.url,
        method: request?.method,
        errorName: exception?.name,
        message,
      },
    });

    if (response?.status) httpAdapter.reply(response, payload, statusCode);
  }
}
