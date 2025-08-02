import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Search, Star, Download, Eye, Users, TrendingUp, FileText, Video, Lightbulb } from 'lucide-react';

const KnowledgeHub = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredResources = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in Business",
      author: "Dr. Sarah Kim (Class of 2012)",
      type: "Research Paper",
      category: "Technology",
      downloads: 2845,
      views: 8920,
      rating: 4.8,
      description: "Comprehensive analysis of AI implementation strategies and their impact on modern business operations."
    },
    {
      id: 2,
      title: "Sustainable Finance: ESG Investment Strategies",
      author: "Michael Chen (Class of 2015)",
      type: "White Paper",
      category: "Finance",
      downloads: 1923,
      views: 5647,
      rating: 4.7,
      description: "Guide to Environmental, Social, and Governance factors in investment decision-making."
    }
  ];

  const resources = [
    {
      id: 3,
      title: "Leadership in Remote Teams",
      author: "Lisa Rodriguez (Class of 2018)",
      type: "Case Study",
      category: "Management",
      downloads: 1456,
      views: 3821,
      rating: 4.6
    },
    {
      id: 4,
      title: "Digital Marketing Trends 2024",
      author: "Alex Thompson (Class of 2017)",
      type: "Report",
      category: "Marketing",
      downloads: 2103,
      views: 6754,
      rating: 4.5
    },
    {
      id: 5,
      title: "Healthcare Innovation Framework",
      author: "Dr. Priya Patel (Class of 2010)",
      type: "Research Paper",
      category: "Healthcare",
      downloads: 987,
      views: 2456,
      rating: 4.9
    },
    {
      id: 6,
      title: "Renewable Energy Investment Guide",
      author: "James Wilson (Class of 2014)",
      type: "Guide",
      category: "Energy",
      downloads: 1734,
      views: 4892,
      rating: 4.4
    }
  ];

  const webinars = [
    {
      id: 1,
      title: "Career Transitions in Tech",
      presenter: "Sarah Johnson (Class of 2016)",
      date: "2024-08-15",
      duration: "60 min",
      attendees: 450,
      category: "Career Development"
    },
    {
      id: 2,
      title: "Entrepreneurship Fundamentals",
      presenter: "Marcus Chen (Class of 2013)",
      date: "2024-08-22",
      duration: "90 min",
      attendees: 320,
      category: "Business"
    },
    {
      id: 3,
      title: "Investment Strategies for Alumni",
      presenter: "Financial Advisory Team",
      date: "2024-08-29",
      duration: "45 min",
      attendees: 280,
      category: "Finance"
    }
  ];

  const categories = [
    { name: "Technology", count: 145, color: "bg-blue-500" },
    { name: "Business", count: 98, color: "bg-green-500" },
    { name: "Finance", count: 76, color: "bg-purple-500" },
    { name: "Healthcare", count: 64, color: "bg-red-500" },
    { name: "Marketing", count: 52, color: "bg-orange-500" },
    { name: "Management", count: 43, color: "bg-cyan-500" }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Research Paper': return <FileText className="h-4 w-4" />;
      case 'White Paper': return <FileText className="h-4 w-4" />;
      case 'Case Study': return <Lightbulb className="h-4 w-4" />;
      case 'Report': return <TrendingUp className="h-4 w-4" />;
      case 'Guide': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
          <BookOpen className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Knowledge Hub</h1>
          <p className="text-muted-foreground">Access research, insights, and educational content from our alumni community</p>
        </div>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search resources, papers, webinars..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="resources" className="space-y-6">
        <TabsList>
          <TabsTrigger value="resources">Research & Papers</TabsTrigger>
          <TabsTrigger value="webinars">Webinars & Videos</TabsTrigger>
          <TabsTrigger value="categories">Browse Categories</TabsTrigger>
        </TabsList>

        <TabsContent value="resources" className="space-y-6">
          {/* Featured Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Featured Resources</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredResources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(resource.type)}
                        <Badge variant="outline">{resource.type}</Badge>
                      </div>
                      <Badge className="bg-primary text-primary-foreground">{resource.category}</Badge>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>By {resource.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{resource.description}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Download className="h-4 w-4" />
                        <span>{resource.downloads.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{resource.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm">Download</Button>
                      <Button variant="outline" size="sm">Preview</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* All Resources */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Latest Resources</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(resource.type)}
                        <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                      </div>
                      <Badge variant="secondary">{resource.category}</Badge>
                    </div>
                    <CardTitle className="text-base leading-tight">{resource.title}</CardTitle>
                    <CardDescription className="text-sm">By {resource.author}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3" />
                        <span>{resource.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{resource.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{resource.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">Download</Button>
                      <Button size="sm" variant="ghost" className="flex-1">Preview</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="webinars" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webinars.map((webinar) => (
              <Card key={webinar.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Video className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{webinar.category}</Badge>
                  </div>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                  <CardDescription>Presented by {webinar.presenter}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span>{new Date(webinar.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span>{webinar.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Attendees:</span>
                      <span>{webinar.attendees}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">Watch Now</Button>
                    <Button size="sm" variant="outline">Register</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} resources available</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default KnowledgeHub;