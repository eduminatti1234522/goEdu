import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from "./home";
import Cate from "./category";
import School from "./school";
import Layout from "../layout/mainLayout";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Router>

  <Layout>
<Routes>
    <Route exact path='/' element={< Home />}></Route>
    <Route exact path='/category/:city/:type' element={< Cate />}></Route>
    <Route exact path='/school' element={< School />}></Route>
    {/* <Route exact path='/about' element={< About />}></Route>
    <Route exact path='/contact' element={< Contact />}></Route> */}
</Routes>
</Layout>
    </Router>
    </div>
  )
}

export default App
