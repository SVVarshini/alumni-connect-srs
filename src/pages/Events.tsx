import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Clock, Users, Video, Camera, ArrowLeft } from 'lucide-react';
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