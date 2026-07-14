import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddLab from "./components/AddLab"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-lab" element={<AddLab/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
