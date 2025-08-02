import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Newspaper, Clock, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';

const News = () => {
  const featuredNews = [
    {
      id: 1,
      title: "Alumni Global Conference 2024 Breaks Attendance Records",
      excerpt: "Over 5,000 alumni from 80 countries gathered for our most successful conference yet, featuring keynotes from industry leaders and breakthrough networking sessions.",
      date: "2024-08-01",
      category: "Events",
      featured: true,
      readTime: "3 min read"
    },
    {
      id: 2,
      title: "New $10M Scholarship Fund Launched",
      excerpt: "Thanks to generous alumni donations, we've established the largest scholarship fund in our institution's history, supporting 500+ students annually.",
      date: "2024-07-28",
      category: "Giving",
      featured: true,
      readTime: "2 min read"
    }
  ];

  const recentNews = [
    {
      id: 3,
      title: "Alumni Startup Acquires Major Tech Company",
      excerpt: "TechFlow, founded by Class of 2015 graduate Maria Santos, has acquired CloudBase Solutions in a $2.3B deal.",
      date: "2024-07-25",
      category: "Business",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "New Mentorship Program Connects 1,000+ Pairs",
      excerpt: "Our enhanced mentorship platform has successfully matched over 1,000 mentor-mentee pairs across various industries.",
      date: "2024-07-22",
      category: "Community",
      readTime: "2 min read"
    },
    {
      id: 5,
      title: "Research Excellence: Alumni Win Nobel Prize",
      excerpt: "Dr. James Chen (Class of 2008) awarded Nobel Prize in Medicine for groundbreaking work in genetic therapy.",
      date: "2024-07-20",
      category: "Research",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Alumni Network Mobile App 2.0 Released",
      excerpt: "Enhanced features include video networking, AI-powered connections, and improved event management tools.",
      date: "2024-07-18",
      category: "Technology",
      readTime: "3 min read"
    }
  ];

  const achievements = [
    {
      title: "Fortune 500 CEOs",
      count: "45+",
      description: "Alumni leading major corporations"
    },
    {
      title: "Startups Founded",
      count: "2,300+",
      description: "Companies created by our graduates"
    },
    {
      title: "Patents Filed",
      count: "8,900+",
      description: "Innovation patents by alumni"
    },
    {
      title: "Research Publications",
      count: "15,000+",
      description: "Academic contributions globally"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Events': return 'bg-primary text-primary-foreground';
      case 'Giving': return 'bg-green-500 text-white';
      case 'Business': return 'bg-blue-500 text-white';
      case 'Community': return 'bg-purple-500 text-white';
      case 'Research': return 'bg-orange-500 text-white';
      case 'Technology': return 'bg-cyan-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
          <Newspaper className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">News & Updates</h1>
          <p className="text-muted-foreground">Stay informed about alumni achievements, events, and community news</p>
        </div>
      </div>

      <Tabs defaultValue="latest" className="space-y-6">
        <TabsList>
          <TabsTrigger value="latest">Latest News</TabsTrigger>
          <TabsTrigger value="achievements">Alumni Achievements</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="latest" className="space-y-6">
          {/* Featured Stories */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Featured Stories</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredNews.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className={getCategoryColor(article.category)}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{article.title}</CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {new Date(article.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                    <Button variant="outline" size="sm" className="group">
                      Read Full Story
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent News */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {recentNews.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className={`border-2 ${getCategoryColor(article.category)} border-current`}>
                        {article.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-base leading-tight">{article.title}</CardTitle>
                    <CardDescription className="text-xs">
                      {new Date(article.date).toLocaleDateString()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">{article.excerpt}</p>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto">
                      Read more →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          {/* Achievement Stats */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-2">
                    <TrendingUp className="h-6 w-6 text-primary mr-2" />
                    <div className="text-3xl font-bold text-primary">{achievement.count}</div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Alumni */}
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-primary" />
                <CardTitle>Alumni Spotlight</CardTitle>
              </div>
              <CardDescription>Celebrating outstanding achievements in our community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 rounded-lg bg-background/80 border border-primary/10">
                  <h4 className="font-semibold text-foreground mb-2">Dr. Sarah Johnson (Class of 2010)</h4>
                  <p className="text-sm text-muted-foreground mb-2">Recently appointed as Chief Technology Officer at Microsoft, leading AI innovation initiatives across the company.</p>
                  <Badge variant="outline" className="text-primary border-primary/30">Tech Leadership</Badge>
                </div>
                <div className="p-4 rounded-lg bg-background/80 border border-accent/10">
                  <h4 className="font-semibold text-foreground mb-2">Marcus Chen (Class of 2015)</h4>
                  <p className="text-sm text-muted-foreground mb-2">Founded GreenTech Solutions, which raised $50M Series B to expand renewable energy projects globally.</p>
                  <Badge variant="outline" className="text-green-600 border-green-200">Entrepreneurship</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="announcements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-primary" />
                <span>Important Announcements</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Alumni Directory Update</h4>
                <p className="text-sm text-muted-foreground mb-2">We're updating our alumni directory. Please verify your information by August 31st to maintain your listing.</p>
                <Button variant="outline" size="sm">Update Profile</Button>
              </div>
              
              <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">New Alumni Benefits Program</h4>
                <p className="text-sm text-muted-foreground mb-2">Exclusive discounts on travel, dining, and professional services now available to all verified alumni.</p>
                <Button variant="outline" size="sm">Learn More</Button>
              </div>
              
              <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                <h4 className="font-semibold text-foreground mb-2">Annual Giving Campaign</h4>
                <p className="text-sm text-muted-foreground mb-2">Help us reach our goal of $5M for student scholarships and campus improvements. Every donation makes a difference.</p>
                <Button variant="outline" size="sm" className="text-green-700 border-green-300 hover:bg-green-100">
                  Donate Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default News;