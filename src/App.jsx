import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PresentationViewer from './pages/PresentationViewer'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sessions/:sessionId" element={<PresentationViewer />} />
      <Route path="/sessions/:sessionId/:slideIndex" element={<PresentationViewer />} />
    </Routes>
  )
}

export default App
