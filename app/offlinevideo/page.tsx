"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, EllipsisVertical } from "lucide-react";
import YouTubePlayer from "@/components/UI/YouTubePlayer";
import ProgressTabs from "@/components/UI/ProgressTabs";
import Progress from "@/components/UI/Progress";
import Image from "next/image";
import { Tab } from "@/types/courses";
import { courseVideos } from "@/constants/courses.data";

// Progress Tabs
const tabs: Tab[] = [
  {
    title: "Course Videos",
    total: 10,
    completed: 1,
    items: courseVideos.map((video) => ({
      name: video.title,
      url: video.url,
      locked: video.locked,
      duration: video.duration,
    })),
  },
  { title: "Audio", total: 25, completed: 1 },
  { title: "Module", total: 50, completed: 1 },
  { title: "Quiz", total: 10, completed: 1 },
];

const OfflineVideo: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    if (
      currentVideo < courseVideos.length - 1 &&
      !courseVideos[currentVideo + 1].locked
    ) {
      setCurrentVideo(currentVideo + 1);
    }
  };

  const prevVideo = () => {
    if (currentVideo > 0) {
      setCurrentVideo(currentVideo - 1);
    }
  };

  return (
    <div className="container mx-auto px-6 lg:max-w-[1170px] my-10">
      <h1 className="text-4xl font-bold mb-6">Offline Video</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player Section */}
        <div className="shadow-halfShadow p-3 rounded-md md:col-span-2">
          <div className="flex justify-between items-center mb-3">
            <div className="mb-4">
              <h2 className="font-bold text-xl mb-3">Course Name</h2>
              <div className="flex gap-2 items-center ">
                <Image
                  className="w-8 h-8 rounded-full"
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="avatar"
                  width={32}
                  height={32}
                />
                <span className="text-xs text-secondary">Instractor name</span>
              </div>
            </div>
            <button className="text-secondary">
              <EllipsisVertical size={18} />
            </button>
          </div>
          <div className=" overflow-hidden relative">
            <YouTubePlayer
              videoUrl={courseVideos[currentVideo].url}
              priority={true}
            />
          </div>
          <div className="flex justify-between mt-5">
            <button
              className="p-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              onClick={prevVideo}
              disabled={currentVideo === 0}>
              <ChevronLeft />
            </button>
            <button
              className="p-2 border rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
              onClick={nextVideo}
              disabled={currentVideo === courseVideos.length - 1}>
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Progress Sidebar */}
        <div className="shadow-halfShadow p-3 rounded-md md:col-span-1">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-semibold text-lg mb-3">Progress</h2>
              <button className="text-secondary">
                <EllipsisVertical size={18} />
              </button>
            </div>
            <Progress value={50} />
            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-500 text-xs my-3">Course Name here</p>
              <span className="text-xs text-secondary">10/110</span>
            </div>
          </div>
          <ProgressTabs
            tabs={tabs}
            currentVideoIndex={currentVideo}
            setCurrentVideo={setCurrentVideo}
          />
        </div>
      </div>
    </div>
  );
};

export default OfflineVideo;
