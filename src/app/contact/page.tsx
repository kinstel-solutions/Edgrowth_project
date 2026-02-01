import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Have questions about our products or solutions? Our team is here to help.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-sm overflow-hidden">
          
          {/* Contact Form */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                  <input type="text" id="firstName" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                  <input type="text" id="lastName" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                <input type="email" id="email" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-slate-700">Company / Organization</label>
                <input type="text" id="company" className="w-full h-10 px-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Company Ltd." />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea id="message" rows={4} className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Tell us about your project requirements..." />
              </div>

              <button type="submit" className="w-full h-12 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                Submit Request
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-slate-900 text-white p-8 md:p-12 flex flex-col justify-between">
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
                      EnviroLko Instruments Pvt Ltd<br/>
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
                      <a href="mailto:info@envirolko-placeholder.com" className="hover:text-white transition-colors">info@envirolko-placeholder.com</a>
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
          </div>

        </div>
      </div>
    </div>
  );
}