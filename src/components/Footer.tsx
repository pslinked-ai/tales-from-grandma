import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Mail, Users, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-warm rounded-lg">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Storytime Legacy</h3>
                <p className="text-xs text-muted-foreground">Preserving wisdom</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Connecting generations through the timeless magic of storytelling, 
              one loving voice at a time.
            </p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="p-2">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <Users className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Stories */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Explore Stories</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Fairy Tales</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Folk Legends</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Fables</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Mythology</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Cultural Tales</a>
            </div>
          </div>

          {/* Regions */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">By Region</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">European Tales</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Asian Stories</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">African Legends</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">American Folk</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Pacific Tales</a>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Community</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Share Your Story</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Become a Narrator</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Guidelines</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">Support</a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">About Us</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Storytime Legacy. Made with love for families everywhere.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;