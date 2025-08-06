import { Button } from '@/components/ui/button';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';
import { Logo } from './logo';

const Navbar = () => {
      return (
            <nav className="container h-[100px]">
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
