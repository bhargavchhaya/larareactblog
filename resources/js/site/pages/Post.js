import React from 'react';
import PostDetail from '../components/PostDetail';
import Banner from '../layouts/BannerComponent';
import Footer from '../layouts/FooterComponent';

class Post extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <>
                <Banner />
                <PostDetail />
                <Footer />
            </>
        );
    }
}

export default Post;
