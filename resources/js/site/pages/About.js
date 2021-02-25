import React from 'react';
import PostPreview from '../components/PostPreview';
import Banner from '../layouts/BannerComponent';
import Footer from '../layouts/FooterComponent';

function About() {
    return (
        <>
            <Banner 
                url="/site/img/about-bg.jpg"
                title="Title for About"
                subtitle="subtitle for the header"
            />
            <PostPreview />
            <Footer />
        </>
    );
}

export default About;
