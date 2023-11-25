import React from 'react';

const TeamMemberCard = () => {
  return (
    <ul class="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 dark:text-gray-100">
    <li>
      <div className="w-full flex flex-col border border-solid dark:border-gray-500 border-gray-300 border-opacity-20 rounded-md relative group shadow">
        <div className="absolute inset-0 rounded-md flex justify-end p-2">
          {/* MEMBER DETAILS */}
          <div className="px-5 py-3 w-full h-fit mt-auto bg-gray-50 dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-90 backdrop-blur-sm rounded-md group-hover:opacity-0 group-hover:scale-0 transition-all duration-500">
            {/* MEMBER NAME */}
            <h3 className="text-2xl font-bold line-clamp-1">Jordan Anderson</h3>
            {/* MEMBER DESIGNATION */}
            <p className="line-clamp-2 dark:text-gray-400 text-gray-800 font-medium">
              Project Manager
            </p>
          </div>
          {/* MEMBER DETAILS */}

          {/* HOVER DETAILS */}
          <div className="px-8 py-3 bg-gray-50 dark:bg-gray-900 bg-opacity-80 dark:bg-opacity-90 backdrop-blur-sm rounded-md flex flex-col justify-center text-center absolute inset-1 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            {/* MEMBER NAME */}
            <h3 className="text-3xl font-semibold">Jordan Anderson</h3>
            {/* MEMBER DESIGNATION */}
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-2">
              Project Manager
            </p>
            {/* MEMBER SHORT BIO */}
            <p className="dark:text-gray-400 text-gray-800 line-clamp-3 text-lg">
              Drives success through leadership, organization, and strategic
              planning.
            </p>

            {/* SOCIAL ICONS */}
            <ul className="flex items-center justify-center gap-5 text-2xl text-gray-600 dark:text-gray-100 mt-5">
              {/* FACEBOOK */}
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="block hover:text-gray-800 dark:hover:text-gray-300 hover:-translate-y-1 hover:scale-105 transition-all duration-500"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              {/* LINKEDIN */}
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  className="block hover:text-gray-800 dark:hover:text-gray-300 hover:-translate-y-1 hover:scale-105 transition-all duration-500"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              {/* GITHUB */}
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  className="block hover:text-gray-800 dark:hover:text-gray-300 hover:-translate-y-1 hover:scale-105 transition-all duration-500"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              {/* TWITTER */}
              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="block hover:text-gray-800 dark:hover:text-gray-300 hover:-translate-y-1 hover:scale-105 transition-all duration-500"
                >
                  <i className="fa-brands fa-square-x-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
          {/* HOVER DETAILS */}
        </div>
        {/* IMAGE */}
        <img
          src="https://teamwizard-team-two.netlify.app/assets/images/member-1.jpg"
          alt="Member 1"
          className="w-full min-h-[400px] max-h-[400px] rounded-md object-cover object-top"
        />
        {/* IMAGE */}
      </div>
    </li>
    </ul>
  );
};

export default TeamMemberCard;
