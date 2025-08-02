import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Heart, DollarSign, Users, GraduationCap, Target, TrendingUp, Award, HandHeart } from 'lucide-react';

const GiveBack = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const campaigns = [
    {
      id: 1,
      title: "Student Emergency Fund",
      description: "Supporting students facing financial hardships to continue their education",
      goal: 250000,
      raised: 187500,
      donors: 432,
      featured: true,
      category: "Student Support"
    },
    {
      id: 2,
      title: "New Library Construction",
      description: "Building a state-of-the-art learning center with modern technology and collaborative spaces",
      goal: 5000000,
      raised: 3200000,
      donors: 891,
      featured: true,
      category: "Infrastructure"
    },
    {
      id: 3,
      title: "Research Excellence Grants",
      description: "Funding innovative research projects across all departments",
      goal: 1000000,
      raised: 650000,
      donors: 234,
      featured: false,
      category: "Research"
    },
    {
      id: 4,
      title: "Alumni Mentorship Program",
      description: "Expanding our mentorship network to reach more students globally",
      goal: 150000,
      raised: 98000,
      donors: 156,
      featured: false,
      category: "Programs"
    }
  ];

  const impactStats = [
    {
      icon: GraduationCap,
      title: "Scholarships Awarded",
      value: "2,450+",
      description: "Students supported this year"
    },
    {
      icon: DollarSign,
      title: "Total Raised",
      value: "$12.5M",
      description: "In the last fiscal year"
    },
    {
      icon: Users,
      title: "Active Donors",
      value: "4,800+",
      description: "Alumni contributing annually"
    },
    {
      icon: Target,
      title: "Projects Funded",
      value: "127",
      description: "Initiatives completed"
    }
  ];

  const volunteerOpportunities = [
    {
      title: "Career Mentorship",
      commitment: "2-3 hours/month",
      participants: 145,
      description: "Guide current students in their career development journey"
    },
    {
      title: "Guest Speaking",
      commitment: "1-2 sessions/semester",
      participants: 89,
      description: "Share your expertise in classroom settings and workshops"
    },
    {
      title: "Alumni Event Organization",
      commitment: "5-10 hours/month",
      participants: 67,
      description: "Help organize regional alumni gatherings and networking events"
    },
    {
      title: "Student Interview Panel",
      commitment: "4-6 hours/year",
      participants: 234,
      description: "Participate in admissions interviews and scholarship selections"
    }
  ];

  const donationOptions = [50, 100, 250, 500, 1000];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
          <Heart className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Give Back</h1>
          <p className="text-muted-foreground">Support future generations and make a lasting impact on our community</p>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {impactStats.map((stat, index) => {
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

      <Tabs defaultValue="donate" className="space-y-6">
        <TabsList>
          <TabsTrigger value="donate">Make a Donation</TabsTrigger>
          <TabsTrigger value="campaigns">Active Campaigns</TabsTrigger>
          <TabsTrigger value="volunteer">Volunteer</TabsTrigger>
          <TabsTrigger value="impact">Impact Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="donate" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Donation Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-primary" />
                  <span>Make a Donation</span>
                </CardTitle>
                <CardDescription>Your contribution makes a direct impact on student success</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Quick amounts</label>
                  <div className="grid grid-cols-3 gap-2">
                    {donationOptions.map((amount) => (
                      <Button
                        key={amount}
                        variant={donationAmount === amount.toString() ? "default" : "outline"}
                        onClick={() => setDonationAmount(amount.toString())}
                        className="w-full"
                      >
                        ${amount}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="custom-amount" className="text-sm font-medium mb-2 block">
                    Custom amount
                  </label>
                  <Input
                    id="custom-amount"
                    placeholder="Enter amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(e.target.value)}
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="lg">
                    Donate ${donationAmount || '0'}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Secure payment processing • Tax deductible
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Featured Campaign */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <CardHeader>
                <Badge className="w-fit bg-primary text-primary-foreground">Featured Campaign</Badge>
                <CardTitle>{campaigns[0].title}</CardTitle>
                <CardDescription>{campaigns[0].description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>${campaigns[0].raised.toLocaleString()} of ${campaigns[0].goal.toLocaleString()}</span>
                  </div>
                  <Progress value={(campaigns[0].raised / campaigns[0].goal) * 100} className="h-3" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{Math.round((campaigns[0].raised / campaigns[0].goal) * 100)}% funded</span>
                    <span>{campaigns[0].donors} donors</span>
                  </div>
                </div>
                <Button className="w-full" variant="outline">
                  Support This Campaign
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-6">
          <div className="grid gap-6">
            {campaigns.map((campaign) => (
              <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={campaign.featured ? "default" : "outline"}>
                      {campaign.category}
                    </Badge>
                    {campaign.featured && (
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{campaign.title}</CardTitle>
                  <CardDescription>{campaign.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>${campaign.raised.toLocaleString()} of ${campaign.goal.toLocaleString()}</span>
                    </div>
                    <Progress value={(campaign.raised / campaign.goal) * 100} className="h-3" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{Math.round((campaign.raised / campaign.goal) * 100)}% funded</span>
                      <span>{campaign.donors} donors</span>
                    </div>
                  </div>
                  <div className="flex space-x-3">
                    <Button className="flex-1">Donate Now</Button>
                    <Button variant="outline" className="flex-1">Learn More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="volunteer" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <HandHeart className="h-5 w-5 text-primary" />
                <span>Volunteer Opportunities</span>
              </CardTitle>
              <CardDescription>Share your time and expertise to support our community</CardDescription>
            </CardHeader>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            {volunteerOpportunities.map((opportunity, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                  <CardDescription>{opportunity.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Time commitment:</span>
                    <span className="font-medium">{opportunity.commitment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current volunteers:</span>
                    <span className="font-medium">{opportunity.participants}</span>
                  </div>
                  <Button className="w-full">Get Involved</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="impact" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-green-600" />
                  <CardTitle className="text-green-800">Scholarship Impact</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-green-700 italic">
                  "The scholarship support allowed me to focus on my studies without worrying about finances. I graduated with honors and now work at a leading tech company."
                </blockquote>
                <div className="text-sm text-green-600">
                  <p className="font-semibold">Maria Santos</p>
                  <p>Class of 2023, Computer Science</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-blue-800">Research Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-blue-700 italic">
                  "Alumni funding enabled our breakthrough research in renewable energy storage, leading to three patents and a startup company."
                </blockquote>
                <div className="text-sm text-blue-600">
                  <p className="font-semibold">Dr. James Chen</p>
                  <p>Engineering Department</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Users className="h-6 w-6 text-purple-600" />
                  <CardTitle className="text-purple-800">Community Building</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-purple-700 italic">
                  "The new student center, funded by alumni donations, has become the heart of campus life, bringing students together across all disciplines."
                </blockquote>
                <div className="text-sm text-purple-600">
                  <p className="font-semibold">Student Council</p>
                  <p>Class of 2024</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <GraduationCap className="h-6 w-6 text-orange-600" />
                  <CardTitle className="text-orange-800">Global Reach</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <blockquote className="text-orange-700 italic">
                  "Alumni support for our international exchange program opened doors to study abroad opportunities that changed my perspective on global business."
                </blockquote>
                <div className="text-sm text-orange-600">
                  <p className="font-semibold">Alex Kim</p>
                  <p>Class of 2024, Business Administration</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GiveBack;