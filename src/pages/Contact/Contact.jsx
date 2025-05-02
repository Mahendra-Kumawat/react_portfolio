
import React, { useTransition } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { useToast } from "@/hooks/use-toast";
// import { sendEmailAction } from "@/app/actions"; // We'll create this action next
import { Mail, Phone, MapPin } from "lucide-react";
// import { useIsVisible } from '@/hooks/use-is-visible';
// import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { Link } from "react-router"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});


export function ContactSection() {
  // const { toast } = useToast();
  // const sectionRef = useRef < HTMLDivElement > (null);
  const [isPending, startTransition] = useTransition()
  const isVisible = true;
  const emailAddress = import.meta.env.VITE_MY_EMAIL;
  const phoneNumber = import.meta.env.VITE_CONTACT_NUMBER;
  const location = import.meta.env.VITE_LOCATION;



  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });


  const wait = async () => {
    return new Promise((resolve) => setTimeout(resolve, 5000));
  }

  async function onSubmit(formData) {
    // setIsSubmitting(true);
    // try {
    //   const result = await sendEmailAction(values);
    //   if (result.success) {
    //     // toast({
    //     //   title: "Message Sent!",
    //     //   description: "Thank you for reaching out. I'll get back to you soon.",
    //     // });
    //     form.reset(); // Reset form after successful submission
    //   } else {
    //     throw new Error(result.error || "Failed to send message.");
    //   }
    // } catch (error) {
    //   console.error("Failed to send email:", error);
    //   // toast({
    //   //   title: "Error Sending Message",
    //   //   description: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
    //   //   variant: "destructive",
    //   // });
    // } finally {
    //   setIsSubmitting(false);
    // }

    startTransition( async () => {
      await wait()
      console.log(formData)
    })




  }

  return (
    <section id="contact" className="bg-background py-24">
      
        <h2 className={cn(
          "text-4xl md:text-5xl font-bold text-center mb-12 text-foreground opacity-100",
          isVisible && "animate-slide-up"
        )}>
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={cn(
            "lg:col-span-2 opacity-100",
            isVisible && "animate-slide-up animation-delay-200"
          )}>
            <Card className="shadow-lg border border-border/50">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
                <CardDescription>
                  Have a question or project in mind? Let&apos;s talk!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Name" {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="your.email@example.com" {...field} disabled={isPending} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Subject of your message" {...field} disabled={isPending} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Write your message here..."
                              className="min-h-[120px]"
                              {...field}
                              disabled={isPending}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className={`w-full sm:w-auto ${isPending ? 'cursor-wait' : 'cursor-pointer'}`} disabled={isPending}>
                      {isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
          <div className={cn(
            "space-y-6 opacity-100",
            isVisible && "animate-slide-up animation-delay-400"
          )}>
            <h3 className="text-2xl font-semibold text-foreground">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out via email or connect on social media.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <Link href={`mailto:${emailAddress}`} className="text-foreground hover:text-primary transition-colors">
                  {emailAddress}
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-foreground">{phoneNumber}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground">{location}</span>
              </div>
            </div>
            {/* You can add social media links here too */}
          </div>
        </div>
   
    </section>
  );
}
