import './App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import CommentsView from './components/CommentsView';
import VideosView from './components/VideosView';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className='page-content'>
        <CommentsView />
        <VideosView />
      </div>
    </div>
  );
}

export default App;
