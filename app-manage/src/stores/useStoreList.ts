import { useStore } from "./useStore";

export type Skill = {
  id: number;
  title: string;
};
export type Skills = {
  skills?: Skill[];
  input?: string;
};
export const useStoreList = () => useStore((state) => state.skills);
