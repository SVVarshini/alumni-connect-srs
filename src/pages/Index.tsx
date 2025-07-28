import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { GraduationCap, Users, Calendar, Briefcase, ArrowRight, Shield, Network, Trophy } from 'lucide-react';
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Alumni Alliance
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with your alma mater, build lasting relationships, and unlock new opportunities 
            through our comprehensive alumni network platform.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/auth">
                Join Our Network
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Join Alumni Alliance?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="text-center">
              <CardHeader>
                <Network className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Professional Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with fellow alumni across industries and build meaningful professional relationships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Exclusive Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access alumni-only events, reunions, and networking sessions both online and offline.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Discover job openings, mentorship opportunities, and career advancement resources.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Verified Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All members are verified alumni, ensuring authentic connections and trusted networking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Mentorship Program</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with experienced alumni mentors or become a mentor to recent graduates.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Alumni Success</CardTitle>
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Active Alumni</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Companies</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <p className="text-muted-foreground">Events This Year</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reconnect?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of alumni who are already building their future together.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/auth">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
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
