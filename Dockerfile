FROM denoland/deno:latest

WORKDIR /app

COPY deps.ts .
RUN deno cache deps.ts

COPY . .

RUN deno cache src/main.ts

CMD ["run", "--allow-net", "src/main.ts"]