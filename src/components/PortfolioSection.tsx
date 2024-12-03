import React from "react";
import { GlassCard } from "./GlassCard";

interface PortfolioSectionProps {
  title: string;
  subtitle?: string;
  content: string;
  imageUrl?: string;
}

export function PortfolioSection({
  title,
  subtitle,
  content,
  imageUrl,
}: PortfolioSectionProps) {
  return (
    <GlassCard className="mb-8 overflow-hidden group">
      <section className="p-6">
        <h2
          className="text-2xl font-bold dark:text-white text-gray-800 mb-2 
                       bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
        >
          {title}
        </h2>
        {subtitle && (
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
            {subtitle}
          </h3>
        )}
        <div className="prose max-w-none dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            {content}
          </p>
          {imageUrl && (
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          )}
        </div>
      </section>
    </GlassCard>
  );
}
