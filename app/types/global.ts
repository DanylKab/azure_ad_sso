import zod from "zod";

//@configs
import { envSchema } from "@configs";

type EnvSchemaType = zod.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends EnvSchemaType {}
  }
}
