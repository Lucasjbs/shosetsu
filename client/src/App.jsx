import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home'
import StoryWriting from './pages/storyWriting/StoryWriting';
import StoryUpload from './pages/storyUpload/StoryUpload';
import TextElements from './pages/elements/Elements';
import TextDisplayer from './pages/translate/Translate';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/story/writing' element={<StoryWriting/>} />
        <Route path='/story/upload' element={<StoryUpload/>} />
        <Route path='/text/elements' element={<TextElements/>} />
        <Route path='/text/displayer' element={<TextDisplayer/>} />
        <Route path='*' element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
