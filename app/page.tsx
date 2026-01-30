import Link from "next/link";
export interface Timestamp {
  timestamp: number;
  iso: string;
}

export interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface Reactions {
  likes: number;
  dislikes: number;
}

export const sleep = async (seconds: number) => {
  await new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
};

const fetchPosts = async () => {
  await sleep(3);
  const res = await fetch("https://dummyjson.com/posts");
  if (!res.ok) throw new Error("Sorry something went wrong");
  const posts: PostsResponse = await res.json();
  return posts;
};
const fetchLocalTime = async () => {
  const res = await fetch("http://localhost:4000/timestamp", {
    next: { revalidate: 30 },
  });
  if (!res.ok) throw new Error("Sorry something went wrong");
  const timestamp: Timestamp = await res.json();
  return timestamp;
};
const Home = async () => {
  const posts = await fetchPosts();
  const timestamp = await fetchLocalTime();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-14">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Posts
          </h1>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-semibold shadow-sm hover:bg-gray-800 hover:shadow-md active:scale-[0.98] transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Blog
          </Link>
        </div>

        <div className="mb-8 inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 shadow-sm">
          <span className="font-medium text-gray-800">Server Time:</span>
          <span className="font-mono text-gray-900">{timestamp.timestamp}</span>
        </div>

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
      </div>
    </div>
  );
};

export default Home;
