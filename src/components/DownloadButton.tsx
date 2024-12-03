import React from 'react';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  label: string;
  fileUrl: string;
  fileType: string;
}

export function DownloadButton({ label, fileUrl, fileType }: DownloadButtonProps) {
  return (
    <a
      href={fileUrl}
      download={`portfolio.${fileType}`}
      className="inline-flex items-center px-6 py-3 rounded-full
                bg-gradient-to-r from-blue-600 to-purple-600
                hover:from-blue-700 hover:to-purple-700
                text-white font-medium
                transform hover:scale-105 hover:shadow-lg
                transition-all duration-300 ease-in-out
                mr-4 mb-4
                dark:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
    >
      <Download className="w-4 h-4 mr-2 animate-bounce" />
      {label}
    </a>
  );
}