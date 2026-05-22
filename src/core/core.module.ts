import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { configModuleOptions } from '@common/factories/config-module-options.factory';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from '@common/filters/http-exception.filter';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleConfigFactory } from '@common/factories/typeorm-module-options.factory';
import { CacheModuleOptionsFactory } from '@common/factories/cache-module-options.factory';
import TransformResponseInterceptor from '@common/interceptors/transform-response.interceptor';

@Module({

  imports: [

    // loading env file
    ConfigModule.forRoot(configModuleOptions),

    // caching
    CacheModule.registerAsync({
      isGlobal: true,
      useClass: CacheModuleOptionsFactory
    }),

    // DB Connection via TypeORM
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmModuleConfigFactory
    })
  ],

  providers: [
    { provide: APP_INTERCEPTOR, useClass: TransformResponseInterceptor },
    { provide: APP_FILTER, useClass: HttpExceptionFilter },
  ]

})
export class CoreModule { }
