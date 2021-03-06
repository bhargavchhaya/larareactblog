import React from 'react';

class BannerComponent extends React.Component{
    
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
                            <div className="site-heading">
                                <h1>{this.props.title}</h1>
                                <hr className="small" />
                                <span className="subheading">{this.props.subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default BannerComponent;