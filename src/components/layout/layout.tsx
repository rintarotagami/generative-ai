import React, { ReactNode } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex">
            <div className="flex-1">
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
