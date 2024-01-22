import { ponder } from "@/generated";

ponder.on("ORMP:AppConfigUpdated", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("ORMP:DefaultConfigUpdated", async ({ event, context }) => {
  console.log(event.args);
});
