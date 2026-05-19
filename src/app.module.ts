import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import TransformResponseInterceptor from './interceptors/transform-response.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';

@Module({
  imports: [],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformResponseInterceptor },
    { provide: APP_FILTER, useClass: HttpExceptionFilter }
  ]
})
export class AppModule { }
