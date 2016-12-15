import Link from 'next/link';

export default (props) => {
  const url = `/todo?id=${props.todo.id}`;
  const style = (props.todo.completed === true) ? {textDecoration: 'line-through'} : null;
  return (
    <div>
      <Link href={ url } ><span style={ style }>{props.todo.title}</span></Link>
    </div>
  );
};