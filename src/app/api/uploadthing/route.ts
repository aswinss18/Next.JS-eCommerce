import { createRouteHandler } from "uploadthing/next";

import { ourFileRouter } from "./core";
import { NextRequest, NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,

  // Apply an (optional) custom config:
  // config: { ... },
});

export async function DELETE(request: NextRequest, response: NextResponse) {
  const { filekey } = await request.json();
  const utApi = new UTApi();
  await utApi.deleteFiles(filekey);

  return NextResponse.json({ message: "file deleted" });
}
