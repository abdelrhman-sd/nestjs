import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import TransformResponseInterceptor from './interceptors/transform-response.interceptor';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { ConfigModule } from '@nestjs/config';

@Module({

  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
  ],

  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformResponseInterceptor },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ]

})
export class AppModule { }
