import z from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_MSAL_CLIENT_ID: z.string().trim().nonempty(),
  NEXT_PUBLIC_MSAL_TENANT_ID: z.string().trim().nonempty(),
  NEXT_PUBLIC_MSAL_AUTHORITY_DOMAIN: z.string().trim().nonempty(),
  NEXT_PUBLIC_MSAL_REDIRECT_URL: z.string().url().nonempty(),
});

export const envClientSchema = envSchema.parse({
  NEXT_PUBLIC_MSAL_CLIENT_ID: process.env.NEXT_PUBLIC_MSAL_CLIENT_ID,
  NEXT_PUBLIC_MSAL_TENANT_ID: process.env.NEXT_PUBLIC_MSAL_TENANT_ID,
  NEXT_PUBLIC_MSAL_REDIRECT_URL: process.env.NEXT_PUBLIC_MSAL_REDIRECT_URL,
  NEXT_PUBLIC_MSAL_AUTHORITY_DOMAIN:
    process.env.NEXT_PUBLIC_MSAL_AUTHORITY_DOMAIN,
});
