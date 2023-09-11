import { headers } from "next/headers";
import { NextResponse } from "next/server";

//@configs
import { graphConfig } from "@configs";

/**
 * Route to get the user information from graph API
 * @returns
 */
export async function GET() {
  const headersList = headers();

  const authorization = headersList.get("authorization") ?? "";

  const res = await fetch(graphConfig.graphMeEndpoint, {
    headers: {
      Authorization: authorization,
    },
  });

  const data = await res.json();

  return NextResponse.json(data);
}
