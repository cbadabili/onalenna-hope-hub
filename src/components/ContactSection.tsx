import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Shield, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reach out today. Every conversation is confidential, and help is always available.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're seeking help for yourself or a loved one, have questions about 
                our services, or want to support our mission, we're here to listen and help.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="bg-white shadow-soft border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hope rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Our Location</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        7.5-hectare farm<br />
                        30km outside Francistown<br />
                        Botswana
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-soft border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hope rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Crisis Support</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="font-medium text-primary">+267 72808110</span><br />
                        24/7 Crisis Line<br />
                        Immediate help available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-soft border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hope rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Email</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        <span className="font-medium text-primary">admin@onalenna.org</span><br />
                        General inquiries & appointments<br />
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-soft border-border">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-hope rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Office Hours</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 4:00 PM<br />
                        Sunday: Emergency only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Privacy Notice */}
            <div className="bg-accent rounded-xl p-6 border border-border">
              <div className="flex items-start gap-3">
                <Shield className="h-6 w-6 text-accent-foreground mt-1" />
                <div>
                  <h4 className="font-semibold text-accent-foreground mb-2">
                    Your Privacy is Protected
                  </h4>
                  <p className="text-accent-foreground text-sm leading-relaxed">
                    All communications are strictly confidential. We use encrypted forms 
                    and secure channels to protect your personal information and maintain 
                    your privacy throughout our correspondence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-white shadow-medium border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out this secure form and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" className="border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" className="border-border" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" className="border-border" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input type="tel" placeholder="+267 XX XXX XXX" className="border-border" />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    How can we help? *
                  </label>
                  <select className="w-full p-3 border border-border rounded-md bg-background text-foreground">
                    <option value="">Select a reason</option>
                    <option value="crisis">I need immediate help (crisis)</option>
                    <option value="treatment">Seeking treatment information</option>
                    <option value="family">Family member needs help</option>
                    <option value="support">General support questions</option>
                    <option value="donate">Donation and funding</option>
                    <option value="partnership">Partnership opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Please share your message or questions. We're here to help." 
                    className="min-h-[120px] border-border"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" className="mt-1" id="privacy" />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    I understand that this form is secure and my information will be kept confidential. 
                    I consent to being contacted by Onalenna Rehabilitation Hub regarding my inquiry.
                  </label>
                </div>

                <div className="space-y-3">
                  <Button variant="hero" className="w-full" size="lg">
                    Send Secure Message
                  </Button>
                  
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-2">
                      Need immediate help? Don't wait for a response.
                    </p>
                    <Button variant="crisis" size="sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Crisis Line Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <Card className="bg-white shadow-soft border-border">
            <CardContent className="p-0">
              <div className="h-64 bg-gradient-healing rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-medium">Interactive Map Coming Soon</p>
                  <p className="text-sm">7.5-hectare facility, 30km outside Francistown</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;