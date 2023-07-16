import { useState } from 'react'
import Nav from './components/Nav'
import Page from './components/Page'

function App() {

  const [currentPage, setPage] = useState('Home')
  const allPages = ['Home', 'About', 'Contact']

  return (
    <>
      <Nav setPage={setPage} allPages={allPages}/>

      <Page currentPage={currentPage}/>
    </>
  )
}
export default App
