import React from 'react';
import ReactDOM from 'react-dom';
import PostDetail from './PostDetail';

function PostPreview(){
    return(
        <div className="post-preview">
            <Link to="/Man-must-explore" component={PostDetail}>
                <h2 className="post-title">
                    Man must explore, and this is exploration at its greatest
                </h2>
                <h3 className="post-subtitle">
                    Problems look mighty small from 150 miles up
                </h3>
            </Link>
            <p className="post-meta">Posted by <a href="#">Start Bootstrap</a> on September 24, 2014</p>
        </div>
    );
}

export default PostPreview;