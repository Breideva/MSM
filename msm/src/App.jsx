import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Services } from './pages/services';
import { Contact } from './pages/contact';
import { About } from './pages/about';
import { Projects } from './pages/projects';
import { Usgc } from './pages/Services/usgc-captains';
import { Detail } from './pages/Services/detailing';
import { Hull } from './pages/Services/hull-bottom-cleaning';
import { Management } from './pages/Services/monthly-management-plans';
import { Watch } from './pages/Services/boat-watch';
import { Mercury } from './pages/Services/mercury-techs';
import { First } from './pages/Projects/first';
import { Second } from './pages/Projects/second';
import { Third } from './pages/Projects/third';
import { Fourth } from './pages/Projects/fourth';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="about" element={<About />}></Route>
          {/* Services */}
          <Route path="services" element={<Services />}></Route>
          {/* Service Pages */}
          <Route path='usgc-captains' element={<Usgc />}></Route>
          <Route path='detailing' element={<Detail />}></Route>
          <Route path='hull-bottom-cleaning' element={<Hull />}></Route>
          <Route path='monthly-management-plans' element={<Management />}></Route>
          <Route path='boat-watch' element={<Watch />}></Route>
          <Route path='mercury-techs' element={<Mercury />}></Route>
          {/* Projects */}
          <Route path="projects" element={<Projects />}></Route>
          {/* Project Pages */}
          <Route path="first" element={<First />}></Route>
          <Route path="second" element={<Second />}></Route>
          <Route path="third" element={<Third />}></Route>
          <Route path="fourth" element={<Fourth />}></Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
