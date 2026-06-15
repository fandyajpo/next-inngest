import { inngest } from "@/inngest/client";

export async function sendHello() {
  await inngest.send({
    name: "app/hello",
    data: {
      name: "Fandy",
    },
  });
}
