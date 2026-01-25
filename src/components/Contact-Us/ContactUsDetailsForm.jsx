import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { EMAIL, PHONE } from "../../utils/constants";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { sendEmail } from "../../services/apiEmail";
import { toast } from "react-toastify";

function ContactUsDetailsForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setIsSubmitting(true);
    const promise = sendEmail(data);

    toast.promise(promise, {
      pending: "Sending your message...",
      success: "Message sent successfully! We'll get back to you soon.",
      error: (err) => err.message || "Something went wrong. Please try again.",
    });

    try {
      await promise;
      reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", { required: "Full name is required" })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-xs text-red-500">{errors.name.message}</p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                {...register("subject", { required: "Subject is required" })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Enter the subject of your message"
              />
              {errors.subject && (
                <p className="text-xs text-red-500">{errors.subject.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                {...register("message", { required: "Message is required" })}
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us about your question or issue..."
              />
              {errors.message && (
                <p className="text-xs text-red-500">{errors.message.message}</p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ContactUsDetailsForm;
