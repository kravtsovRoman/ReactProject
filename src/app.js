import React, { PropTypes } from 'react';
import { Header } from './components/index';
import { Modal } from './components/modal/index';
import { DevTools } from './utils/index';

export default class App extends React.Component {

    static propTypes = {
        children: PropTypes.any.isRequired
    };
    static path = '/';

    render() {
        return (
            <div className='container-fluid' >
                <Modal />
                <Header />
                { this.props.children }
                { NODE_ENV !== 'production' ? <DevTools /> : null }
            </div>
        );
    }
}
