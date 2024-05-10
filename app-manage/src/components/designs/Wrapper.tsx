import { ReactNode, useCallback } from "react";
import { useSkill } from "../../hooks/skill/useSkill";
import { useQueryClient } from "@tanstack/react-query";
import { useSkillDetail } from "../../hooks/skill_details/useSkillDetail";

interface Props {
  children: ReactNode;
}
const Wrapper = ({ children }: Props) => {
  
  const skill = useSkill();
  const skillDetail = useSkillDetail();

  skillDetail.Listen();
  skill.Listen(useCallback((data) => data.length, []));
  
  const queryClient = useQueryClient();
  if (queryClient.isFetching()) {
    console.log("At least one is fetching!");
  }

  return (
    <>
      {<h2>Loading....</h2>}
      {children}
    </>
  );
};

export default Wrapper;
