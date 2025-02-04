import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

import { createStoreWithSelectors } from "@lib/utils";

type ModalsStore = {};

const modalsStore = createWithEqualityFn<ModalsStore>()(
  devtools((set) => ({})),
  Object.is,
);

export const useModalsStore = createStoreWithSelectors(modalsStore);

// USE EXAMPLE:
// const { setNewAccountModalOpen } = useModalsStore(["setNewAccountModalOpen"]);
