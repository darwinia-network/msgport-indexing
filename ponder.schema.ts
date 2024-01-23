import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  OrmpMessageAccepted: p.createTable({
    id: p.string(),
    msgHash: p.string(),
    root: p.string(),
    messageChannel: p.string(),
    messageIndex: p.bigint(),
    messageFromChainId: p.bigint(),
    messageFrom: p.string(),
    messageToChainId: p.bigint(),
    messageTo: p.string(),
    gasLimit: p.bigint(),
    encoded: p.string(),
  }),
  OrmpMessageDispatched: p.createTable({
    id: p.string(),
    msgHash: p.string(),
    dispatchResult: p.boolean(),
  }),
}));
