import Section from "@/components/template/layout/section";

const VideoSection = ({ src }: { src: string }) => {
  return (
    <Section className="justify-center items-center">
      <div className="relative w-full p-[2px] bg-gradient-to-r from-[hsl(192,98%,49%)]/50 via-[hsl(234,69%,67%)]/30 to-[hsl(192,98%,49%)]/50 rounded-xl h-[500px] md:aspect-video md:h-auto md:max-w-[1270px] mx-auto">
        <div className="absolute inset-[1px] bg-background rounded-xl p-2 ">
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
