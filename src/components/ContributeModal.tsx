import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

interface ContributeModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: any;
}

const ContributeModal = ({ isOpen, onClose, user }: ContributeModalProps) => {
  const [title, setTitle] = useState("");
  const [narrator, setNarrator] = useState("");
  const [region, setRegion] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const categories = ["Fairy Tale", "Fable", "Fantasy", "Legend", "Folk Tale", "Mythology"];

  const handleSubmit = async () => {
    if (!audioFile || !title || !narrator || !region || !description || !category) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields and select an audio file",
        variant: "destructive"
      });
      return;
    }

    setLoading(true);

    try {
      // Upload audio file
      const fileExt = audioFile.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from('story-audio')
        .upload(fileName, audioFile);

      if (uploadError) throw uploadError;

      // Get audio duration (approximate from file size)
      const duration = Math.round(audioFile.size / 16000); // Rough estimate
      const durationText = `${Math.floor(duration / 60)} min`;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('story-audio')
        .getPublicUrl(fileName);

      // Create story record
      const { error: insertError } = await supabase
        .from('stories')
        .insert({
          title,
          narrator,
          region,
          description,
          category,
          duration: durationText,
          audio_url: publicUrl,
          user_id: user.id
        });

      if (insertError) throw insertError;

      toast({
        title: "Story submitted!",
        description: "Your story has been added to our collection"
      });
      
      // Reset form
      setTitle("");
      setNarrator("");
      setRegion("");
      setDescription("");
      setCategory("");
      setAudioFile(null);
      onClose();
      
    } catch (error: any) {
      toast({
        title: "Upload failed",
        description: error.message,
        variant: "destructive"
      });
    }

    setLoading(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Contribute Your Story</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Story Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="The Amazing Adventure..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="narrator">Narrator Name</Label>
            <Input
              id="narrator"
              value={narrator}
              onChange={(e) => setNarrator(e.target.value)}
              placeholder="Grandmother Sarah, Uncle John..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="region">Region/Culture</Label>
            <Input
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="Ireland, West Africa, South America..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Story Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="A brief description of your story..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="audio">Audio File</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <input
                type="file"
                accept="audio/*"
                onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
                className="hidden"
                id="audio-upload"
              />
              <label htmlFor="audio-upload" className="cursor-pointer">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {audioFile ? audioFile.name : "Click to upload audio file"}
                </p>
              </label>
            </div>
          </div>

          <Button 
            onClick={handleSubmit} 
            disabled={loading}
            className="w-full"
          >
            {loading ? "Uploading..." : "Submit Story"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContributeModal;