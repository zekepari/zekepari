"use client";

import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface CollapsibleVideoProps {
  src?: string | null;
  title: string;
}

export default function CollapsibleVideo({
  src,
  title,
}: CollapsibleVideoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div className="border rounded-md mb-4">
      <button
        className="w-full flex justify-between items-center p-4 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        {isOpen ? (
          <ChevronUp className="size-5" />
        ) : (
          <ChevronDown className="size-5" />
        )}
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : "0px",
        }}
        className={clsx("overflow-hidden transition-[max-height] duration-300")}
      >
        {src ? (
          <video className="w-full" controls>
            <source src={src} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="p-4">
            <p className="text-gray-500">
              The video is not available. Please visit the website instead.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
