import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import PersonForm from './components/PersonForm'
import PersonList from './components/PersonList'

function App () {
  return (
    <>
      <Header title='People App' id='header' />

      <PersonList id='personList' />

      <PersonForm id='personForm' />

      <Footer id='footer'>
        <p>Persons App by Leuri Alonso & Victor Irimies</p>
      </Footer>
    </>
  )
}

export default App
