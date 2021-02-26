import React from 'react';
import { withRouter} from 'react-router-dom';
import PostDetail from '../components/PostDetail';
import PostBanner from '../layouts/PostBannerComponent';
import Footer from '../layouts/FooterComponent';

class Post extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <>
                <PostBanner 
                    url="/site/img/post-bg.jpg"
                    title="Title for the Post"
                    subtitle="subtitle for the Post"
                    meta="Desc for the Post"
                />
                <PostDetail
                    url="/site/img/post-sample-image.jpg"
                />
                <Footer />
            </>
        );
    }
}

export default withRouter(Post);
