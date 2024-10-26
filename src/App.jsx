import './App.css'
import Customer from './components/Customer'
import Header from './components/Header'
import Hero from './components/Hero'
import Signup from './components/Signup'

function App() {

  return (
    <main className='max-w-7xl mx-auto'>
      <Header />
      <Hero />
      <Signup />
      <Customer />
    </main>
  )
}

export default App
