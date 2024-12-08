import React from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  label: string;
  fileUrl: string;
  fileName: string;
}

export function DownloadButton({
  label,
  fileUrl,
  fileName,
}: DownloadButtonProps) {
  return (
    <a
      href={fileUrl}
      download={fileName}
      className="inline-flex items-center px-6 py-3 rounded-full
                bg-white/30 backdrop-blur-md
                border border-white/20
                shadow-lg
                hover:bg-white/40
                text-gray-800 dark:text-white font-medium
                transform hover:scale-105
                transition-all duration-300 ease-in-out
                mr-4 mb-4"
    >
      <Download className="w-4 h-4 mr-2" />
      {label}
    </a>
  );
}
