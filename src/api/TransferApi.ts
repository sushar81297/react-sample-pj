import apiClient from "./apiClient";

export interface Post {
  id?: number;
  title: string;
  body: string;
  userId: number;
}

// Fetch all posts
export const fetchPosts = async (): Promise<Post[]> => {
  const { data } = await apiClient.get("/curry");
  return data;
};

// Create a new post
export const createPost = async (post: Post): Promise<Post> => {
  const { data } = await apiClient.post("/posts", post);
  return data;
};

// Update a post
export const updatePost = async (post: Post): Promise<Post> => {
  const { data } = await apiClient.put(`/posts/${post.id}`, post);
  return data;
};

// Delete a post
export const deletePost = async (id: number): Promise<void> => {
  await apiClient.delete(`/posts/${id}`);
};
