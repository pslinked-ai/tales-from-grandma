
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Plus } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-warm rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Storytime Legacy</h1>
              <p className="text-sm text-muted-foreground">Traditional tales from loving voices</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#stories" className="text-foreground hover:text-primary transition-colors">
              Stories
            </a>
            <a href="#regions" className="text-foreground hover:text-primary transition-colors">
              Regions
            </a>
            <a href="#contributors" className="text-foreground hover:text-primary transition-colors">
              Contributors
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="gap-2">
              <Heart className="h-4 w-4" />
              <span className="hidden sm:inline">Favorites</span>
            </Button>
            <Button 
              variant="story" 
              size="sm" 
              className="gap-2" 
              onClick={() => alert('To enable story contributions, connect to Supabase using the green button in the top right!')}
            >
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Contribute a Story</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
