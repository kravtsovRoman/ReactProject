import React, { PropTypes } from 'react';
import Input from '../../components/ui/input/index';
import { LS } from '../../utils/index';
import { bindAll } from 'lodash';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { addTodo, likeTodo, deleteTodo } from './actions';
import './styles.less';

class HomePage extends React.Component {

    static path = '/';
    static propTypes = {
        home: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            todoName: ''
        };

        bindAll(this, ['renderTodos', 'inputOnChange', 'addTodo']);
    }

    inputOnChange(value) {
        this.setState({ todoName: value });
    }

    addTodo() {
        const { todos } = this.props.home;
        const id = todos[todos.length - 1].id + 1;
        const name = this.state.todoName;
        this.props.dispatch( addTodo(id, name) );
        this.setState({ todoName: ''});
    }

    renderTodos(item, idx) {
        const todoClasses = classnames('b-home-todo', { 'is-liked': item.liked });
        const btnClasses = classnames( 'btn', {'active': item.liked});
        return (
            <li key={ idx }>
                <span className={ todoClasses }>{ item.name }</span>
                <div>
                    <button className={ btnClasses } onClick={this.likeTodo.bind(this, item)} >&#10084;</button>
                    <button className={'btn'} onClick={this.deleteTodo.bind(this, item)} >&#10006;</button>
                </div>


            </li>
        );
    }

    deleteTodo(todo) {
        this.props.dispatch( deleteTodo(todo));
    }

    likeTodo(todo) {
        this.props.dispatch(likeTodo(todo));
    }

    render() {
        const { todoName } = this.state;
        const { todos, error } = this.props.home;
        return (
            <div className='row-fluid b-home'>
                <div className='col-xs-12'>
                    <ul>
                        { todos.map(this.renderTodos) }
                    </ul>
                    <div className='col-xs-4'>
                        <Input
                            onChange={ this.inputOnChange }
                            value={ todoName }
                            error={ error }
                        />
                        <button className='btn btn-primary' onClick={ this.addTodo }>Add todo</button>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('123');
         LS.set('todos', this.props.home.todos);

    }

}

function mapStateToProps(state) {
    return {
        home: state.home
    };
}

export default connect(mapStateToProps)(HomePage);
