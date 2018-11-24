// const title = React.createElement(
//   'h1', // Usually a string that represents an HTML element or tag  TYPE
//   { id: 'main-title', title: 'This is a title'}, // Object containing any attribute or value you want PROPS
//   'My First React Element!' // Contents or Children of the element you're creating  CHILDREN
// );


const title = 'My First React Element!';
const desc = 'I just learned how to create a React node and render it into the DOM';
const myTitleID = 'main-title';
const name = 'Justin';

// const desc = React.createElement('p', null, 'I just learned how to create a React node and render it into the DOM');

const header = (
  <header>
    <h1 id = { myTitleID }>  { name }'s First React Element </h1>
    <p> { desc } </p>
    <input value={ 20 * 20 }></input>
  </header>
);




// React does not create real DOM nodes
// React create plain javascript that explains DOM nodes
// ReactDOM.render()

ReactDOM.render(
  header,
  document.getElementById('root')
);

// React only manages what gets rendered to the DOM via ReactDOM.render
// It's the job of render() to interpret the element objects and create DOM nodes out of them
