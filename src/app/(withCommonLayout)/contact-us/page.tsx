'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, Send, Clock } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen radial-bg text-white">
      
      {/* Hero */}
      <section className="container mx-auto px-4 py-20 text-center flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl text-primary font-bold mb-6">
            Let’s Build Something Together
          </h1>
          <p className="text-lg  mb-8">
            Have an idea? Let’s talk and see how we can make it a reality.
          </p>

        </motion.div>
       
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        
        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            boxShadow: '0 0 2px #1DCDF5, 0 0 5px #195AFE, 0 0 2px #195AFE, 0 0 60px #195AFE',
          }}
          className=" p-8 rounded-2xl"
        >
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Email Address" />
            </div>
            <Input placeholder="Subject" />
            <Textarea rows={5} placeholder="Tell us about your project..." />
            <Button type="submit" className="w-full group">
              Send Message
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </motion.div>

        {/* Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
         
        >
          {/* Info Card */}
          <div
          
          style={{
            boxShadow: '0 0 2px #1DCDF5, 0 0 5px #195AFE, 0 0 2px #195AFE, 0 0 60px #195AFE',
          }}
          className=" p-8 rounded-2xl space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Our Location</h3>
                <p >123 Business Street, Suite 100, San Francisco</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Email Us</h3>
                <p >hello@agency.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Call Us</h3>
                <p >+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg text-primary">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-medium">Business Hours</h3>
                <p >Mon - Fri: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div
          style={{
            boxShadow: '0 0 2px #1DCDF5, 0 0 5px #195AFE, 0 0 2px #195AFE, 0 0 60px #195AFE',
          }}
          className=" p-4 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              className="rounded-lg"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactUsPage;
