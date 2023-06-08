import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <div className='bg-zinc-800 dark:bg-zinc-800 text-stone-900 dark:text-stone-300 min-h-screen font-inter max-w-5xl w-11/12 mx-auto'>
      <Navbar />
      <Intro />
      <Work />
      {/*<Contact />
      <Footer /> */}
    </div>
  )
}

export default App
