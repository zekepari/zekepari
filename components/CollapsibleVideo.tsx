"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CollapsibleVideo = ({ src, title }: { src: string; title: string; }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState(0);
    const contentRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if (isOpen) {
        setHeight(contentRef.current?.scrollHeight || 0);
      } else {
        setHeight(0);
      }
    }, [isOpen]);
  
    return (
      <div className="border rounded-md mb-4 overflow-hidden">
        <button
          className="w-full flex justify-between items-center p-4 font-semibold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
          {isOpen ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
        </button>
        <div 
          ref={contentRef}
          style={{ height: `${height}px` }}
          className="transition-all duration-300 ease-in-out"
        >
          <video className="w-full" controls>
            <source src={src} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  };

export default CollapsibleVideo