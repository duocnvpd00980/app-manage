export const apiListen = (
  queryKey: string,
  queryFn: () => void,
  notify: ["data"]
) => {
  return {
    queryKey: [queryKey],
    queryFn: queryFn,
    select: ()=>{},
    notifyOnChangeProps: notify
  };
};