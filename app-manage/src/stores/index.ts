import _ from "lodash";
import { ISkill } from "../hooks/skill/useSkillAPI";
import { storeSkill } from "./storeSkill";
import { ISkillDetails } from "../hooks/skill_details/useSkillDetailAPI";


/* UPDATE TYPESCRIPT */
export interface IDocument extends ISkill, ISkillDetails {}
export type ICollection = "skill" | "skill_details";
/* UPDATE TYPESCRIPT */


type Store = (get: () => void, set: (document: IDocument) => void) => void;

export const store = (collection: ICollection, callback: Store) => {
  const { setState, getState } = storeSkill;
  const documents = getState();
  const documentStore = documents[collection];
  return callback(
    () => {
      return documentStore;
    },
    (document) => {
      const equal = _.isEqual(document, documentStore);
      let data: object | [object] = document;
      if (equal) return;
      if (!Array.isArray(data)) {
        data = [...documentStore, document];
      }
      setState({
        [collection]: data,
      });
    }
  );
};

// type Callback = (state: IStoreSkill) => void;
// let unsubscribe: (() => void) | undefined;

// export const subStore = (callback: Callback) => {
//   unsubscribe = storeSkill.subscribe((state) => {
//     return callback(state);
//   });
// };

// export const unsubStore = () => {
//   if (unsubscribe) {
//     unsubscribe();
//     unsubscribe = undefined;
//   }
// };
