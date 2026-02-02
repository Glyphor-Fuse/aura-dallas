import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const artists = [
  {
    name: "KROMA",
    date: "OCT 24",
    image: "/images/dj-portrait-1.jpg",
    genre: "Techno",
  },
  {
    name: "NEON PULSE",
    date: "OCT 25",
    image: "/images/dj-portrait-2.jpg",
    genre: "House",
  },
  {
    name: "VOID WALKER",
    date: "OCT 31",
    image: "/images/dj-portrait-3.jpg",
    genre: "Bass",
  },
  {
    name: "SYNTHIA",
    date: "NOV 04",
    image: "/images/dj-portrait-4.jpg",
    genre: "Trance",
  },
];

const Lineup = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tight">
            Live Lineup
          </h2>
          <p className="text-muted-foreground">Upcoming headliners and events</p>
        </div>
        <div className="hidden md:block">
          <span className="text-primary text-sm font-mono tracking-widest">SCROLL TO EXPLORE &rarr;</span>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="flex overflow-x-auto pb-12 gap-6 px-4 md:px-[max(1rem,calc((100vw-1400px)/2))] snap-x snap-mandatory hide-scrollbar">
        {artists.map((artist, index) => (
          <div key={index} className="snap-center shrink-0 w-[85vw] md:w-[400px]">
            <Card className="group relative aspect-[3/4] overflow-hidden border-0 bg-secondary/5 rounded-none">
              <img
                src={artist.image}
                alt={artist.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
              
              <CardContent className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                <Badge variant="outline" className="mb-4 rounded-none border-primary text-primary bg-black/50 backdrop-blur-md">
                  {artist.genre}
                </Badge>
                <div className="space-y-1">
                  <p className="text-primary font-mono text-sm tracking-widest">{artist.date}</p>
                  <h3 className="text-4xl font-bold text-white uppercase italic tracking-tighter">
                    {artist.name}
                  </h3>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Lineup;
