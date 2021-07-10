import './App.css';
import { BlogProvider } from './components/Context/BlogContext';
import Home from './components/Home/Home';
import UploadBlogs from './components/UploadBlogs/UploadBlogs';
function App() {
  return (
    <BlogProvider>
      <Home />
      <UploadBlogs />
    </BlogProvider>
  );
}

export default App;
