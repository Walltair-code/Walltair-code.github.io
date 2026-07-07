import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "@/pages/Index"
import Work from "@/pages/Work"
import Contact from "@/pages/Contact"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App