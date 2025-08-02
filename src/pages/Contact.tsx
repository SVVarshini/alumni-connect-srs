import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"],
      description: "Mon-Fri 9AM-5PM EST"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["alumni@university.edu", "support@alumni.edu"],
      description: "24/7 Response within 24 hours"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["123 University Avenue", "Alumni Hall, Suite 200", "City, State 12345"],
      description: "Visit us during business hours"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 10:00 AM - 2:00 PM", "Sunday: Closed"],
      description: "EST timezone"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
          <MessageCircle className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contact Us</h1>
          <p className="text-muted-foreground">Get in touch with our alumni relations team</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Send className="h-5 w-5 text-primary" />
              <span>Send us a Message</span>
            </CardTitle>
            <CardDescription>We'll get back to you within 24 hours</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="text-sm font-medium mb-2 block">First Name</label>
                <Input id="first-name" placeholder="John" />
              </div>
              <div>
                <label htmlFor="last-name" className="text-sm font-medium mb-2 block">Last Name</label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
              <Input id="email" type="email" placeholder="john.doe@email.com" />
            </div>
            
            <div>
              <label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</label>
              <Input id="subject" placeholder="How can we help you?" />
            </div>
            
            <div>
              <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
              <Textarea id="message" placeholder="Tell us about your inquiry..." className="min-h-[120px]" />
            </div>
            
            <Button className="w-full">Send Message</Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/20 to-accent/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-foreground">{detail}</p>
                      ))}
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;