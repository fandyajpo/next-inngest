import { inngest } from "../client";

export const helloFunction = inngest.createFunction(
  {
    id: "hello-world",
    triggers: [
      {
        event: "app/hello",
      },
    ],
  },
  async ({ event, step }) => {
    await step.run("say-hello", async () => {
      console.log("Halo dari Inngest!");
      console.log(event.data);
    });
  },
);
