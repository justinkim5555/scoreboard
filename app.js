// const title = React.createElement(
//   'h1', // Usually a string that represents an HTML element or tag  TYPE
//   { id: 'main-title', title: 'This is a title'}, // Object containing any attribute or value you want PROPS
//   'My First React Element!' // Contents or Children of the element you're creating  CHILDREN
// );


const players = [
  {
  name: "Guil",
  score: 50,
  id: 1
},
{
  name: "Treasure",
  score: 85,
  id: 2
},
{
  name: "Ashley",
  score: 95,
  id: 3
},
{
  name: "James",
  score: 80,
  id: 4
}
];

const Header = (props) => (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Player: {props.totalPlayers(5)}</span>
    </header>
  );

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
      {props.name}
      </span>
      <Counter score = {props.score}/>
    </div>
  );
}

const Counter = (props) => {
  return(
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score"> { props.score } </span>
      <button className="counter-action increment"> + </button>
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="My Scoreboard" totalPlayers={ n => n + 10} />

      {props.initialPlayers.map(player =>
        <Player
        score = {player.score}
        name={player.name}
        key={player.id.toString()}
        />


      )}
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers = {players}/>,
  document.getElementById('root')
);

// Props a list of properties used to pass data to a component.
// Components are customized and made reusable with props


// Define the props in a component's JSX
// Enable the use of props in a component

// At it's simplest, react is a library for creating and updating elements
// Properties or Props, and pass the information into them
// React only manages what gets rendered to the DOM via ReactDOM.render
// It's the job of render() to interpret the element objects and create DOM nodes out of them

// Define the component as a function or class //
// Display the component in the UI with a JSX tag
