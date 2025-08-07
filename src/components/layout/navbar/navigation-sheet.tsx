'use client';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import {
      Menu,
      Home,
      User,
      BookOpen,
      MessageSquare,
      ChevronDown,
      Palette,
      Code,
      Smartphone,
      ShoppingCart,
      Search,
      BarChart3,
} from 'lucide-react';
import { Logo } from './logo';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const navItems = [
      { name: 'Home', href: '#', icon: Home },
      { name: 'About', href: '#about', icon: User },
      {
            name: 'Services',
            href: '#',
            icon: BookOpen,
            children: [
                  { name: 'Web Design', href: '#', icon: Palette },
                  { name: 'Web Development', href: '#', icon: Code },
                  { name: 'App Development', href: '#', icon: Smartphone },
                  { name: 'E-Commerce Solutions', href: '#', icon: ShoppingCart },
                  { name: 'SEO Optimization', href: '#', icon: Search },
                  { name: 'Analytics & Insights', href: '#', icon: BarChart3 },
            ],
      },
      { name: 'Blog', href: '#blog', icon: MessageSquare },
      { name: 'Contact', href: '#contact', icon: MessageSquare },
];

const CollapsibleItem = ({ item, isOpen, onClick }: { item: any; isOpen: boolean; onClick: () => void }) => {
      return (
            <div className="w-full">
                  <button
                        onClick={onClick}
                        className={cn(
                              'flex items-center justify-between w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                              'hover:bg-accent hover:text-accent-foreground focus:outline-none'
                        )}
                  >
                        <div className="flex items-center space-x-3">
                              {item.icon && <item.icon className="h-5 w-5" />}
                              <span>{item.name}</span>
                        </div>
                        {item.children && (
                              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                              </motion.div>
                        )}
                  </button>

                  <AnimatePresence>
                        {item.children && isOpen && (
                              <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                                    className="overflow-hidden"
                              >
                                    <div className="pl-8 py-1 space-y-1">
                                          {item.children.map((child: any) => (
                                                <SheetClose asChild key={child.name}>
                                                      <Link
                                                            href={child.href}
                                                            className={cn(
                                                                  'flex items-center space-x-3 rounded-lg px-4 py-2 text-sm font-medium transition-colors',
                                                                  'hover:bg-accent hover:text-accent-foreground'
                                                            )}
                                                      >
                                                            {child.icon && <child.icon className="h-4 w-4" />}
                                                            <span>{child.name}</span>
                                                      </Link>
                                                </SheetClose>
                                          ))}
                                    </div>
                              </motion.div>
                        )}
                  </AnimatePresence>
            </div>
      );
};

export const NavigationSheet = () => {
      const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

      const toggleItem = (name: string) => {
            setOpenItems((prev) => ({
                  ...prev,
                  [name]: !prev[name],
            }));
      };

      return (
            <Sheet>
                  <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="rounded-full">
                              <Menu className="h-5 w-5" />
                              <span className="sr-only">Toggle Menu</span>
                        </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0 bg-background/95 backdrop-blur-sm flex flex-col">
                        <div className="flex items-center justify-between px-6 h-16 border-b">
                              <Logo />
                        </div>
                        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                              {navItems.map((item) => (
                                    <div key={item.name} className="w-full">
                                          {item.children ? (
                                                <CollapsibleItem
                                                      item={item}
                                                      isOpen={!!openItems[item.name]}
                                                      onClick={() => toggleItem(item.name)}
                                                />
                                          ) : (
                                                <SheetClose asChild>
                                                      <Link
                                                            href={item.href}
                                                            className={cn(
                                                                  'flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                                                                  'hover:bg-accent hover:text-accent-foreground'
                                                            )}
                                                      >
                                                            <div className="flex items-center space-x-3">
                                                                  {item.icon && <item.icon className="h-5 w-5" />}
                                                                  <span>{item.name}</span>
                                                            </div>
                                                      </Link>
                                                </SheetClose>
                                          )}
                                    </div>
                              ))}
                        </nav>
                        <div className="p-4 border-t mt-auto">
                              <Button className="w-full bg-primary hover:bg-primary/90">Get in Touch</Button>
                        </div>
                  </SheetContent>
            </Sheet>
      );
};
