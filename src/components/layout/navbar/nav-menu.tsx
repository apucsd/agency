'use client';
import { Button } from '@/components/ui/button';
import {
      NavigationMenu,
      NavigationMenuItem,
      NavigationMenuLink,
      NavigationMenuList,
      NavigationMenuContent,
      NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import { BarChart3, Code, Palette, Search, ShoppingCart, Smartphone } from 'lucide-react';
import Link from 'next/link';
import ListItem from './list-item';

const services = [
      {
            title: 'Web Design',
            href: '#',
            description: 'Create stunning, user-friendly websites that captivate your audience',
            icon: <Palette size={24} />,

            image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      },
      {
            title: 'Web Development',
            href: '#',
            description: 'Build robust, scalable web applications with modern technologies',
            icon: <Code size={24} />,
            image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      },
      {
            title: 'App Development',
            href: '#',
            description: 'Develop native and cross-platform mobile applications',
            icon: <Smartphone size={24} />,
            image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      },
      {
            title: 'E-Commerce Solutions',
            href: '#',
            description: 'Complete online store setup with payment integration',
            icon: <ShoppingCart size={24} />,
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      },
      {
            title: 'SEO Optimization',
            href: '#',
            description: 'Boost your search rankings and online visibility',
            icon: <Search size={24} />,
            image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      },
      {
            title: 'Analytics & Insights',
            href: '#',
            description: 'Track performance and gain valuable business insights',
            icon: <BarChart3 size={24} />,
            image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      },
];
export const NavMenu = (props: NavigationMenuProps) => (
      <NavigationMenu {...props}>
            <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
                  <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                              <Link href="#">Home</Link>
                        </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                              <Link href="#">About</Link>
                        </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <NavigationMenuContent>
                              <div className="w-[800px] p-6">
                                    <div className="grid grid-cols-3 gap-4">
                                          {services.map((service) => (
                                                <ListItem key={service.title} item={service} />
                                          ))}
                                    </div>
                                    <div className="mt-4 pt-4 border-t">
                                          <div className="flex items-center justify-between">
                                                <div>
                                                      <h4 className="text-base font-semibold">Need something custom?</h4>
                                                      <p className="text-sm text-muted-foreground mt-1">
                                                            Let&apos;s discuss your unique requirements and create the perfect solution
                                                      </p>
                                                </div>
                                                <Button
                                                      size="default"
                                                      className="shrink-0 ml-4"
                                                      onClick={() => console.log('Contact us clicked')}
                                                >
                                                      Contact Us
                                                </Button>
                                          </div>
                                    </div>
                              </div>
                        </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                              <Link href="#">Blog</Link>
                        </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                              <Link href="#">Contact Us</Link>
                        </NavigationMenuLink>
                  </NavigationMenuItem>
            </NavigationMenuList>
      </NavigationMenu>
);
