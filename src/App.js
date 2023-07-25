import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import Comments from './components/Comments';
import Videos from './components/Videos';




function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className='page-content'>
        <Comments />
        <Videos />
      </div>
    </div>
  );
}

export default App;
