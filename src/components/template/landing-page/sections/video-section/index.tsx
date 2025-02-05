import Section from "@/components/template/layout/section";

const VideoSection = ({ src }: { src: string }) => {
  const getEnhancedUrl = (url: string) => {
    if (url.includes("drive.google.com")) {
      // Add parameters to disable UI elements and prevent redirects
      const baseUrl = url.includes("?") ? url : `${url}?`;
      return `${baseUrl}&hl=en&high=1&embedded=true&rm=minimal&showinfo=0&modestbranding=1&controls=&disablekb=1&fs=0`;
    }
    return url;
  };
  return (
    <Section className="justify-center items-center">
      <div className="relative w-full p-[2px] bg-gradient-to-r from-[hsl(192,98%,49%)]/50 via-[hsl(234,69%,67%)]/30 to-[hsl(192,98%,49%)]/50 rounded-xl h-[500px] md:aspect-video md:h-auto md:max-w-[1270px] mx-auto">
        <div className="absolute inset-[1px] bg-background rounded-xl p-2 ">
          <iframe
            src={getEnhancedUrl(src)}
            className="w-full h-full"
            title="Video player"
            loading="lazy"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="no-referrer"
            allowFullScreen={false}
            sandbox="allow-scripts allow-same-origin allow-presentation"
            style={{
              pointerEvents: "auto",
            }}
          />
          {/* Overlay to prevent certain interactions while allowing video controls */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "transparent",
            }}
          />
        </div>
      </div>
    </Section>
  );
};

export default VideoSection;
