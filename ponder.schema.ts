import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  OrmpDefaultConfigUpdated: p.createTable({
    id: p.string(),
    oracle: p.string(),
    relayer: p.string(),
  }),
}));
