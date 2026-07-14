import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddLab from "./components/AddLab"
import ViewLab from "./components/ViewLab"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/add-lab" element={<AddLab/>}/>
      <Route path="/view-lab" element={<ViewLab/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
