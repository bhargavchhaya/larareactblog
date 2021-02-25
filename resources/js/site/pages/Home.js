import React from 'react';
import PostPreview from '../components/PostPreview';
import Banner from '../layouts/BannerComponent';
import Footer from '../layouts/FooterComponent';


function Home() {
    return (
        <>
            <Banner 
                url="/site/img/home-bg.jpg"
                title="Title for the header"
                subtitle="subtitle for the header"
            />
            <PostPreview />
            <Footer />
        </>
    );
}

export default Home;
