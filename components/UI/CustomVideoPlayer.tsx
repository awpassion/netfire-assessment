import { formatTime } from "@/utils";
import { useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import GradientText from "./GradientText";

const CustomVideoPlayer = ({ url }: { url: string }) => {
  const [playerInstance, setPlayerInstance] = useState<ReactPlayer>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [playedSeconds, setPlayedSeconds] = useState<number>(0);
  const [playedPercentage, setPlayedPercentage] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full relative">
      <ReactPlayer
        url={url}
        width={"100%"}
        height={"auto"}
        playing={isPlaying}
        muted={true}
        onEnded={() => setIsPlaying(false)}
        onProgress={(state) => {
          setPlayedSeconds(state.playedSeconds);
          setPlayedPercentage(state.played);
        }}
        onReady={(playerI) => setPlayerInstance(playerI)}
      />

      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end pb-4 lg:pb-40">
        <div className="container mx-auto">
          <div className="bg-black/40 px-3 md:px-6 py-2 md:py-4 rounded-lg shadow-lg flex items-center gap-4 self-stretch mt-24">
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className="bg-black text-primary p-4 rounded-full"
            >
              {isPlaying ? (
                <FaPause className="text-xs" />
              ) : (
                <FaPlay className="text-xs" />
              )}
            </button>

            <div
              ref={progressRef}
              onClick={(e) => {
                const element = progressRef.current!;
                const bounds = element.getBoundingClientRect();
                const x = e.clientX - bounds.left;
                const percent = (x * 100) / element.clientWidth / 100;
                setPlayedPercentage(percent);
                if (playerInstance) {
                  playerInstance.seekTo(percent);
                }
              }}
              className="h-2 rounded-full bg-black/70 flex-1 flex overflow-hidden cursor-pointer "
            >
              <div
                style={{
                  width: `${playedPercentage * 100}%`,
                }}
                className="bg-primary pointer-events-none"
              ></div>
            </div>

            <div className="text-white font-exo text-sm">
              {formatTime(playedSeconds)}
            </div>
          </div>
        </div>
      </div>
      {/* 
      <div className="absolute inset-0 container mx-auto flex flex-col pb-28 justify-end">
        
      </div> */}
    </div>
  );
};

export default CustomVideoPlayer;
