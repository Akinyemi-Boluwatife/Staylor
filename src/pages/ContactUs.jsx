import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { EMAIL, PHONE } from "../utils/constants";
import { Button } from "../components/ui/button";

function ContactUs() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground">
            If you have any issue, kindly let us know.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="">
          <CardHeader>
            <div className="flex items-center gap-2 text-blue-500">
              <Mail className="h-5 w-5" />
              <CardTitle>Email Support</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              For general inquiries and support requests.
            </p>
            <p className="mt-4 font-medium">Email us at: {EMAIL}</p>
          </CardContent>
        </Card>

        <Card className="">
          <CardHeader>
            <div className="flex items-center gap-2 text-green-500">
              <Phone className="h-5 w-5" />
              <CardTitle>Phone Support</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Talk to our support team directly.
            </p>
            <p className="mt-4 font-medium">{PHONE}</p>
            <p className="text-sm text-muted-foreground">
              Mon-Fri, 9:00 AM - 5:00 PM
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Send Us a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter the subject of your message"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us about your question or issue..."
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactUs;
