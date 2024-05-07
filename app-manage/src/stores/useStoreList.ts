import { useStore } from "./useStore";
import { useShallow } from 'zustand/react/shallow';

export type Skill = {
  id: number;
  title: string;
};
export type Skills = {
  skills?: Skill[];
  input?: string;
};
export const useStoreList = () => useStore(useShallow((state) => state.skills));