import { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './utils/Layout';
import { Servico, HomePage,  Contato, Error } from './pages/index'
import ScrollToTop from './hooks/useScrollToTop';
import AboutPartners from './pages/About/About_Partners';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/Serviços" element={
          <Layout>
            <Servico />
          </Layout>
        } />
         <Route path="/about_partners" element={
          <Layout>
            <AboutPartners />
          </Layout>
        } />
        <Route path="/contato" element={
          <Layout>
            <Contato />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <Error />
          </Layout>
        } />
      </Routes>
    </Router>
  )
}

export default App