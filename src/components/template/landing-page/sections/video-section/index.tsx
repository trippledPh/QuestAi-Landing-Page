import Section from "@/components/template/layout/section";

const VideoSection = ({ src }: { src: string }) => {
  return (
    <Section>
      <div className="relative w-full p-[1px] bg-gradient-to-r from-[hsl(192,98%,49%)]/50 via-[hsl(234,69%,67%)]/30 to-[hsl(192,98%,49%)]/50 rounded-xl h-[500px] md:aspect-video md:h-auto">
        <div className="absolute inset-[1px] bg-black rounded-xl p-4 o">
          <iframe
            src={src}
            className="w-full h-full object-cover rounded-2xl"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </Section>
  );
};

export default VideoSection;
