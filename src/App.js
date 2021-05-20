import './App.css';
import BookList from './Components/Booklist';
import ThemeContext from './Components/Context/ThemeContext';
import Nav from './Components/nav';
import ToggleTheme from './Components/ToggleTheme';
function App() {
  return (
    <div className="App">
      <ThemeContext>
      <Nav/>
      <BookList/>
      <ToggleTheme/>
      </ThemeContext>
    </div>
  );
}

export default App;
