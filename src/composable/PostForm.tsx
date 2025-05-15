import React, { useState } from "react";

import { usePosts } from "@/hooks/useAgencyBanking";

const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const { createPostMutation } = usePosts();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPostMutation.mutate({ title, body: "New Post", userId: 1 });
    setTitle(""); // Clear input after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter post title"
      />
      <button type="submit">Add Post</button>
    </form>
  );
};

export default PostForm;
