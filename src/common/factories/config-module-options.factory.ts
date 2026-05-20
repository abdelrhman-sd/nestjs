
import { ConfigModuleOptions } from '@nestjs/config';
import { envValidationSchema } from '@common/config/env.validation';
import appConfig from '@common/config/app.config';
import databaseConfig from '@common/config/database.config';
import cacheConfig from '@common/config/cache.config';

export const configModuleOptions: ConfigModuleOptions = {
  isGlobal: true,
  load: [appConfig, databaseConfig, cacheConfig],
  validationSchema: envValidationSchema,
  validationOptions: {
    abortEarly: false,
  },
};
