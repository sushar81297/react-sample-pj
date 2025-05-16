import {
  createPost,
  deletePost,
  fetchPosts,
  updatePost,
} from "@/api/TransferApi";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const usePosts = () => {
  const queryClient = useQueryClient();

  // Fetch all posts
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  // Create a new post
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  // Update an existing post
  const updatePostMutation = useMutation({
    mutationFn: updatePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  // Delete a post
  const deletePostMutation = useMutation({
    mutationFn: deletePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  return {
    posts,
    isLoading,
    error,
    createPostMutation,
    updatePostMutation,
    deletePostMutation,
  };
};
