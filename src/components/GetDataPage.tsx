import { usePosts } from "@/hooks/useAgencyBanking";
export default function Home() {
  const { posts, isLoading, error } = usePosts();

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error loading posts.</p>;

  return (
    <div>
      <h1>I am Home Page</h1>
      <ul>
        {posts?.map((post: any) => (
          <li key={post.id}>{post.name}</li>
        ))}
      </ul>
    </div>
  );
}
