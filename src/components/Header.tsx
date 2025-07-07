import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CV</span>
          </div>
          <span className="text-xl font-bold text-foreground">ContractVerse</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#industries" className="text-muted-foreground hover:text-foreground transition-colors">
            Industries
          </a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;