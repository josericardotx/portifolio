import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink, BarChart2, Activity, DollarSign, Users } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  highlight: string;
  powerBiUrl: string;
  icon: "sales" | "health" | "finance" | "management";
  delay?: number;
  size?: "normal" | "large";
}

const iconMap = {
  sales: BarChart2,
  health: Activity,
  finance: DollarSign,
  management: Users,
};

const categoryColors = {
  sales: "from-blue-500/20 to-cyan-500/10",
  health: "from-emerald-500/20 to-teal-500/10",
  finance: "from-amber-500/20 to-orange-500/10",
  management: "from-violet-500/20 to-purple-500/10",
};

const ProjectCard = ({ 
  title, 
  category, 
  description, 
  highlight, 
  powerBiUrl, 
  icon,
  delay = 0,
  size = "normal"
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = iconMap[icon];

  return (
    <div 
      className={`group relative rounded-2xl border border-border bg-card overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 animate-fade-up ${
        size === "large" ? "md:col-span-2 md:row-span-2" : ""
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[icon]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      
      {/* Content */}
      <div className={`relative z-10 p-6 ${size === "large" ? "md:p-8" : ""} h-full flex flex-col`}>
        {/* Icon */}
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>

        {/* Category */}
        <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
          {category}
        </span>

        {/* Title */}
        <h3 className={`font-semibold text-foreground mb-3 ${size === "large" ? "text-2xl" : "text-xl"}`}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-4 flex-grow">
          {description}
        </p>

        {/* Highlight */}
        <div className="mb-6 p-3 rounded-lg bg-secondary/50 border border-border">
          <span className="text-xs uppercase tracking-wider text-primary font-medium">Destaque</span>
          <p className="text-sm text-foreground mt-1">{highlight}</p>
        </div>

        {/* Action */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button variant="hero" className="w-full group/btn">
              Ver Dashboard
              <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-background border-border">
            <DialogHeader className="p-4 border-b border-border">
              <DialogTitle className="text-lg font-semibold">
                {title} - {category}
              </DialogTitle>
            </DialogHeader>
            <div className="flex-1 p-4 overflow-hidden">
              <AspectRatio ratio={16 / 9} className="h-full">
                <iframe
                  src={powerBiUrl}
                  className="w-full h-full rounded-lg border border-border"
                  frameBorder="0"
                  allowFullScreen
                  title={title}
                />
              </AspectRatio>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Hover border glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
        background: "linear-gradient(145deg, transparent 40%, hsl(var(--primary) / 0.1) 100%)"
      }} />
    </div>
  );
};

export default ProjectCard;
