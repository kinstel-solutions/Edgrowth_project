import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <FadeIn className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions about our products or solutions? Our team is here to help.
          </p>
        </FadeIn>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 bg-card rounded-2xl shadow-sm border overflow-hidden">
          
          {/* Contact Form */}
          <FadeIn direction="right" className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground">Name <span className="text-muted-foreground font-normal">(Optional)</span></label>
                <input type="text" id="name" className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="John Doe" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+1-555-0123-4567" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address</label>
                  <input type="email" id="email" required className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-foreground">Location <span className="text-muted-foreground font-normal">(Optional)</span></label>
                  <input type="text" id="location" className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="City, Country" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="programs" className="text-sm font-medium text-foreground">Interested Programs <span className="text-muted-foreground font-normal">(Optional)</span></label>
                  <input type="text" id="programs" className="w-full h-10 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="e.g. MBA, BCA" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="otherInfo" className="text-sm font-medium text-foreground">Other Info <span className="text-muted-foreground font-normal">(Optional)</span></label>
                <textarea id="otherInfo" rows={4} className="w-full p-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Any additional information..." />
              </div>

              <button type="submit" className="w-full h-12 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
                Submit Request
              </button>
            </form>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn direction="left" className="bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <MapPin className="text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">India (Head Office)</h3>
                    <p className="text-slate-300 leading-relaxed">
                      123 Innovation Drive, Tech Park,<br/>
                      Metropolis, State,<br/>
                      India – 123456
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">United States</h3>
                    <p className="text-slate-300 leading-relaxed">
                      EdGrowth Consultants LLP<br/>
                      789 Enterprise Blvd, Suite 100<br/>
                      Tech City, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-slate-300">
                      <a href="tel:+155501234567" className="hover:text-white transition-colors">+1-555-0123-4567</a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="text-blue-400 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-slate-300">
                      <a href="mailto:info@edgrowth.com" className="hover:text-white transition-colors">info@edgrowth.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                We respect your privacy. Your information will only be used to contact you regarding your inquiry.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}