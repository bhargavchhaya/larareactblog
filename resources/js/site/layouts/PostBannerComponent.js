import React from 'react';

class PostBannerComponent extends React.Component{
    
    constructor(props){
        super(props);
    }

    render(){
        let backgroundImageUrl = 'url("'+this.props.url+'")';
        return(
            <header className="intro-header" style={{backgroundImage: backgroundImageUrl}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="post-heading">
                                <h1>{this.props.title}</h1>
                                <h2 className="subheading">{this.props.subtitle}</h2>
                                <span className="meta">{this.props.meta}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default PostBannerComponent;