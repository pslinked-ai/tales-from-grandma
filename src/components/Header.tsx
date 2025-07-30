
import { Button } from "@/components/ui/button";
import { Heart, BookOpen, Plus, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import AuthModal from "./AuthModal";
import ContributeModal from "./ContributeModal";
import type { User as SupabaseUser } from "@supabase/supabase-js";

const Header = () => {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showContributeModal, setShowContributeModal] = useState(false);

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleContribute = () => {
    if (user) {
      setShowContributeModal(true);
    } else {
      setShowAuthModal(true);
    }
  };

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
            {user ? (
              <>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Heart className="h-4 w-4" />
                  <span className="hidden sm:inline">Favorites</span>
                </Button>
                <Button 
                  variant="story" 
                  size="sm" 
                  className="gap-2"
                  onClick={handleContribute}
                >
                  <Plus className="h-4 w-4" />
                  <span className="hidden sm:inline">Contribute a Story</span>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Sign Out</span>
                </Button>
              </>
            ) : (
              <Button
                variant="story"
                size="sm"
                className="gap-2"
                onClick={() => setShowAuthModal(true)}
              >
                <User className="h-4 w-4" />
                <span className="hidden sm:inline">Sign In</span>
              </Button>
            )}
          </div>
        </div>
      </div>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
      
      {user && (
        <ContributeModal
          isOpen={showContributeModal}
          onClose={() => setShowContributeModal(false)}
          user={user}
        />
      )}
    </header>
  );
};

export default Header;
