import { Button } from "@/components/ui/button";
import { ArrowRight, Music, Calendar } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-club-lasers.jpg"
          alt="Aura Nightclub Crowd"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up space-y-6">
          <p className="text-primary font-medium tracking-[0.3em] text-sm md:text-base uppercase">
            Dallas, Texas
          </p>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white uppercase mix-blend-overlay">
            Aura
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
              Dallas
            </span>
          </h1>
          <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 font-light leading-relaxed">
            Transcending reality through sound and light. The ultimate electronic music destination has arrived.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-8">
            <Button size="lg" className="rounded-none bg-primary hover:bg-primary/90 text-black font-bold px-8 h-14 text-lg w-full md:w-auto">
              GET TICKETS
              <Calendar className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black font-bold px-8 h-14 text-lg w-full md:w-auto backdrop-blur-sm">
              VIP TABLES
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-white/50">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto" />
      </div>
    </section>
  );
};

export default Hero;
