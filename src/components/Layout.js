import React from 'react';
import Header from './shared/header';
import Footer from './shared/footer';

export default function Layout({children}) {
    return(
        <>
           <Header />
           <main className="main">
                <div className="wrapper">
                    {children}                
                </div>  
            </main>
           <Footer />
        </>
    )
}
