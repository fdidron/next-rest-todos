import Axios from 'axios';
import fetch from 'isomorphic-fetch';

import Todo from '../components/todo';
const TODOS_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

export default class Index extends React.Component {

  static async getInitialProps() {
    const data = await fetch(TODOS_ENDPOINT);
    const todos = await data.json();
    return {
      todos
    }
  }

  constructor(props){
    super(props);
  }

  renderTodos = () => this.props.todos.map( todo => <Todo todo={todo} key={ todo.id } /> )

  render() {
    return (
      <div>
        <h1>Home</h1>
        { this.renderTodos() }
      </div>
    );
  }
};