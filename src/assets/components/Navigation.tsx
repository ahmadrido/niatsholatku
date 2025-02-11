import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DataGlobal } from '../utils/globalData';
import { highlightText } from '../utils/utils';

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const navigate = useNavigate();

  const filteredResults = DataGlobal.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (path : string) => {
    navigate(path);
    setSearchQuery('');
    setIsMenuOpen(false);
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLanguageOpen(false);
  };

  const toggleLanguage = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav className="text-white border-gray-200 bg-gray-900 shadow shadow-gray-500">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.png" className="h-8" alt="NiatSholatku 2025 Logo" />
          <span className="self-center md:text-2xl font-semibold whitespace-nowrap dark:text-white uppercase">
            NiatSholatku
          </span>
        </a>

        {/* Language Selector */}
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm rounded-lg cursor-pointer hover:bg-gray-600 text-gray-400"
          >
            <img
              className="w-5 h-5 rounded-full me-3"
              src="https://www.worldatlas.com/r/w1200-h701-c1200x701/upload/9f/69/0a/id-flag.jpg"
              alt="IND"
            />
            Indonesia
          </button>

          {/* Language Dropdown */}
          <div className={`absolute top-16 right-10 md:right-31 z-50 ${isLanguageOpen ? 'block' : 'hidden'} my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm`}>
            <ul className="py-2 font-medium">
              <li>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="inline-flex items-center">
                    <svg className="h-3.5 w-3.5 rounded-full me-2" xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-us" viewBox="0 0 512 512">
                      <g fillRule="evenodd"><g strokeWidth="1pt"><path fill="#bd3d44" d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/><path fill="#fff" d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z" transform="scale(3.9385)"/></g><path fill="#192f5d" d="M0 0h98.8v70H0z" transform="scale(3.9385)"/></g></svg>
                    English (US)
                  </div>
                </a>
              </li>
              {/* Add other language options similarly */}
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Search and Navigation Items */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1 md:mt-0 mt-3`}>
          <div className="flex md:order-2">
            <div className="relative w-full md:w-auto">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full md:w-96 p-2 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cari..."
                autoComplete="off"
              />

              {searchQuery && (
                <ul className="absolute z-10 text-black w-full md:w-96 mt-2 rounded-md shadow-lg max-h-60 overflow-y-auto bg-white">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleSelect(item.path)}
                        className="p-2 hover:bg-gray-200 cursor-pointer"
                        dangerouslySetInnerHTML={{ __html: highlightText(item.title, searchQuery) }}
                      />
                    ))
                  ) : (
                    <li className="p-2 text-gray-500">Tidak ada hasil ditemukan.</li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;