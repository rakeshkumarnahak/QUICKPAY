import { atom } from "recoil";

export const balanceAtom = atom<number>({
  key: "balanceAtom",
  default: 10,
});

export default balanceAtom;
