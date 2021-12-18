import Nav from "../components/Nav";

const Home = () => {
  return (
    <div>
      <h1>This is the home screen</h1>
      <header className="App-header">
        

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Nav />
      </header>
    </div>
  );
};

export default Home;
