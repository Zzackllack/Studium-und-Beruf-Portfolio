import React from "react";
import { GlassCard } from "./GlassCard";
import { DownloadButton } from "./DownloadButton";

interface DownloadButtonProps {
  label: string;
  fileUrl: string;
  fileName: string;
}

interface PortfolioSectionProps {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
  downloadButtons?: DownloadButtonProps[];
}

export function PortfolioSection({
  title,
  subtitle,
  content,
  imageUrl,
  downloadButtons,
}: PortfolioSectionProps) {
  return (
    <GlassCard className="mb-8 overflow-hidden group">
      <section className="p-6">
        <h2
          className="text-2xl font-bold dark:text-white text-gray-800 mb-2 
                       bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
        >
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
            {subtitle}
          </h3>
        )}
        <div className="prose max-w-none dark:prose-invert">
          <div
            className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          {imageUrl && (
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
          {downloadButtons && (
            <div className="flex flex-wrap">
              {downloadButtons.map((button, index) => (
                <DownloadButton
                  key={index}
                  label={button.label}
                  fileUrl={button.fileUrl}
                  fileName={button.fileName}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </GlassCard>
  );
}
