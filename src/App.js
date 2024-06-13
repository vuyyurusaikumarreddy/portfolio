import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className='menu-index'>
        <Menu/>
        {/* <Header /> */}
      </div>
      <div className='header-app'>
        <Header />
      </div>
      <div className='about'>
        <About/>
      </div>
    </div>
  );
}
// 👋🏻
export default App;
