import { devtools } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

import { createStoreWithSelectors } from "@lib/utils";

type ModalsStore = {
  IdInEdit?: string;
  isEditAccountModalOpen: boolean;

  setEditAccountModalOpen: (id: string) => void;
  setEditAccountModalClose: () => void;
};


const modalsStore = createWithEqualityFn<ModalsStore>()(
  devtools((set) => ({
    IdInEdit: undefined,
    isEditAccountModalOpen: false,

    setEditAccountModalOpen: (id) => set((state) => ({ ...state, isEditAccountModalOpen: true, IdInEdit: id })),
    setEditAccountModalClose: () => set((state) => ({ ...state, isEditAccountModalOpen: false, IdInEdit: undefined })),
  })),
  Object.is,
);

export const useModalsStore = createStoreWithSelectors(modalsStore);

// USE EXAMPLE:
// const { setNewAccountModalOpen } = useModalsStore(["setNewAccountModalOpen"]);
