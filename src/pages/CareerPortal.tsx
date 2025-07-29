import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, MapPin, Building2, Clock, DollarSign, Users, Upload, Star } from 'lucide-react';

const CareerPortal = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data
  const jobs = [
    {
      id: 1,
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      posted: '2 days ago',
      postedBy: 'John Smith (Class of 2018)',
      skills: ['React', 'Node.js', 'AWS'],
      description: 'We are looking for a senior software engineer to join our growing team...'
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'StartupXYZ',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100k - $130k',
      posted: '1 week ago',
      postedBy: 'Sarah Johnson (Class of 2019)',
      skills: ['Product Strategy', 'Analytics', 'Agile'],
      description: 'Join our product team to drive innovation and growth...'
    },
    {
      id: 3,
      title: 'Marketing Intern',
      company: 'Digital Marketing Co.',
      location: 'Remote',
      type: 'Internship',
      salary: '$20/hour',
      posted: '3 days ago',
      postedBy: 'Mike Chen (Class of 2017)',
      skills: ['Digital Marketing', 'Social Media', 'Content Creation'],
      description: 'Great opportunity for students to gain real-world marketing experience...'
    }
  ];

  const mentors = [
    {
      id: 1,
      name: 'Emily Davis',
      position: 'VP of Engineering',
      company: 'Google',
      batch: '2015',
      expertise: ['Software Engineering', 'Leadership', 'Career Growth'],
      rating: 4.9,
      sessions: 127
    },
    {
      id: 2,
      name: 'Robert Wilson',
      position: 'Investment Banking Director',
      company: 'Goldman Sachs',
      batch: '2012',
      expertise: ['Finance', 'Investment Banking', 'Career Transition'],
      rating: 4.8,
      sessions: 89
    }
  ];

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Career Portal</h1>
        <p className="text-muted-foreground">Discover opportunities and advance your career with alumni support</p>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs, companies, or skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="jobs" className="space-y-4">
        <TabsList>
          <TabsTrigger value="jobs">Job Listings</TabsTrigger>
          <TabsTrigger value="mentorship">Mentorship</TabsTrigger>
          <TabsTrigger value="resume">Resume Center</TabsTrigger>
        </TabsList>

        <TabsContent value="jobs" className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">{filteredJobs.length} opportunities found</p>
            <Button>Post a Job</Button>
          </div>
          
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center">
                          <Building2 className="h-4 w-4 mr-1" />
                          {job.company}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'}>
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{job.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Required Skills:</p>
                    <div className="flex flex-wrap gap-1">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Posted by {job.postedBy}
                    </p>
                    <Button>Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="mentorship" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">Find a Mentor</h3>
              <p className="text-sm text-muted-foreground">Connect with experienced alumni for career guidance</p>
            </div>
            <Button variant="outline">Become a Mentor</Button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{mentor.name}</CardTitle>
                      <CardDescription>{mentor.position} at {mentor.company}</CardDescription>
                      <p className="text-xs text-muted-foreground mt-1">Class of {mentor.batch}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="text-sm font-medium">{mentor.rating}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{mentor.sessions} sessions</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Expertise:</p>
                    <div className="flex flex-wrap gap-1">
                      {mentor.expertise.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full">Request Mentorship</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resume" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Upload Resume</span>
                </CardTitle>
                <CardDescription>Share your resume to be discovered by alumni recruiters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Drop your resume here or click to browse
                  </p>
                  <Button variant="outline" className="mt-4">
                    Choose File
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Resume Review</span>
                </CardTitle>
                <CardDescription>Get feedback from alumni professionals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Resume Review Service</span>
                    <Badge variant="secondary">Free</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">1-on-1 Career Consultation</span>
                    <Badge variant="secondary">Premium</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Industry-Specific Guidance</span>
                    <Badge variant="secondary">Premium</Badge>
                  </div>
                </div>
                <Button className="w-full">
                  Request Review
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CareerPortal;