import z from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_MSAL_CLIENT_ID: z.string().trim().nonempty(),
  NEXT_PUBLIC_GRAPH_API_ENDPOINT: z.string().url().nonempty(),
});

export const envClientSchema = envSchema.parse({
  NEXT_PUBLIC_MSAL_CLIENT_ID: process.env.NEXT_PUBLIC_MSAL_CLIENT_ID,
  NEXT_PUBLIC_GRAPH_API_ENDPOINT: process.env.NEXT_PUBLIC_GRAPH_API_ENDPOINT,
});
