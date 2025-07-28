import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import { LogOut, User, GraduationCap, Phone, Mail, Calendar } from 'lucide-react';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const profile = user ? {
    id: user.id,
    first_name: user.user_metadata?.first_name || 'Alumni',
    last_name: user.user_metadata?.last_name || 'Member',
    email: user.email || '',
    phone: user.user_metadata?.phone || 'Not provided',
    course: user.user_metadata?.course || 'Not specified',
    graduation_year: user.user_metadata?.graduation_year || '2024',
    created_at: user.created_at,
    user_roles: [{ role: 'Alumni' }]
  } : null;

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You have been signed out successfully",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Profile Not Found</CardTitle>
            <CardDescription>
              We couldn't find your profile. Please contact support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleSignOut} className="w-full">
              Sign Out
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const initials = `${profile.first_name?.[0] || ''}${profile.last_name?.[0] || ''}`.toUpperCase();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold">Alumni Alliance</h1>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarFallback className="text-lg font-semibold">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">
                    {profile.first_name} {profile.last_name}
                  </CardTitle>
                  <CardDescription className="flex items-center space-x-2">
                    <GraduationCap className="h-4 w-4" />
                    <span>Class of {profile.graduation_year}</span>
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{profile.course}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Member since {new Date(profile.created_at).getFullYear()}
                  </span>
                </div>
              </div>
              
              {profile.user_roles && profile.user_roles.length > 0 && (
                <div className="pt-4">
                  <h4 className="font-medium mb-2">Roles</h4>
                  <div className="flex flex-wrap gap-2">
                    {profile.user_roles.map((userRole, index) => (
                      <Badge key={index} variant="secondary">
                        {userRole.role}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Welcome Message */}
          <Card>
            <CardHeader>
              <CardTitle>Welcome Back!</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Stay connected with your alumni network and discover new opportunities.
              </p>
              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  Update Profile
                </Button>
                <Button className="w-full" variant="outline">
                  Browse Alumni
                </Button>
                <Button className="w-full" variant="outline">
                  Events & News
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Stats */}
        <div className="grid gap-4 md:grid-cols-3 mt-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">500+</div>
              <p className="text-sm text-muted-foreground">Total Alumni</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">25</div>
              <p className="text-sm text-muted-foreground">Upcoming Events</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-2xl font-bold text-primary">12</div>
              <p className="text-sm text-muted-foreground">Job Opportunities</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;