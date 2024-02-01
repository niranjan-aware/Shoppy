import React from 'react';

const Men = () => {
    return (
        <div className="relative group">
        <div className="relative inline-block text-left  ">
          <div className="flex justify-center items-center h-16">
            <button
              type="button"
              className="inline-flex w-full justify-center gap-x-1.5  px-4 py-2 text-sm font-semibold text-gray-900 "
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              MEN
            </button>
          </div>

          <div
            className="hidden group-hover:block absolute -right-20 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition duration-1000"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                T-Shirts
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Shirts
              </a>
              <a
                href="#"
                className="text-gray-700 block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                Jeans
              </a>
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="text-gray-700 block w-full px-4 py-2 text-left text-sm"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  Accessories
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Men;
