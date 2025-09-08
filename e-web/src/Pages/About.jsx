import React from "react";
import { Helmet } from "react-helmet"; // Optional, only if you want page title

function About() {
  return (
    <>
      <Helmet>
        <title>About Us | My Website</title>
      </Helmet>

      <div className="text-white bg-gray-900 min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <section>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              About <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              We are passionate developers dedicated to creating beautiful and responsive web applications. Our mission is to deliver high-quality digital experiences that blend creativity, performance, and user satisfaction.
            </p>
          </section>

          <article className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Founded in 2025, our team started with a shared goal of building clean, functional, and visually appealing interfaces. From small prototypes to fully functional applications, we’ve grown into a team of enthusiastic developers focused on front-end design, user interaction, and API integration.
            </p>
          </article>

          <section className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Our Mission</h3>
              <p className="text-gray-300">
                To build efficient and elegant solutions that solve real-world problems with intuitive UI and scalable code.
              </p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">Our Values</h3>
              <ul className="text-gray-300 list-disc list-inside">
                <li>Clean Code</li>
                <li>User Experience First</li>
                <li>Continuous Learning</li>
                <li>Team Collaboration</li>
              </ul>
            </div>
          </section>

          {/* Back to Home button */}
          <div className="mt-12">
            <a
              href="/"
              className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
