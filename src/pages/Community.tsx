import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MessageCircle, Users, TrendingUp, Heart, Share2, ThumbsUp, MessageSquare, Plus, Search, Filter } from 'lucide-react';

const Community = () => {
  const [newPost, setNewPost] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const discussionTopics = [
    {
      id: 1,
      title: "Career Transitions in Tech Industry",
      author: "Sarah Johnson",
      authorImage: null,
      authorClass: "Class of 2018",
      category: "Career",
      replies: 24,
      likes: 48,
      views: 320,
      lastActivity: "2 hours ago",
      excerpt: "Looking for advice on transitioning from traditional software development to AI/ML roles...",
      trending: true
    },
    {
      id: 2,
      title: "Alumni Startup Collaboration Opportunities",
      author: "Michael Chen",
      authorImage: null,
      authorClass: "Class of 2015",
      category: "Business",
      replies: 18,
      likes: 35,
      views: 245,
      lastActivity: "4 hours ago",
      excerpt: "Interested in connecting with fellow alumni who are building startups. Looking for potential partnerships...",
      trending: false
    },
    {
      id: 3,
      title: "Regional Alumni Meetup - San Francisco",
      author: "Lisa Rodriguez",
      authorImage: null,
      authorClass: "Class of 2020",
      category: "Events",
      replies: 32,
      likes: 67,
      views: 890,
      lastActivity: "1 day ago",
      excerpt: "Organizing a casual meetup for Bay Area alumni. Who's interested in joining us next month?",
      trending: true
    },
    {
      id: 4,
      title: "Mentorship Program Success Stories",
      author: "Dr. James Wilson",
      authorImage: null,
      authorClass: "Class of 2010",
      category: "Mentorship",
      replies: 15,
      likes: 52,
      views: 412,
      lastActivity: "2 days ago",
      excerpt: "Sharing some amazing success stories from our mentorship program participants...",
      trending: false
    }
  ];

  const communityStats = [
    {
      icon: Users,
      title: "Active Members",
      value: "8,500+",
      description: "Alumni participating monthly"
    },
    {
      icon: MessageCircle,
      title: "Discussions",
      value: "1,200+",
      description: "Active conversation threads"
    },
    {
      icon: TrendingUp,
      title: "Connections Made",
      value: "3,400+",
      description: "Professional connections this year"
    },
    {
      icon: Heart,
      title: "Success Stories",
      value: "450+",
      description: "Shared achievements"
    }
  ];

  const featuredGroups = [
    {
      name: "Tech Innovators",
      members: 1240,
      description: "Alumni working in technology and innovation",
      activity: "Very Active"
    },
    {
      name: "Entrepreneurs Circle",
      members: 890,
      description: "Business founders and startup enthusiasts",
      activity: "Active"
    },
    {
      name: "Healthcare Professionals",
      members: 670,
      description: "Medical and healthcare industry alumni",
      activity: "Active"
    },
    {
      name: "Global Alumni",
      members: 2100,
      description: "International alumni community",
      activity: "Very Active"
    },
    {
      name: "Recent Graduates",
      members: 1850,
      description: "Alumni from the last 5 years",
      activity: "Very Active"
    },
    {
      name: "Arts & Creative",
      members: 420,
      description: "Creative professionals and artists",
      activity: "Moderate"
    }
  ];

  const recentUpdates = [
    {
      author: "Maria Santos",
      authorClass: "Class of 2019",
      type: "achievement",
      content: "Just got promoted to Senior Product Manager at Microsoft! Grateful for all the networking opportunities through our alumni community.",
      timestamp: "3 hours ago",
      likes: 28,
      comments: 12
    },
    {
      author: "Alex Thompson",
      authorClass: "Class of 2017",
      type: "sharing",
      content: "Our startup just closed Series A funding! Big thanks to the alumni investors who believed in our vision. Happy to share our journey with anyone interested.",
      timestamp: "1 day ago",
      likes: 45,
      comments: 18
    },
    {
      author: "Priya Patel",
      authorClass: "Class of 2016",
      type: "opportunity",
      content: "We're hiring! Looking for talented software engineers at our fintech startup. DM me if you're interested or know someone who might be a good fit.",
      timestamp: "2 days ago",
      likes: 22,
      comments: 8
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Career': return 'bg-blue-500 text-white';
      case 'Business': return 'bg-green-500 text-white';
      case 'Events': return 'bg-purple-500 text-white';
      case 'Mentorship': return 'bg-orange-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case 'Very Active': return 'text-green-600';
      case 'Active': return 'text-blue-600';
      case 'Moderate': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
          <MessageCircle className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Community</h1>
          <p className="text-muted-foreground">Connect, share, and engage with fellow alumni worldwide</p>
        </div>
      </div>

      {/* Community Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {communityStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-3">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <h3 className="font-semibold text-foreground mb-2">{stat.title}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="discussions" className="space-y-6">
        <TabsList>
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="feed">Activity Feed</TabsTrigger>
          <TabsTrigger value="create">Create Post</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions" className="space-y-6">
          {/* Search and Filter */}
          <Card>
            <CardContent className="p-4">
              <div className="flex gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search discussions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Discussion Topics */}
          <div className="space-y-4">
            {discussionTopics.map((topic) => (
              <Card key={topic.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Badge className={getCategoryColor(topic.category)}>
                          {topic.category}
                        </Badge>
                        {topic.trending && (
                          <Badge variant="outline" className="text-orange-600 border-orange-300">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            Trending
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg hover:text-primary cursor-pointer">
                        {topic.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {topic.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">
                          {topic.author} • {topic.authorClass}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground mb-4">{topic.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{topic.replies} replies</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{topic.likes} likes</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>{topic.views} views</span>
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{topic.lastActivity}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredGroups.map((group, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{group.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{group.description}</CardDescription>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{group.members.toLocaleString()} members</span>
                    <span className={`font-medium ${getActivityColor(group.activity)}`}>
                      {group.activity}
                    </span>
                  </div>
                  <Button className="w-full" variant="outline">
                    Join Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="feed" className="space-y-6">
          <div className="space-y-4">
            {recentUpdates.map((update, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback>
                        {update.author.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-foreground">{update.author}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{update.authorClass}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{update.timestamp}</span>
                      </div>
                      <p className="text-foreground">{update.content}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <button className="flex items-center space-x-1 hover:text-primary">
                          <ThumbsUp className="h-4 w-4" />
                          <span>{update.likes}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary">
                          <MessageSquare className="h-4 w-4" />
                          <span>{update.comments}</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-primary">
                          <Share2 className="h-4 w-4" />
                          <span>Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Plus className="h-5 w-5 text-primary" />
                <span>Create New Post</span>
              </CardTitle>
              <CardDescription>Share your thoughts, questions, or announcements with the community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="post-title" className="text-sm font-medium mb-2 block">
                  Post Title
                </label>
                <Input
                  id="post-title"
                  placeholder="What would you like to discuss?"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="post-category" className="text-sm font-medium mb-2 block">
                  Category
                </label>
                <select className="w-full p-2 border border-border rounded-md bg-background">
                  <option>Career</option>
                  <option>Business</option>
                  <option>Events</option>
                  <option>Mentorship</option>
                  <option>General</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="post-content" className="text-sm font-medium mb-2 block">
                  Content
                </label>
                <Textarea
                  id="post-content"
                  placeholder="Share your thoughts, ask questions, or make announcements..."
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
              
              <div className="flex space-x-3">
                <Button className="flex-1">Publish Post</Button>
                <Button variant="outline" className="flex-1">Save Draft</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Community;