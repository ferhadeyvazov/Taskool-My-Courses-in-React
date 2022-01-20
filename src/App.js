import './App.css';
import Header from './components/header.js'
import Sidebar from './components/userbar.js'
import About from './components/about.js'
import Kurslarim from './components/kurslarim.js'
import Balans from './components/balans.js'
import Ayarlar from './components/ayarlar.js'
import Cixis from './components/cixis.js'
import Huquq from './components/huquq.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className='allpage'>
<Router>
  <Header/>
    <div className='flexdiv'>
  <Sidebar/>
  <Routes>
  <Route exact path="/" element={<About/>} />
  <Route path="/Kurslarim" element={<Kurslarim/>} />
  <Route path="/Balans" element={<Balans/>} />
  <Route path="/Ayarlar" element={<Ayarlar/>} />
  <Route path="/Cixis" element={<Cixis/>} />
  </Routes>
</div>

  <Huquq/>

</Router>


    </div>
    );
}

export default App;
