import useSkillAPI from "../../service/api/useSkillAPI";

const Conect = () => {
  useSkillAPI.Read();
  return <>Load</>;
};

export default Conect;
