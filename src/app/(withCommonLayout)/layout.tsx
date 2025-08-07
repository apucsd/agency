import Footer from '@/components/layout/footer/footer';
import Navbar from '@/components/layout/navbar/navbar';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <>
                  <Navbar />
                  {children}
                  <Footer />
            </>
      );
};

export default layout;
