
import StoryCard from "./StoryCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Filter, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

// We'll load stories from Supabase now

const categories = ["All", "Fairy Tale", "Fable", "Fantasy", "Legend", "Folk Tale", "Mythology"];

const StoriesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [stories, setStories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const { data, error } = await supabase
        .from('stories')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setStories(data || []);
    } catch (error) {
      console.error('Error fetching stories:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const filteredStories = selectedCategory === "All" 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

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
          {loading ? (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">Loading stories...</p>
            </div>
          ) : filteredStories.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-muted-foreground">No stories found. Be the first to contribute!</p>
            </div>
          ) : (
            filteredStories.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                narrator={story.narrator}
                duration={story.duration}
                region={story.region}
                description={story.description}
                category={story.category}
                audioUrl={story.audio_url}
              />
            ))
          )}
        </div>

        {/* Library Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="vintage" size="lg" className="gap-2" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <BookOpen className="h-5 w-5" />
              Browse All Stories
            </Button>
            <Button 
              variant="story" 
              size="lg" 
              className="gap-2" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Plus className="h-5 w-5" />
              Contribute a Story
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            {filteredStories.length} stories available • {categories.length - 1} categories
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
