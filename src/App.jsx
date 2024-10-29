import Customer from './sections/Customer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Signup from './sections/Signup'
import Banner from './sections/Banner'
import Services from './sections/Services'
import Footer from './sections/Footer'

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
