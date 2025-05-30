/** @format */

import { StoreApi, UseBoundStore } from "zustand";

type WithSelectors<S> = S extends { getState: () => infer T }
  ? S & { use: { [K in keyof T]: () => T[K] } }
  : never;

export const createSelectors = <T extends object>(
  store: UseBoundStore<StoreApi<T>>
): WithSelectors<UseBoundStore<StoreApi<T>>> => {
  const typedStore = store as WithSelectors<UseBoundStore<StoreApi<T>>>;
  const state = store.getState();

  typedStore.use = {} as WithSelectors<UseBoundStore<StoreApi<T>>>["use"];

  (Object.keys(state) as Array<keyof T>).forEach((key) => {
    typedStore.use[key] = () => store((s) => s[key]);
  });

  return typedStore;
};

// /** @format */

// import { StoreApi, UseBoundStore } from "zustand";

// type WithSelectors<S> = S extends { getState: () => infer T }
//   ? S & { use: { [K in keyof T]: () => T[K] } }
//   : never;

// export const createSelectors = <S extends UseBoundStore<StoreApi<object>>>(
//   stores: S
// ) => {
//   const store = stores as WithSelectors<typeof stores>;

//   store.use = {};
//   for (const k of Object.keys(store.getState())) {
//     (store.use as any)[k] = () => store((s) => s[k as keyof typeof s]);
//   }

//   return store;
// };
