import { Button } from "@/components/ui/button";
import { Play, Sparkles, Heart, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-storytelling.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-story py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-warm-glow">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-medium">Preserving family traditions</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Where <span className="text-primary">Grandparents'</span> Voices Live Forever
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Discover timeless folk stories lovingly narrated by real grandparents and elders. 
                Pass down the magic of oral tradition to the next generation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="story" size="lg" className="gap-3">
                <Play className="h-5 w-5" />
                Start Listening
              </Button>
              <Button variant="vintage" size="lg" className="gap-3">
                <Heart className="h-5 w-5" />
                Browse Stories
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">250+</div>
                <div className="text-sm text-muted-foreground">Folk Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Elder Voices</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Cultures</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-story">
              <img 
                src={heroImage} 
                alt="Grandmother reading stories to children"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-story-gold text-vintage-brown p-4 rounded-full shadow-warm animate-pulse">
              <BookOpen className="h-6 w-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-warm-glow text-white p-3 rounded-full shadow-warm">
              <Heart className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;