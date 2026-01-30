import Posts, { PostsFallback } from "@/components/Posts";
import ServerTime, { ServerTimeFallback } from "@/components/ServerTime";
import Link from "next/link";
import { Suspense } from "react";
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

const Home = async () => {
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
        <Suspense fallback={ServerTimeFallback()}>
          <ServerTime />
        </Suspense>
        <Suspense fallback={PostsFallback()}>
          <Posts />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
