import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function Component() {
      return (
            <footer className="relative bg-slate-900 text-white overflow-hidden">
                  {/* Decorative clip-path elements */}
                  <div className="absolute inset-0">
                        <div
                              className="absolute top-0 left-0 w-full h-32 bg-blue-600 opacity-10"
                              style={{
                                    clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                              }}
                        />
                        <div
                              className="absolute top-0 right-0 w-1/3 h-48 bg-purple-600 opacity-5"
                              style={{
                                    clipPath: 'polygon(20% 0%, 100% 0%, 100% 80%, 0% 100%)',
                              }}
                        />
                  </div>

                  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                              {/* Company Info */}
                              <div className="lg:col-span-1">
                                    <div className="mb-6">
                                          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                DigitalCraft
                                          </h3>
                                          <p className="text-slate-300 mt-2 text-sm leading-relaxed">
                                                Transforming ideas into digital experiences. We craft innovative solutions that drive growth
                                                and engagement.
                                          </p>
                                    </div>

                                    <div className="space-y-3 text-sm">
                                          <div className="flex items-center space-x-3">
                                                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                                <span className="text-slate-300">123 Innovation Street, Tech City, TC 12345</span>
                                          </div>
                                          <div className="flex items-center space-x-3">
                                                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                                <span className="text-slate-300">+1 (555) 123-4567</span>
                                          </div>
                                          <div className="flex items-center space-x-3">
                                                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                                <span className="text-slate-300">hello@digitalcraft.com</span>
                                          </div>
                                    </div>
                              </div>

                              {/* Services */}
                              <div>
                                    <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
                                    <ul className="space-y-3">
                                          {[
                                                'Web Development',
                                                'Mobile App Development',
                                                'Graphic Design',
                                                'UX/UI Design',
                                                'Digital Marketing',
                                                'Brand Strategy',
                                                'E-commerce Solutions',
                                                'SEO Optimization',
                                          ].map((service) => (
                                                <li key={service}>
                                                      <Link
                                                            href="#"
                                                            className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                                                      >
                                                            {service}
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              {/* Company */}
                              <div>
                                    <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
                                    <ul className="space-y-3">
                                          {[
                                                'About Us',
                                                'Our Team',
                                                'Careers',
                                                'Portfolio',
                                                'Case Studies',
                                                'Blog',
                                                'News & Updates',
                                                'Contact',
                                          ].map((item) => (
                                                <li key={item}>
                                                      <Link
                                                            href="#"
                                                            className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                                                      >
                                                            {item}
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>

                              {/* Resources & Legal */}
                              <div>
                                    <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
                                    <ul className="space-y-3 mb-8">
                                          {['Documentation', 'API Reference', 'Support Center', 'Community', 'Tutorials', 'Webinars'].map(
                                                (item) => (
                                                      <li key={item}>
                                                            <Link
                                                                  href="#"
                                                                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                                                            >
                                                                  {item}
                                                            </Link>
                                                      </li>
                                                )
                                          )}
                                    </ul>

                                    <h5 className="text-sm font-semibold mb-3 text-slate-200">Legal</h5>
                                    <ul className="space-y-2">
                                          {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                                                <li key={item}>
                                                      <Link
                                                            href="#"
                                                            className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-xs"
                                                      >
                                                            {item}
                                                      </Link>
                                                </li>
                                          ))}
                                    </ul>
                              </div>
                        </div>

                        {/* Newsletter Signup */}
                        <div className="mt-12 pt-8 border-t border-slate-700">
                              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                    <div className="mb-6 lg:mb-0">
                                          <h4 className="text-lg font-semibold text-white mb-2">Stay Updated</h4>
                                          <p className="text-slate-300 text-sm">
                                                Get the latest insights and updates delivered to your inbox.
                                          </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-3 lg:max-w-md">
                                          <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="flex-1 px-4 py-2 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                          />
                                          <button className="primary-gradient px-6 py-2">
                                                Subscribe
                                          </button>
                                    </div>
                              </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-12 pt-8 border-t border-slate-700">
                              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                                    <div className="mb-6 lg:mb-0">
                                          <p className="text-slate-400 text-sm">
                                                © {new Date().getFullYear()} DigitalCraft Agency. All rights reserved.
                                          </p>
                                    </div>

                                    {/* Social Media Links */}
                                    <div className="flex space-x-4">
                                          {[
                                                { icon: Facebook, href: '#', label: 'Facebook' },
                                                { icon: Twitter, href: '#', label: 'Twitter' },
                                                { icon: Instagram, href: '#', label: 'Instagram' },
                                                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                                          ].map(({ icon: Icon, href, label }) => (
                                                <Link
                                                      key={label}
                                                      href={href}
                                                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-200 group"
                                                      aria-label={label}
                                                >
                                                      <Icon className="h-4 w-4 text-slate-400 group-hover:text-white" />
                                                </Link>
                                          ))}
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Bottom decorative element */}
                  <div
                        className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
                        style={{
                              clipPath: 'polygon(0 100%, 100% 100%, 90% 0, 10% 0)',
                        }}
                  />
            </footer>
      );
}
