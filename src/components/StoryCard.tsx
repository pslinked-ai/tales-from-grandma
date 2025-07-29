import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Play, Heart, Clock, User } from "lucide-react";
import { useState } from "react";

interface StoryCardProps {
  title: string;
  narrator: string;
  duration: string;
  region: string;
  description: string;
  category: string;
  isPlaying?: boolean;
}

const StoryCard = ({ 
  title, 
  narrator, 
  duration, 
  region, 
  description, 
  category,
  isPlaying = false 
}: StoryCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(isPlaying);

  const handlePlay = () => {
    setCurrentlyPlaying(!currentlyPlaying);
  };

  return (
    <Card className="group hover:shadow-story transition-all duration-300 hover:-translate-y-1 bg-card border-border/50">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warm-glow/10 text-warm-glow border border-warm-glow/20">
                {category}
              </span>
              <span className="text-xs text-muted-foreground">{region}</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className={`h-8 w-8 p-0 ${isLiked ? 'text-destructive' : 'text-muted-foreground'}`}
            onClick={() => setIsLiked(!isLiked)}
          >
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
          {description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{narrator}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          variant={currentlyPlaying ? "secondary" : "story"} 
          className="w-full gap-2"
          onClick={handlePlay}
        >
          <Play className={`h-4 w-4 ${currentlyPlaying ? 'animate-pulse' : ''}`} />
          {currentlyPlaying ? 'Playing...' : 'Listen to Story'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default StoryCard;