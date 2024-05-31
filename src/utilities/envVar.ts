import 'dotenv/config';
import * as env from 'env-var';

export default {
  POSTGRES_HOST: env.get('POSTGRES_HOST').required().asString(),
  POSTGRES_USERNAME: env.get('POSTGRES_USERNAME').required().asString(),
  POSTGRES_PASSWORD: env.get('POSTGRES_PASSWORD').required().asString(),
  POSTGRES_PORT: env.get('POSTGRES_PORT').required().asInt(),
  POSTGRES_DB: env.get('POSTGRES_DB').required().asString(),
};
