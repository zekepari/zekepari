"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

interface CollapsibleVideoProps {
  src: string;
  title: string;
}

export default function CollapsibleVideo({
  src,
  title,
}: CollapsibleVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const measureHeight = useCallback(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  useEffect(() => {
    measureHeight();

    const handleResize = () => measureHeight();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [measureHeight, src]);

  useEffect(() => {
    if (isOpen) {
      measureHeight();
    }
  }, [isOpen, measureHeight]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) {
      return;
    }

    const handleVideoLoad = () => measureHeight();

    videoElement.addEventListener("loadedmetadata", handleVideoLoad);
    videoElement.addEventListener("loadeddata", handleVideoLoad);

    return () => {
      videoElement.removeEventListener("loadedmetadata", handleVideoLoad);
      videoElement.removeEventListener("loadeddata", handleVideoLoad);
    };
  }, [measureHeight, src]);

  useEffect(() => {
    if (videoRef.current) {
      if (isOpen) {
        videoRef.current.play().catch((error) => {
          console.error("Error attempting to play the video:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  return (
    <div className="border rounded-md mb-4">
      <button
        className="w-full flex justify-between items-center p-4 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronDown
          className={clsx(
            "size-5 transition-transform duration-300",
            isOpen && "transform rotate-180"
          )}
        />
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
        className="overflow-hidden transition-max-height duration-300"
        aria-hidden={!isOpen}
      >
        <video ref={videoRef} className="w-full" muted controls loop>
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
