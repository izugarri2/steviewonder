import { serveDir, serveFile } from "jsr:@std/http/file-server";

Deno.serve(async (req) => {
  const response = await serveDir(req, {
    fsRoot: "./",
    showDirListing: false,
    cleanUrls: true,
    enableCors: true,
  });

  if (response.status === 404) {
    const notFoundResponse = await serveFile(req, "./404.html");
    return new Response(notFoundResponse.body, {
      status: 404,
      headers: notFoundResponse.headers,
    });
  }

  return response;
});
