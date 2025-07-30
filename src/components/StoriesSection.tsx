import StoryCard from "./StoryCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Filter } from "lucide-react";
import { useState } from "react";

const storiesData = [
  {
    title: "The Brave Little Sparrow",
    narrator: "Grandmother Elena",
    duration: "8 min",
    region: "Eastern Europe",
    description: "A heartwarming tale about a small sparrow who saves her village from a terrible storm through courage and determination.",
    category: "Fairy Tale",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    title: "The Wise Old Turtle",
    narrator: "Grandfather Chen",
    duration: "12 min",
    region: "East Asia",
    description: "An ancient parable about patience and wisdom, teaching children the value of taking time to think before acting.",
    category: "Fable",
    audioUrl: "https://www.soundjay.com/misc/sounds/magic-chime-02.wav"
  },
  {
    title: "The Dancing Moonbeams",
    narrator: "Grandmama Rosa",
    duration: "6 min",
    region: "South America",
    description: "A magical story of moonbeams that come alive to dance with a lonely child, bringing joy and wonder to dark nights.",
    category: "Fantasy",
    audioUrl: "https://www.soundjay.com/misc/sounds/wind-chime-02.wav"
  },
  {
    title: "The Golden Fish of Wisdom",
    narrator: "Elder Kwame",
    duration: "10 min",
    region: "West Africa",
    description: "A traditional tale about a fisherman who catches a golden fish that grants wishes, but learns that wisdom is more valuable than gold.",
    category: "Legend",
    audioUrl: "https://www.soundjay.com/misc/sounds/water-drop-02.wav"
  },
  {
    title: "The Singing Oak Tree",
    narrator: "Grandmother Aileen",
    duration: "9 min",
    region: "Ireland",
    description: "A Celtic story of an ancient oak tree that sings lullabies to protect the children of the village from nightmares.",
    category: "Folk Tale",
    audioUrl: "https://www.soundjay.com/misc/sounds/gentle-ocean-waves.wav"
  },
  {
    title: "The Star Weaver's Gift",
    narrator: "Grandmother Lakshmi",
    duration: "14 min",
    region: "South Asia",
    description: "A beautiful story about a celestial weaver who creates constellations and teaches a young girl the art of finding patterns in the sky.",
    category: "Mythology",
    audioUrl: "https://www.soundjay.com/misc/sounds/magic-sparkle-02.wav"
  }
];

const categories = ["All", "Fairy Tale", "Fable", "Fantasy", "Legend", "Folk Tale", "Mythology"];

const StoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredStories = selectedCategory === "All" 
    ? storiesData 
    : storiesData.filter(story => story.category === selectedCategory);

  return (
    <section id="stories" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 text-warm-glow">
            <BookOpen className="h-5 w-5" />
            <span className="text-sm font-medium">Story Collection</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Timeless Tales from <span className="text-primary">Loving Voices</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each story is lovingly narrated by real grandparents and elders, 
            preserving the authentic warmth and wisdom of oral tradition.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "secondary"}
              className={`cursor-pointer px-4 py-2 transition-colors ${
                selectedCategory === category 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-secondary/80"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredStories.map((story, index) => (
            <StoryCard
              key={index}
              title={story.title}
              narrator={story.narrator}
              duration={story.duration}
              region={story.region}
              description={story.description}
              category={story.category}
              audioUrl={story.audioUrl}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="vintage" size="lg" className="gap-2">
            <Filter className="h-5 w-5" />
            Load More Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;