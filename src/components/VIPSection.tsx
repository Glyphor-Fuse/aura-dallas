import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const VIPSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] relative overflow-hidden">
              <img
                src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-ABYTuqk3l6jQwNFHMl5zLDus/user-28g2Vr2tFHWmicI728ehPG3p/img-3X4dTuTncb0LV6seuXQkAbhq.png?st=2026-02-02T19%3A30%3A18Z&se=2026-02-02T21%3A30%3A18Z&sp=r&sv=2024-08-04&sr=b&rscd=inline&rsct=image/png&skoid=92b997d6-f0dd-439d-8087-b26c74d72365&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2026-02-02T20%3A30%3A18Z&ske=2026-02-03T20%3A30%3A18Z&sks=b&skv=2024-08-04&sig=8/U3oRzQzL0M7lYKyvfbMh4AHopzlMEkUto6J0ikWW4%3D"
                alt="VIP Experience"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 border border-white/10" />
            </div>
            {/* Decorative Offset Box */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-primary/30 -z-10 hidden md:block" />
          </div>

          {/* Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <span className="text-primary font-mono text-sm tracking-widest mb-2 block">
                ELEVATED EXPERIENCE
              </span>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase leading-none mb-6">
                Reserve <br /> Your Table
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Experience Aura from the best seats in the house. Our VIP service offers exclusive table locations, dedicated hosts, and premium bottle service for an unforgettable night.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Priority Entry & Skip the Line",
                "Private Elevated Seating Areas",
                "Dedicated VIP Host & Security",
                "Premium Bottle Service Menu"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-white/90">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary mr-4">
                    <Check className="w-3 h-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button className="w-full md:w-auto h-14 px-10 text-lg font-bold bg-white text-black hover:bg-gray-200 rounded-none mt-4">
              BOOK VIP SERVICE
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default VIPSection;
