"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/ui/FadeIn";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { sendContactEmail } from "@/app/actions/contact";
import { sendGTMEvent } from "@next/third-parties/google";

export default function ContactClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({ type: null, message: null });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // Validate when user leaves the field
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const result = await sendContactEmail(data);
      if (result.success) {
        const nameParts = data.name?.trim().split(" ") || [];
        const first_name = nameParts[0] || "";
        const last_name = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

        sendGTMEvent({ 
          event: "main_generate_lead", 
          placement: "contact_page_form", 
          method: "form_submit",
          email: data.email,
          phone_number: data.phone,
          first_name,
          last_name,
          city: data.location || ""
        });
        setSubmitStatus({ 
          type: "success", 
          message: result.message || "Thank you! Your request has been received." 
        });
        reset();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setSubmitStatus({ 
          type: "error", 
          message: result.error || "Something went wrong. Please check your connection and try again." 
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus({ 
        type: "error", 
        message: "A network error occurred. Please try again later." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <FadeIn className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions about our programs or admissions? Our team is here to help.
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 bg-card rounded-2xl shadow-sm border overflow-hidden">
          
          {/* Contact Form */}
          <FadeIn direction="right" className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Book a Free Consultation</h2>
            
            {submitStatus.type === "success" ? (
              <div className="bg-primary/10  border border-primary/60  p-8 rounded-xl text-center animate-in fade-in zoom-in duration-300">
                <div className="h-16 w-16 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-green-900 dark:text-green-400 mb-3">Submission Successful!</h3>
                <p className="text-foreground  mb-8 leading-relaxed">
                  {submitStatus.message}
                </p>
                <button 
                  onClick={() => setSubmitStatus({ type: null, message: null })}
                  className="bg-green-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {submitStatus.type === "error" && (
                  <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-md flex items-center gap-3 text-destructive text-sm font-medium animate-in slide-in-from-top-2">
                    <AlertCircle size={18} className="shrink-0" />
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground flex justify-between">
                    Name 
                    <span className="text-muted-foreground font-normal text-xs uppercase tracking-wider">Optional</span>
                  </label>
                  <input 
                    {...register("name")}
                    type="text" 
                    id="name" 
                    className={cn(
                      "w-full h-12 px-4 rounded-md border border-input bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                      errors.name && "border-destructive focus:ring-destructive/50 focus:border-destructive"
                    )}
                    placeholder="John Doe" 
                  />
                  {errors.name && <p className="text-xs text-destructive font-medium mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground flex justify-between">
                      Phone Number
                      <span className="text-destructive font-bold">*</span>
                    </label>
                    <input 
                      {...register("phone")}
                      type="tel" 
                      id="phone" 
                      className={cn(
                        "w-full h-12 px-4 rounded-md border border-input bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                        errors.phone && "border-destructive focus:ring-destructive/50 focus:border-destructive"
                      )} 
                      placeholder="+91 85275-11409" 
                    />
                    {errors.phone && <p className="text-xs text-destructive font-medium mt-1">{errors.phone.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground flex justify-between">
                      Email Address
                      <span className="text-destructive font-bold">*</span>
                    </label>
                    <input 
                      {...register("email")}
                      type="email" 
                      id="email" 
                      className={cn(
                        "w-full h-12 px-4 rounded-md border border-input bg-background text-foreground transition-all focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary",
                        errors.email && "border-destructive focus:ring-destructive/50 focus:border-destructive"
                      )} 
                      placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-xs text-destructive font-medium mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="location" className="text-sm font-medium text-foreground flex justify-between">
                      Location 
                      <span className="text-muted-foreground font-normal text-xs uppercase tracking-wider">Optional</span>
                    </label>
                    <input 
                      {...register("location")}
                      type="text" 
                      id="location" 
                      className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                      placeholder="City, Country" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="programs" className="text-sm font-medium text-foreground flex justify-between">
                      Programs 
                      <span className="text-muted-foreground font-normal text-xs uppercase tracking-wider">Optional</span>
                    </label>
                    <input 
                      {...register("programs")}
                      type="text" 
                      id="programs" 
                      className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" 
                      placeholder="e.g. MBA, BCA" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="otherInfo" className="text-sm font-medium text-foreground flex justify-between">
                    Additional Information 
                    <span className="text-muted-foreground font-normal text-xs uppercase tracking-wider">Optional</span>
                  </label>
                  <textarea 
                    {...register("otherInfo")}
                    id="otherInfo" 
                    rows={4} 
                    className="w-full p-4 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none" 
                    placeholder="Tell us about your career goals..." 
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full h-14 bg-primary text-primary-foreground font-bold rounded-md hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/25"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Processing Request...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </button>
              </form>
            )}
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="left" className="bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="text-blue-400 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Head Office</h3>
                    <p className="text-slate-300 leading-relaxed">
                      62, Guru Gobind Singh Marg,<br/>
                      Lucknow, Uttar Pradesh,<br/>
                      India – 226001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="text-blue-400 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-slate-300">
                      <a 
                        href="tel:8527511409" 
                        onClick={() => sendGTMEvent({ event: "main_call_click", placement: "contact_page_info_panel", method: "tel_link" })}
                        className="hover:text-white transition-colors text-lg font-medium"
                      >
                        +91 8527511409
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="text-blue-400 h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-slate-300">
                      <a href="mailto:shekhar@edgrowth.info" className="hover:text-white transition-colors">shekhar@edgrowth.info</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              {/* <div className="flex items-center gap-3 mb-4">
                <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wide">Support Available 24/7</span>
              </div> */}
              <p className="text-slate-400 text-sm leading-relaxed">
                We respect your privacy. Your information will only be used to contact you regarding your inquiry.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}
