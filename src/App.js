import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import SportsField from './components/Sports-Field/SportsField';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <SportsField></SportsField>
      <Footer></Footer>
    </div>
  );
}

export default App;
