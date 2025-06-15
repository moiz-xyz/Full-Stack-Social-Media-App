import { BrowserRouter } from "react-router-dom"

import "./index.css"
import AppRouter from "./Routing/AppRouter"

const App = () => {
  return (
    <div>
  <BrowserRouter>
<AppRouter/>
  </BrowserRouter>
    </div>
  )
}

export default App
