import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MapPin, Building2, Calendar, Users, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AlumniNetwork = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Mock data - replace with real data from your backend
  const alumni = [
    {
      id: 1,
      name: 'John Smith',
      batch: '2018',
      department: 'Computer Science',
      location: 'San Francisco, CA',
      company: 'Tech Corp',
      position: 'Senior Software Engineer',
      avatar: '',
      skills: ['React', 'Node.js', 'AWS']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      batch: '2019',
      department: 'Business Administration',
      location: 'New York, NY',
      company: 'Finance Inc',
      position: 'Product Manager',
      avatar: '',
      skills: ['Product Strategy', 'Analytics', 'Leadership']
    },
    {
      id: 3,
      name: 'Mike Chen',
      batch: '2017',
      department: 'Engineering',
      location: 'Seattle, WA',
      company: 'Innovation Labs',
      position: 'Engineering Manager',
      avatar: '',
      skills: ['Team Leadership', 'System Design', 'Python']
    }
  ];

  const batches = ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'];
  const departments = ['Computer Science', 'Business Administration', 'Engineering', 'Arts & Sciences'];

  const filteredAlumni = alumni.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <h1 className="text-3xl font-bold text-foreground">Alumni Network</h1>
          <p className="text-muted-foreground">Connect with fellow alumni and expand your professional network</p>
        </div>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search alumni by name, company, or department..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="directory" className="space-y-4">
        <TabsList>
          <TabsTrigger value="directory">Alumni Directory</TabsTrigger>
          <TabsTrigger value="batches">Batch Groups</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredAlumni.map((person) => (
              <Card key={person.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarImage src={person.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{person.name}</CardTitle>
                  <CardDescription>{person.position} at {person.company}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Class of {person.batch}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-4 w-4 text-muted-foreground" />
                      <span>{person.department}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{person.location}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {person.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full" size="sm">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="batches" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {batches.map((batch) => (
              <Card key={batch} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-primary">Class of {batch}</CardTitle>
                  <CardDescription>
                    <Users className="h-4 w-4 inline mr-1" />
                    {Math.floor(Math.random() * 50) + 20} members
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Join Group
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="departments" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {departments.map((dept) => (
              <Card key={dept} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{dept}</CardTitle>
                  <CardDescription>
                    <Users className="h-4 w-4 inline mr-1" />
                    {Math.floor(Math.random() * 100) + 50} alumni
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Explore Department
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AlumniNetwork;