import type { VideoItem } from "@/lib/data";

interface VideoCardProps {
  video: VideoItem;
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <a href={video.youtubeUrl} target="_blank" rel="noopener noreferrer" className="block group">
      <div className="rounded-md shadow-md overflow-hidden bg-white h-full flex flex-col hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
        <div className="relative">
          <img src={video.thumbnail} alt={video.title} className="w-full aspect-video object-cover" loading="lazy" />
          <div className="absolute inset-0 flex items-center justify-center text-5xl text-white bg-[rgba(0,0,0,0.05)] group-hover:bg-[rgba(0,0,0,0.2)] transition-colors">
            <i className="fas fa-play-circle drop-shadow-lg group-hover:scale-110 transition-transform"></i>
          </div>
        </div>
        <div className="p-2.5 font-semibold text-dark flex items-center h-full group-hover:text-gold transition-colors">{video.title}</div>
      </div>
    </a>
  );
}
