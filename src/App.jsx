import Customer from './components/Customer'
import Header from './components/Header'
import Hero from './components/Hero'
import Signup from './components/Signup'
import Banner from './components/Banner'
import Services from './components/Services'
import Footer from './components/Footer'

function App() {

  return (
    <main className='max-w-7xl mx-auto'>
      <Header />
      <Hero />
      <Signup />
      <Customer />
      <Banner />
      <Services />
      <Footer />
    </main>
  )
}

export default App
