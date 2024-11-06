import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <section className="bg-black py-6 sm:py-10">
      <div id="projects" className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-6 sm:mb-8">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Burger Website Project */}
          <div
            className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center h-full"
            data-aos="zoom-in-up"
          >
            <Image
              src="/Burger website.jpeg"
              alt="Burger website"
              width={250} 
              height={120} 
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Burger Website</h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              Order your favorite gourmet burgers online with a wide selection of delicious options and fast delivery.
            </p>
            <Link href="https://next-js-burger-website.vercel.app/">
              <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200 text-sm">
                View Project
              </button>
            </Link>
          </div>

          {/* Calculator Project */}
          <div
            className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center h-full"
            data-aos="zoom-in-up"
          >
            <Image
              src="/simple calculator.jpg"
              alt="Calculator Project"
              width={300}  
              height={200}  
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Calculator Project</h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              A dynamic calculator app that performs basic arithmetic operations with a sleek UI, designed for accuracy and ease of use.
            </p>
            <Link href="https://github.com/AreebaNadeem567/project00_calculator.git">
              <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200 text-sm">
                View Project
              </button>
            </Link>
          </div>

          {/* Student Registration Form Project */}
          <div
            className="bg-white p-3 rounded-lg shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center h-full"
            data-aos="zoom-in-up"
          >
            <Image
              src="/form.jpeg"
              alt="Student Registration Form Project"
              width={200}  
              height={150} 
              className="rounded-md mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-purple-600 mb-2">Student Registration Form</h3>
            <p className="text-gray-700 mb-4 text-sm leading-relaxed">
              A Student Registration Form typically collects personal details such as name, age, gender, contact information, educational background, and enrollment details for new students.
            </p>
            <Link href="https://simple-html-css-form.vercel.app/">
              <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-200 text-sm">
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;