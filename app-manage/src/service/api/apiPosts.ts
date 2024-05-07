import { useQuery } from "@tanstack/react-query";
import { APIClient } from ".";

export interface TypePosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const api = new APIClient<TypePosts>("posts");

export const usePostAPIs = () => {
  return useQuery({
    queryKey: ["Posts"],
    queryFn: api.find,
  })
}