import './App.css';
import { BlogProvider } from './components/Context/BlogContext';
import Home from './components/Home/Home';
function App() {
  return (
    <BlogProvider>
      <Home />
    </BlogProvider>
  );
}

export default App;
