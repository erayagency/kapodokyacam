import type { VideoItem } from "@/lib/data";

interface VideoCardProps {
  video: VideoItem;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block">
      <div className="rounded-md shadow-md overflow-hidden bg-white h-full flex flex-col">
        <div className="relative">
          <img src={video.thumbnail} alt={video.title} className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center text-4xl text-white bg-[rgba(0,0,0,0.05)]">
            <i className="fas fa-play shadow-lg"></i>
          </div>
        </div>
        <div className="p-2.5 font-semibold text-dark flex items-center h-full">{video.title}</div>
      </div>
    </a>
  );
}
