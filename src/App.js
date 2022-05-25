import { Header } from './components/header/header';
import { Main } from './components/main/main';
import { Footer } from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header name="Book Managment"/>
      <Main name="Main" />
      <Footer name="Antonio"/>
    </div>
  );
}

export default App;
