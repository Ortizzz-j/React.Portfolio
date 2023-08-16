import { useState } from 'react'
import Nav from './components/Nav'
import Page from './components/Page'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './app.scss'


function App() {

  const [currentPage, setPage] = useState('About')
  const allPages = ['About', 'Resume', 'Portfolio']

  return (
    <div>
      <Nav setPage={setPage} allPages={allPages}/>

      <Page currentPage={currentPage}/>

      <Footer />
    </div>
  )
}
export default App
