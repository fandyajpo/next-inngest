import { surreal } from "@/lib/surreal";
import { inngest } from "../client";
import { todo_stats_table } from "@/tables/todo";
import { CountQueryResult } from "@/types/count";

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
    await step.run("update-stats", async () => {
      const db = await surreal();
      const res = await db.query<CountQueryResult>(`
  SELECT count() AS total FROM todo GROUP ALL;
`);

      const total = res?.[0]?.[0]?.total ?? 0;

      const stats = await db.select(todo_stats_table);
      const current = Array.isArray(stats) ? stats[0] : stats;

      if (current) {
        await db.update(current.id).content({
          total,
          updatedAt: new Date().toISOString(),
        });
      } else {
        await db.create(todo_stats_table).content({
          total,
          updatedAt: new Date().toISOString(),
        });
      }

      return true;
    });
  },
);
