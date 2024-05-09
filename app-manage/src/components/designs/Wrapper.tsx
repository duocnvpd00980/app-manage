import { ReactNode } from "react";
import useSkillAPI from "../../api/useSkillAPI";

interface Props {
  children: ReactNode;
}
const Wrapper = ({ children }: Props) => {
  const { isFetched } = useSkillAPI.Find();
  return (
    <>
      {isFetched && <h2>Loading....</h2>}
      {children}
    </>
  );
};

export default Wrapper;
