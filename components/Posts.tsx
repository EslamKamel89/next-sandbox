import { PostsResponse, sleep } from "@/app/page";

const fetchPosts = async () => {
  await sleep(3);
  const res = await fetch("https://dummyjson.com/posts");
  if (!res.ok) throw new Error("Sorry something went wrong");
  const posts: PostsResponse = await res.json();
  return posts;
};
const Posts = async () => {
  const posts = await fetchPosts();
  return (
    <div className="space-y-8">
      {posts.posts.map((article) => (
        <div
          key={article.id}
          className="group bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
            {article.title}
          </h2>

          <p className="text-gray-600 leading-relaxed text-[15px]">
            {article.body}
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 border border-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                👍 {article.reactions.likes}
              </span>
              <span className="flex items-center gap-1">
                👎 {article.reactions.dislikes}
              </span>
            </div>
            <span className="font-medium text-gray-600">
              {article.views} views
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;

export function PostsFallback() {
  return (
    <div className="space-y-8 animate-pulse">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100"
        >
          <div className="h-6 w-3/4 bg-gray-300 rounded mb-4" />

          <div className="space-y-2 mb-5">
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-11/12 bg-gray-200 rounded" />
            <div className="h-4 w-10/12 bg-gray-200 rounded" />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <div className="h-6 w-16 bg-gray-200 rounded-full" />
            <div className="h-6 w-14 bg-gray-200 rounded-full" />
            <div className="h-6 w-20 bg-gray-200 rounded-full" />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-4">
              <div className="h-4 w-12 bg-gray-300 rounded" />
              <div className="h-4 w-12 bg-gray-300 rounded" />
            </div>
            <div className="h-4 w-16 bg-gray-300 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}
