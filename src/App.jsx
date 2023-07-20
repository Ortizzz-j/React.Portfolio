import { useState } from 'react'
import Nav from './components/Nav'
import Page from './components/Page'
import * as bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';


function App() {

  const [currentPage, setPage] = useState('About')
  const allPages = ['About', 'Resume', 'Contact', 'Portfolio']

  return (
    <div>
      <Nav setPage={setPage} allPages={allPages}/>

      <Page currentPage={currentPage}/>

      <Footer />
    </div>
  )
}
export default App
