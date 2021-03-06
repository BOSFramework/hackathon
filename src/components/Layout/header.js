import React from 'react';
const Header = () => {
	return (
        <div className="header">
            <div className="row">
                <div className="col-xs-4">                   
                    <h2>
                            <img src="../src/components/images/musician.png" /> Tune Hatch
                    </h2>
                </div>
                <div className="col-xs-3 text-right paddingtop20 pull-right">
                    <span><a href="/Users">Search Artist</a></span> <span className="marginleft10"><a href="/App/login">Login</a></span>
                </div>
            </div>
        </div>
    );
}
export default Header;