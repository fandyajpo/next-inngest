import { inngest } from "../client";

export const todoCreated = inngest.createFunction(
  {
    id: "todo-created",
    triggers: [
      {
        event: "todo.created",
      },
    ],
  },
  async ({ event, step }) => {
    await step.run("activity", async () => {
      console.log("Todo dibuat:", event.data.title);
    });

    await step.run("statistics", async () => {
      console.log("Update statistik");
    });

    await step.sleep("for-a-second", "30s");

    await step.run("reminder", async () => {
      console.log("Reminder:", event.data.title);
    });
  },
);
