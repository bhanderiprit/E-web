function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 ">
      <div className="max-w-6xl mx-auto">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        <p className="text-sm mt-1">Made with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  )
}

export default Footer
