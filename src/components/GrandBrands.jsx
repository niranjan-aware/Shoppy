
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const GrandBrands = () => {
  const slides = [
    [
      {
        imageUrl1:
        "https://source.unsplash.com/blue-and-pink-nike-shoe-jAiWK3STk4M",
        title: "Nike Shoes",
      },
      {
        imageUrl2: "https://source.unsplash.com/black-framed-sunglasses-on-brown-leather-bag-BItOCAqPuUU",
        title: "Gucci Glasses",
      },
      {
        imageUrl3:
        "https://source.unsplash.com/brown-leather-wallet-on-white-textile-2B-zwo_nq7k",
        title: "Louis-Vuitton Bags",
      },
      {
        imageUrl4:
        "https://source.unsplash.com/white-and-black-calvin-klein-perfume-bottle-mfvTtNPjoPY",
        title: "Calvin-Klein Perfumes",
      },
    ],
    [
      {
        imageUrl1:
        "https://source.unsplash.com/black-gucci-leather-shoulder-bag-ZmeFtu11Hpc",
        title: "Gucci Bags",
      },
      {
        imageUrl2:
        "https://source.unsplash.com/blue-and-white-nike-athletic-shoes-2kCv5ZSxTzo",
        title: "Puma Sneakers",
      },
      {
        imageUrl3:
        "https://source.unsplash.com/person-in-white-jacket-with-hands-in-pocket-HPVRnFeplbQ",
        title: "adidas Jackets",
      },
      {
        imageUrl4:
        "https://source.unsplash.com/black-nikon-dslr-camera-on-white-textile-yCdsqWfxJOw",
        title: "Prada bags",
      },
    ],
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const autoSlide = () => {
    nextSlide();
  };

  useEffect(() => {
    const interval = setInterval(autoSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="max-w-[1400px] max-h-[500px] w-full m-auto  relative group overflow-x-hidden" >
      <div className="flex flex-row justify-evenly overflow-hidden ">
        {slides[currentIndex].map((item, itemIndex) => (
          <div
            key={itemIndex}
            className="max-w-80 lg:max-w-[250px] sm:max-w-[100px] sm:max-h-[200px] md:max-w-[200px] max-h-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-100"
          >
            <a href="#">
              <img
                className="rounded-t-lg h-[250px] max-w-80 md:max-w-[200px] lg:max-w-[250px] sm:max-h-[130px] sm:max-w-[100px]"
                src={item[`imageUrl${itemIndex + 1}`]}
                alt=""
              />
            </a>
            <div className="p-5  card-global-background card-container h-20 flex justify-center items-center">
              <a href="#">
                <h5 className="sm:text-sm text-2xl tracking-wide font-bold tracking-tight text-gray-900 dark:text-white  ">
                  {item.title}
                </h5>
              </a>
              {/* <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a> */}
            </div>
          </div>
        ))}
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              currentIndex === slideIndex ? "text-blue-500" : "text-gray-500"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrandBrands;



