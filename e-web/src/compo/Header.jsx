// src/components/Header.jsx
import { Link } from 'react-router-dom'
import CartButton from './CartButton'

function Header({ cart, total }) {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Website</h1>
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
          </li>
          <li>
            <Link to="/cartbtn" className="hover:text-yellow-300 transition">
              <CartButton cart={cart} />
            </Link>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header
