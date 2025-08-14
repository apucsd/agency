'use client';
import { Button } from '@/components/ui/button';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import { Logo } from './logo';
import { usePathname } from 'next/navigation';

const Navbar = () => {
      const isHomePage = usePathname() === '/';
      return (
            <nav className={`container ${isHomePage ? 'absolute text-white ' : 'static text-black'} top-0 left-0 right-0 z-50 h-[100px]`}>
                  <div className="h-full flex items-center justify-between mx-auto px-4">
                        <Logo />

                        {/* Desktop Menu */}
                        <NavMenu className="hidden md:block font-medium" />

                        <div className="flex items-center gap-3">
                              <Button variant="outline" className="hidden sm:inline-flex rounded-full font-medium">
                                    Sign In
                              </Button>
                              <Button className="rounded-full font-medium">Get Started</Button>

                              {/* Mobile Menu */}
                              <div className="md:hidden">
                                    <NavigationSheet />
                              </div>
                        </div>
                  </div>
            </nav>
      );
};

export default Navbar;
