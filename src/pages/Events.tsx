import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Users, Video, Camera, ArrowLeft, Newspaper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const navigate = useNavigate();

  // Mock data
  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Alumni Reunion 2024',
      date: '2024-08-15',
      time: '6:00 PM',
      location: 'University Campus, Main Hall',
      type: 'In-Person',
      category: 'Reunion',
      attendees: 245,
      description: 'Join us for our biggest reunion event of the year! Reconnect with classmates, enjoy dinner, and celebrate our shared memories.',
      featured: true,
      price: 'Free'
    },
    {
      id: 2,
      title: 'Tech Industry Panel Discussion',
      date: '2024-08-22',
      time: '7:00 PM',
      location: 'Online via Zoom',
      type: 'Virtual',
      category: 'Professional',
      attendees: 89,
      description: 'Industry leaders discuss the latest trends in technology and career opportunities.',
      featured: false,
      price: 'Free'
    },
    {
      id: 3,
      title: 'Entrepreneurship Workshop',
      date: '2024-09-05',
      time: '2:00 PM',
      location: 'Innovation Center, Room 301',
      type: 'In-Person',
      category: 'Workshop',
      attendees: 35,
      description: 'Learn from successful alumni entrepreneurs about starting and scaling your business.',
      featured: false,
      price: '$25'
    },
    {
      id: 4,
      title: 'Networking Mixer - San Francisco',
      date: '2024-09-12',
      time: '6:30 PM',
      location: 'The Rooftop, Downtown SF',
      type: 'In-Person',
      category: 'Networking',
      attendees: 67,
      description: 'Bay Area alumni networking event with drinks and appetizers.',
      featured: false,
      price: '$15'
    }
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Class of 2019 5-Year Reunion',
      date: '2024-07-20',
      attendees: 156,
      photos: 45,
      videos: 3
    },
    {
      id: 6,
      title: 'Career Development Webinar',
      date: '2024-07-15',
      attendees: 203,
      photos: 12,
      videos: 1
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Reunion': return 'bg-primary';
      case 'Professional': return 'bg-blue-500';
      case 'Workshop': return 'bg-green-500';
      case 'Networking': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'Virtual' ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => navigate('/')}
          className="hover:bg-primary/10 rounded-full p-2"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Events & Reunions</h1>
          <p className="text-muted-foreground">Stay connected through alumni gatherings, workshops, and networking events</p>
        </div>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-4">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
          <TabsTrigger value="news">News & Updates</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">{upcomingEvents.length} upcoming events</p>
            <Button>Create Event</Button>
          </div>

          {/* Featured Event */}
          {upcomingEvents.filter(event => event.featured).map((event) => (
            <Card key={event.id} className="border-primary/20 bg-gradient-to-r from-primary/5 to-transparent">
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              </div>
              <CardHeader>
                <div className="space-y-2">
                  <CardTitle className="text-2xl">{event.title}</CardTitle>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{new Date(event.date).toLocaleDateString()}</p>
                      <p className="text-sm text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getTypeIcon(event.type)}
                    <div>
                      <p className="font-medium">{event.location}</p>
                      <p className="text-sm text-muted-foreground">{event.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">{event.attendees} attending</p>
                      <p className="text-sm text-muted-foreground">{event.price}</p>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-3">
                  <Button size="lg">Register Now</Button>
                  <Button variant="outline" size="lg">Share Event</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Regular Events */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.filter(event => !event.featured).map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <Badge 
                        className={`${getCategoryColor(event.category)} text-white`}
                        variant="secondary"
                      >
                        {event.category}
                      </Badge>
                    </div>
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{event.description}</CardDescription>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {getTypeIcon(event.type)}
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{event.attendees} attending</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-primary">{event.price}</span>
                    <Button size="sm">Register</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Past Events Gallery</h3>
            <Button variant="outline">View All Archives</Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {pastEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>{new Date(event.date).toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {event.attendees} attended
                    </span>
                    <span className="flex items-center">
                      <Camera className="h-4 w-4 mr-1" />
                      {event.photos} photos
                    </span>
                    <span className="flex items-center">
                      <Video className="h-4 w-4 mr-1" />
                      {event.videos} videos
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      View Photos
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Watch Videos
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="news" className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
              <Newspaper className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Latest News & Updates</h3>
              <p className="text-muted-foreground">Stay informed about the latest alumni news, achievements, and community updates</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">2 days ago</span>
                </div>
                <CardTitle className="text-lg">Alumni Global Conference 2024</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Join us for our biggest annual gathering featuring keynotes from industry leaders and networking opportunities across multiple continents.
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="outline" className="text-primary border-primary/30">Featured Event</Badge>
                  <span>Global Conference</span>
                </div>
                <Button variant="outline" size="sm">Read More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">1 week ago</span>
                </div>
                <CardTitle className="text-lg">New Mentorship Program Launch</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Connect with experienced alumni mentors to accelerate your career growth and professional development through our new structured program.
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="outline" className="text-accent border-accent/30">Program Launch</Badge>
                  <span>Career Development</span>
                </div>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm text-muted-foreground">2 weeks ago</span>
                </div>
                <CardTitle className="text-lg">Alumni Scholarship Fund Milestone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  We've reached $2M in our scholarship fund, supporting 150+ students this year. Thank you to all alumni who contributed to this achievement.
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="outline" className="text-green-600 border-green-200">Milestone</Badge>
                  <span>Community Impact</span>
                </div>
                <Button variant="outline" size="sm">View Impact</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-4 w-4 text-accent" />
                  <span className="text-sm text-muted-foreground">3 weeks ago</span>
                </div>
                <CardTitle className="text-lg">Mobile App 2.0 Released</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Enhanced networking tools, improved event management, and new messaging features make connecting with fellow alumni easier than ever.
                </CardDescription>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <Badge variant="outline" className="text-blue-600 border-blue-200">Tech Update</Badge>
                  <span>Platform Enhancement</span>
                </div>
                <Button variant="outline" size="sm">Download Now</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <CardTitle>Alumni Spotlight</CardTitle>
              <CardDescription>Celebrating outstanding achievements in our community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-background/80">
                  <h4 className="font-semibold text-foreground mb-2">Dr. Sarah Johnson (Class of 2010)</h4>
                  <p className="text-sm text-muted-foreground mb-2">Recently appointed as Chief Technology Officer at Microsoft, leading AI innovation initiatives.</p>
                  <Badge variant="outline" className="text-primary border-primary/30">Tech Leadership</Badge>
                </div>
                <div className="p-4 rounded-lg bg-background/80">
                  <h4 className="font-semibold text-foreground mb-2">Marcus Chen (Class of 2015)</h4>
                  <p className="text-sm text-muted-foreground mb-2">Founded GreenTech Solutions, which just raised $50M Series B to expand renewable energy projects globally.</p>
                  <Badge variant="outline" className="text-green-600 border-green-200">Entrepreneurship</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Event Calendar</CardTitle>
              <CardDescription>Full calendar view of all alumni events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 flex items-center justify-center border-2 border-dashed border-border rounded-lg">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Calendar integration coming soon</p>
                  <Button variant="outline" className="mt-4">
                    Subscribe to Calendar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;