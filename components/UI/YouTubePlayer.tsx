"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface YouTubePlayerProps {
  videoUrl: string;
  priority?: boolean;
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  videoUrl,
  priority,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract YouTube video ID
  const videoId = useMemo(() => {
    try {
      const url = new URL(videoUrl);
      let id = url.searchParams.get("v"); // Standard YouTube URL (e.g., ?v=VIDEO_ID)

      if (!id) {
        // Handle direct embed or shortened URLs
        const paths = url.pathname.split("/");
        id = paths[paths.length - 1]; // Extract the last segment as video ID
      }

      return id;
    } catch {
      return null;
    }
  }, [videoUrl]);

  if (!videoId) {
    return <div className="text-red-500">Invalid YouTube URL</div>;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`;
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="relative w-full h-full overflow-hidden rounded-md">
      {!isPlaying ? (
        <div
          className="relative cursor-pointer group"
          onClick={() => setIsPlaying(true)}>
          <Image
            src={thumbnailUrl}
            alt="YouTube video thumbnail"
            width={450}
            height={450}
            priority={priority}
            className="w-full h-[450px] object-cover "
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-all group-hover:bg-opacity-50">
            <Play
              size={64}
              className="text-white opacity-80 transition-opacity group-hover:opacity-100"
            />
          </div>
        </div>
      ) : (
        <iframe
          src={embedUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="relative left-0 top-0 w-full h-[450px]"
        />
      )}
    </div>
  );
};

export default YouTubePlayer;
