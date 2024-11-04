import React from 'react'
import CarouselComponent from './components/CarouselComponent'
import Navbar from './components/Navbar'
import CollectionGrid from './components/CollectionGrid'
import CollectionComponent from './components/CollectionComponent'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <CarouselComponent/>
      <CollectionGrid/>
      <CollectionComponent/>

      <img className='mt-20' src='https://www.mohanlalsons.com/cdn/shop/files/Web_Banner_Desktop_1512x553_4a17d035-f12c-4d26-a1d9-cf1846a8945d_3350x.jpg?v=1701099378' alt='s' />

      <Footer/>
    </div>
  )
}

export default App