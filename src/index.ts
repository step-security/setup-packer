import * as core from "@actions/core";

import { acquirePacker } from "./installer.js";
import { validateSubscription } from "./subscription.js";

async function run() {
  try {
    await validateSubscription();
    await acquirePacker();
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message);
    }
  }
}

run();
