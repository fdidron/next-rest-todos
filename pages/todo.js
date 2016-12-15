import Link from 'next/link';
import Todo from '../components/todo';
const TODO_ENDPOINT = 'https://jsonplaceholder.typicode.com/todos';

export default class Index extends React.Component {

  static async getInitialProps({query}) {
    const data = await fetch(`${TODO_ENDPOINT}/${query.id}`);
    const todo = await data.json();
    return {
      todo
    }
  }

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Todo Detail</h1>
        <Link href="/">back to the list</Link>
        <hr />
        <Todo todo={this.props.todo} />
      </div>
    );
  }
};