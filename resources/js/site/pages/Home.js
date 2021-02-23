import React from 'react';
import PostPreview from '../components/PostPreview';
import Banner from '../layouts/BannerComponent';
import Footer from '../layouts/FooterComponent';


function Home() {
    return (
        <>
            <Banner />
            <PostPreview />
            <Footer />
        </>
    );
}

export default Home;
