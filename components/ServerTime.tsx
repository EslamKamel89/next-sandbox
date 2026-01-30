import { Timestamp } from "@/app/page";

const fetchLocalTime = async () => {
  const res = await fetch("http://localhost:4000/timestamp", {
    next: { revalidate: 30 },
  });
  if (!res.ok) throw new Error("Sorry something went wrong");
  const timestamp: Timestamp = await res.json();
  return timestamp;
};
const ServerTime = async () => {
  const timestamp = await fetchLocalTime();
  return (
    <div className="mb-8 inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-600 shadow-sm">
      <span className="font-medium text-gray-800">Server Time:</span>
      <span className="font-mono text-gray-900">{timestamp.timestamp}</span>
    </div>
  );
};

export default ServerTime;

export function ServerTimeFallback() {
  return (
    <div className="mb-8 inline-flex items-center gap-2 bg-white/70 backdrop-blur px-4 py-2 rounded-lg border border-gray-200 text-sm shadow-sm w-56 animate-pulse">
      <div className="h-4 w-24 bg-gray-300 rounded" />
      <div className="h-4 w-16 bg-gray-400 rounded" />
    </div>
  );
}
