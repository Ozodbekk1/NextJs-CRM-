import { IAppStore } from "@/types/app";
import { create } from "zustand";
import { createSelectors } from "./create-selectors";

const initialState = {
  isDrawer: false,
};

const useAppBase = create<IAppStore>()((set) => ({
  ...initialState,
  setIsDrawer: (isDrawer) => set(() => ({ isDrawer })),
}));

export const useAppStore = createSelectors(useAppBase);
