import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Calendar, Briefcase, ArrowRight, BookOpen, Heart, Quote, Star, Sparkles, Network, Shield, Trophy, Newspaper, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const quotes = [
  {
    text: "The connections I made through our alumni network opened doors I never knew existed.",
    author: "Sarah Chen",
    class: "Class of 2018",
    position: "Senior Software Engineer at Google"
  },
  {
    text: "Mentoring current students has been one of the most rewarding experiences of my career.",
    author: "Michael Rodriguez", 
    class: "Class of 2015",
    position: "VP of Marketing at Tesla"
  },
  {
    text: "Our alumni community is like an extended family that spans the globe.",
    author: "Dr. Aisha Patel",
    class: "Class of 2012", 
    position: "Chief Medical Officer"
  }
];

const floatingElements = [
  { icon: Users, title: "Alumni Network", path: "/alumni-network", description: "Connect with alumni worldwide" },
  { icon: Briefcase, title: "Career Portal", path: "/career-portal", description: "Discover job opportunities" },
  { icon: Calendar, title: "Events", path: "/events", description: "Join exciting alumni events" },
  { icon: BookOpen, title: "Knowledge Hub", path: "/alumni-network", description: "Share and learn together" },
  { icon: Heart, title: "Give Back", path: "/alumni-network", description: "Support future generations" },
  { icon: Star, title: "Success Stories", path: "/alumni-network", description: "Celebrate achievements" }
];

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [currentQuote, setCurrentQuote] = useState(0);

  // Removed auto-redirect so you can view homepage when logged in
  // useEffect(() => {
  //   if (!loading && user) {
  //     navigate('/dashboard');
  //   }
  // }, [user, loading, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-primary/10">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-primary/10 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-accent/40 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-20 right-40 w-12 h-12 bg-gradient-to-r from-accent/30 to-primary/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-8 h-8 border border-accent/50 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-6 left-6 right-6 z-50 backdrop-blur-sm bg-background/80 rounded-full border border-primary/20 px-6 py-3 animate-fade-in">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-primary animate-pulse" />
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Alumni Alliance
            </span>
          </div>
          {user ? (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate("/dashboard")}
              className="hover:scale-105 transition-all duration-300 border-primary/30 hover:bg-primary/10 rounded-full"
            >
              Dashboard
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate("/auth")}
              className="hover:scale-105 transition-all duration-300 border-primary/30 hover:bg-primary/10 rounded-full"
            >
              Sign In
            </Button>
          )}
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="text-center space-y-12 max-w-6xl mx-auto">
          {/* Hero Title */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Connect
            </h1>
            <h2 className="text-5xl md:text-7xl font-light text-muted-foreground">
              Grow Together
            </h2>
          </div>
          
          {/* Rotating Quote Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 backdrop-blur-sm hover:scale-105 transition-all duration-500">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-primary mb-6 mx-auto animate-pulse" />
                <blockquote className="text-2xl md:text-3xl font-light text-center mb-8 transition-all duration-500">
                  "{quotes[currentQuote].text}"
                </blockquote>
                <div className="text-center space-y-2">
                  <p className="font-semibold text-primary text-lg">{quotes[currentQuote].author}</p>
                  <p className="text-muted-foreground">{quotes[currentQuote].class}</p>
                  <p className="text-sm text-muted-foreground">{quotes[currentQuote].position}</p>
                </div>
                
                {/* Quote indicators */}
                <div className="flex justify-center space-x-3 mt-6">
                  {quotes.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125 ${
                        index === currentQuote ? 'bg-primary' : 'bg-primary/30'
                      }`}
                      onClick={() => setCurrentQuote(index)}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Navigation Elements between quotes and CTA */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
              {floatingElements.map((element, index) => {
                const Icon = element.icon;
                return (
                  <Card 
                    key={element.title}
                    className={`group cursor-pointer hover:scale-105 transition-all duration-300 animate-fade-in bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-primary/20 hover:bg-gradient-to-br hover:from-primary/10 hover:to-accent/10 hover:shadow-lg`}
                    style={{ 
                      animationDelay: `${(index * 100) + 800}ms`
                    }}
                    onClick={() => navigate(element.path)}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="mx-auto mb-2 p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300 w-fit">
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <p className="text-xs font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                        {element.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {element.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* News and Updates Section */}
          <div className="animate-fade-in max-w-4xl mx-auto" style={{ animationDelay: '1.2s' }}>
            <Card className="bg-gradient-to-r from-card/80 to-card/60 backdrop-blur-sm border-primary/20">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-3 p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 w-fit">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Latest News & Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">2 days ago</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Alumni Global Conference 2024</h4>
                    <p className="text-sm text-muted-foreground">Join us for our biggest annual gathering featuring keynotes from industry leaders and networking opportunities.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">1 week ago</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">New Mentorship Program</h4>
                    <p className="text-sm text-muted-foreground">Connect with experienced alumni mentors to accelerate your career growth and professional development.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm text-muted-foreground">2 weeks ago</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Scholarship Fund Launch</h4>
                    <p className="text-sm text-muted-foreground">We've launched a new scholarship fund to support current students pursuing excellence in their academic journey.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-accent/5 border border-accent/10">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">3 weeks ago</span>
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">Mobile App Update</h4>
                    <p className="text-sm text-muted-foreground">Our new mobile app features enhanced networking tools and event management capabilities for better connectivity.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Buttons */}
          {!user && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '1.4s' }}>
              <Button 
                size="lg" 
                onClick={() => navigate("/auth")}
                className="hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl group px-8 py-4 text-lg"
              >
                Join the Network
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          )}
        </div>
      </div>


      {/* Floating Stats */}
      <div className="fixed top-1/2 left-6 transform -translate-y-1/2 z-30 hidden lg:block animate-fade-in" style={{ animationDelay: '1.5s' }}>
        <Card className="bg-background/80 backdrop-blur-sm border-primary/20">
          <CardContent className="p-4 space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10,000+</div>
              <div className="text-xs text-muted-foreground">Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <div className="text-xs text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-xs text-muted-foreground">Countries</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Achievement Badge */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-30 hidden lg:block animate-fade-in" style={{ animationDelay: '2s' }}>
        <Card className="bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border-primary/30 hover:scale-105 transition-transform duration-300">
          <CardContent className="p-6 text-center">
            <Trophy className="h-8 w-8 text-primary mx-auto mb-2 animate-pulse" />
            <div className="text-sm font-semibold text-primary">Excellence</div>
            <div className="text-xs text-muted-foreground">Alumni Network</div>
            <div className="text-xs text-accent mt-2">Est. 1999</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
