import React from "react";
import { PortfolioSection } from "./components/PortfolioSection";
import { DownloadButton } from "./components/DownloadButton";
import { ThemeToggle } from "./components/ThemeToggle";
import { GlassCard } from "./components/GlassCard";
import { portfolioSections } from "./data/portfolioData";
import { GraduationCap } from "lucide-react";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <div
      className={`min-h-screen transition-colors duration-300
                    bg-gradient-to-br from-blue-50 to-purple-50
                    dark:from-gray-900 dark:to-blue-900
                    ${isDark ? "dark" : ""}`}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(29,78,216,0.15),transparent)]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Studium und Beruf Portfolio
              </h1>
            </div>
            <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Download Section */}
        <GlassCard className="p-6 mb-8">
          <h2 className="text-xl font-semibold dark:text-white text-gray-800 mb-4">
            Portfolio herunterladen
          </h2>
          <div className="flex flex-wrap">
            <DownloadButton
              label="PDF herunterladen"
              fileUrl="/portfolio.pdf"
              fileType="pdf"
            />
            <DownloadButton
              label="DOCX herunterladen"
              fileUrl="/portfolio.docx"
              fileType="docx"
            />
            <DownloadButton
              label="ODT herunterladen"
              fileUrl="/portfolio.odt"
              fileType="odt"
            />
            <DownloadButton
              label="RTF herunterladen"
              fileUrl="/portfolio.rtf"
              fileType="rtf"
            />
          </div>
        </GlassCard>

        {/* Portfolio Sections */}
        <div className="space-y-6">
          {portfolioSections.map((section, index) => (
            <PortfolioSection
              key={index}
              title={section.title}
              subtitle={section.subtitle}
              content={section.content}
              imageUrl={section.imageUrl}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12 backdrop-blur-lg bg-white/30 dark:bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Studium und Beruf Portfolio, Cédric
            Klinge
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
