import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Calendar, Briefcase, ArrowRight, Shield, Network, Trophy, Sparkles } from 'lucide-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 py-6 px-4 border-b border-border/50 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary animate-pulse" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Alumni Alliance
            </span>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to="/auth">Sign In</Link>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="relative">
              <GraduationCap className="h-20 w-20 text-primary animate-pulse" />
              <Sparkles className="absolute -top-2 -right-2 h-6 w-6 text-accent animate-pulse delay-300" />
            </div>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in delay-300 bg-size-200 animate-pulse">
            Alumni Alliance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
            Connect with your alma mater, build lasting relationships, and unlock new opportunities 
            through our comprehensive alumni network platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-700">
            <Button asChild size="lg" className="group hover-scale transition-all duration-300 shadow-lg hover:shadow-xl">
              <Link to="/auth" className="flex items-center">
                Join Our Network
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="hover-scale transition-all duration-300">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-4 bg-muted/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Why Join Alumni Alliance?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center group hover-scale transition-all duration-500 hover:shadow-2xl border-border/50 backdrop-blur-sm bg-card/90 animate-fade-in delay-100">
              <CardHeader>
                <Network className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors">Professional Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with fellow alumni across industries and build meaningful professional relationships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover-scale transition-all duration-500 hover:shadow-2xl border-border/50 backdrop-blur-sm bg-card/90 animate-fade-in delay-200">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors">Exclusive Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access alumni-only events, reunions, and networking sessions both online and offline.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover-scale transition-all duration-500 hover:shadow-2xl border-border/50 backdrop-blur-sm bg-card/90 animate-fade-in delay-300">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover job openings, mentorship opportunities, and career advancement resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover-scale transition-all duration-500 hover:shadow-2xl border-border/50 backdrop-blur-sm bg-card/90 animate-fade-in delay-400">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors">Verified Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All members are verified alumni, ensuring authentic connections and trusted networking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover-scale transition-all duration-500 hover:shadow-2xl border-border/50 backdrop-blur-sm bg-card/90 animate-fade-in delay-500">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors">Mentorship Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with experienced alumni mentors or become a mentor to recent graduates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center group hover-scale transition-all duration-500 hover:shadow-2xl border-border/50 backdrop-blur-sm bg-card/90 animate-fade-in delay-600">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="group-hover:text-primary transition-colors">Alumni Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Celebrate achievements, share success stories, and inspire the next generation.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div className="animate-fade-in delay-100 group">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">500+</div>
              <p className="text-muted-foreground text-lg">Active Alumni</p>
            </div>
            <div className="animate-fade-in delay-200 group">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">50+</div>
              <p className="text-muted-foreground text-lg">Companies</p>
            </div>
            <div className="animate-fade-in delay-300 group">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">25+</div>
              <p className="text-muted-foreground text-lg">Events This Year</p>
            </div>
            <div className="animate-fade-in delay-400 group">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">95%</div>
              <p className="text-muted-foreground text-lg">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-4 bg-gradient-to-r from-primary/90 to-accent/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Ready to Reconnect?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto animate-fade-in delay-200">
            Join thousands of alumni who are already building their future together.
          </p>
          <Button asChild size="lg" variant="secondary" className="group hover-scale transition-all duration-300 shadow-xl hover:shadow-2xl animate-fade-in delay-400">
            <Link to="/auth" className="flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Alumni Alliance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
