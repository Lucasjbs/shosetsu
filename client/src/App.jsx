import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home'
import StoryWriting from './pages/storyWriting/StoryWriting';
import StoryUpload from './pages/storyUpload/StoryUpload';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/story/writing' element={<StoryWriting/>} />
        <Route path='/story/upload' element={<StoryUpload/>} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
