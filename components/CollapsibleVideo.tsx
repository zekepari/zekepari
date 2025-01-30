"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

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
  const contentHeightRef = useRef<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentHeightRef.current = contentRef.current.scrollHeight;
    }
  }, [src]);

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
          maxHeight: isOpen ? `${contentHeightRef.current}px` : "0px",
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
