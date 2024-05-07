import { APIClient } from ".";

export interface TypePosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default new APIClient<TypePosts>("posts");

