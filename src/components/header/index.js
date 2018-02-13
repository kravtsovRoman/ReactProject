import React from 'react';

export default class Header extends React.Component {

    static path = '/';

    render() {
        return (
            <nav className='navbar navbar-default'>
                <div className='container-fluid'>
                    <div className='navbar-header'>
                        <a className='navbar-brand' href='#' >Brand</a>
                    </div>
                </div>
            </nav>
        );
    }  

}
