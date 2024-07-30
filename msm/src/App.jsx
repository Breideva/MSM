import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import "../src/styles/home.css"

//Mains
const Home = lazy(() => import("./pages/home"))
const Contact = lazy(() => import("./pages/contact"))
const About = lazy(() => import("./pages/about"))
const Services = lazy(() => import("./pages/services"))
const Faq = lazy(() => import("./pages/faq"))

//Services
const Usgc = lazy(() => import('./pages/Services/usgc-captains'));
const Detail = lazy(() => import('./pages/Services/detailing'));
const Hull = lazy(() => import('./pages/Services/hull-bottom-cleaning'));
const Management = lazy(() => import('./pages/Services/monthly-management-plans'));
const Watch = lazy(() => import('./pages/Services/boat-watch'));
const Mercury = lazy(() => import('./pages/Services/mercury-techs'));

import { ScrollToTop } from './components/scrolltotop';
import { Terms } from './pages/Legal/terms';
import { Privacy } from './pages/Legal/privacy';


function App() {


  return (
    <>
      <Router>
        < ScrollToTop />
        <Suspense fallback={
          <div className='loading'>
            <h5>Loading...</h5>
          </div>}>
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
          <Route path="faq" element={<Faq />}></Route>
          
          <Route path="terms" element={<Terms />}></Route>
          <Route path="privacy" element={<Privacy />}></Route>
        </Routes>
        </Suspense>
      </Router>
    </>
  )
}

export default App
