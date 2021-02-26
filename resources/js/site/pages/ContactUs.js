import React from 'react';
import PostPreview from '../components/PostPreview';
import Banner from '../layouts/BannerComponent';
import Footer from '../layouts/FooterComponent';

function ContactUs() {
    return (
        <>
            <Banner 
                url="/site/img/contact-bg.jpg"
                title="Title for Contact"
                subtitle="subtitle for the header"
            />
            <Footer />
        </>
    );
}

export default ContactUs;
