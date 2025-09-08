import axios from "axios";
import { useState } from "react"
import Card from "../compo/Card";
import { data } from "react-router-dom";

// src/Pages/Home.jsx
function Home({ addvalue, decricvalue, items }) {
    const [showButtonY, setShowButtonY] = useState(false);
    const [ButtonYclick, setButtonYclick] = useState(false);


    const [Data, setData] = useState([])

    async function getdata(elm) {
        const items = await axios.get('https://picsum.photos/v2/list?page=2&limit=10')

        setData(items.data)
        setShowButtonY(true)

        // console.log(items.data);


    }

    function lessdata() {
        setData([])
        setShowButtonY(false);
    }








    return (

        <div className="text-white bg-gray-900 min-h-screen px-4 py-10">


            {/* Hero Section */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                    Welcome to <span className="text-yellow-400">My Website</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-8">
                    Discover our amazing products and enjoy premium quality at affordable prices.
                </p>
                <div className="flex justify-center gap-4">
                    <a
                        href="/about"
                        className="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
                    >
                        Learn More
                    </a>
                    <a
                        href="/contact"
                        className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-gray-900 transition"
                    >
                        Contact Us
                    </a>
                    <button
                        onClick={getdata}

                        className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95 hover:shadow-xl "
                    >
                        Show More Option
                    </button>
                </div>
            </div>

            {/* Cards Section */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">{item.title}</h2>
                            <div className="flex">
                                <p className="text-yellow-400 font-bold mt-2">${item.price}</p>
                                <div className="ml-30">
                                    <button onClick={() => addvalue(item)} className="p-2">+</button>
                                    <button onClick={() => decricvalue(item)} className="p-2">-</button>
                                </div>

                            </div>


                        </div>
                    </div>
                ))}
            </div>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

                {

                    Data.map((prop) => (


                        <Card img={prop.download_url} author={prop.author} id={prop.id} />





                    ))

                }
                <div>
                    {showButtonY ? (
                        <button
                            onClick={lessdata}
                            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
                        >
                            Less Option
                        </button>
                    ) : ButtonYclick ? (
                        null
                    ) : (
                        null
                    )}



                </div>

            </div>

        </div>
    )
}

export default Home
