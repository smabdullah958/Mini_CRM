import { Route,Routes } from "react-router-dom"
import HomeRoute from "./Routes/HomeRoute/HomeRoute.jsx"
import LeadsRoute from "./Routes/LeadsRoute/Leads.jsx"
import Linked from "./Link.jsx"
import IDRoute from "./Routes/IDRoute/NewRoue.jsx"
function App() {

  return (
  <div className="flex">
  <Linked/>
  <Routes>

<Route index element={<HomeRoute />} />
<Route path="/Leads" element={<LeadsRoute />} />
<Route path="/IDRoute/:_id" element={<IDRoute/>}/>
  </Routes>
      
</div>
  )
}

export default App
