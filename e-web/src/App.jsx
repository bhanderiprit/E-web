import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
// import { Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'; // ✅   
import Contact from './Pages/Contact'
import Header from './compo/Header'
import Footer from './compo/Footer'
import { Cartbtn } from './Pages/Cartbtn';

function App() {

  const items = [
    {
      id: 1,
      title: 'Product 1',
      price: 29.99,
      image: 'https://picsum.photos/id/1015/400/300'
    },
    {
      id: 2,
      title: 'Product 2',
      price: 49.99,
      image: 'https://picsum.photos/id/1016/400/300'
    },
    {
      id: 3,
      title: 'Product 3',
      price: 19.99,
      image: 'https://picsum.photos/id/1018/400/300'
    },
    {
      id: 4,
      title: 'Product 4',
      price: 39.99,
      image: 'https://picsum.photos/id/1020/400/300'
    }
  ]

  const [cart, setcart] = useState(0)
  const [total, settotal] = useState(0)
  const [titel, settitel] = useState([])
  const [img, setimg] = useState([])

  function addvalue(product) {
    setcart(cart + 1)
    settotal(total + product.price)
    settitel([...titel, product.title]);
    setimg([...img, product.image]);


  }
  function decricvalue(product) {
    if (cart > 0) {
      setcart(cart - 1)
      if (total > 0) {

        settotal(total - product.price)

      }

      const indexTitle = titel.indexOf(product.title)
      if (indexTitle !== -1) {
        const newTitles = [...titel]
        newTitles.splice(indexTitle, 1)
        settitel(newTitles)
      }

      const indexImg = img.indexOf(product.image)
      if (indexImg !== -1) {
        const newImgs = [...img]
        newImgs.splice(indexImg, 1)
        setimg(newImgs)
      }




    }
  }

  return (
    <>


      <Header cart={cart} total={total} titel={titel} />

      <Routes>
        <Route path='/' element={<Home cart={cart} addvalue={addvalue} decricvalue={decricvalue} items={items} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cartbtn' element={<Cartbtn items={items} total={total} titel={titel} img={img} />} />



      </Routes>
      <Footer />

    </>
  )
}

export default App
