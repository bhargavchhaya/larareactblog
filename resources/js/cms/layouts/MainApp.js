import React from 'react';
import ReactDOM from 'react-dom';

function MainApp() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">MainApp Component</div>

                        <div className="card-body">I'm an MainApp component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainApp;

if (document.getElementById('mainapp')) {
    ReactDOM.render(<MainApp />, document.getElementById('mainapp'));
}
