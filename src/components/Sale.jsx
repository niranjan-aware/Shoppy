import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const Sale = () => {
  const slides = [
    {
      imageUrl: "https://source.unsplash.com/hanged-jeans-lot-quddu_dZKkQ",
      content: {
        title: "Women",
        description: "Curve-hugging denim, your style's new best friend.",
      },
    },
    {
      imageUrl:
        "https://source.unsplash.com/two-boys-laying-on-blue-textile-r_Tnjj6TB30",
      content: {
        title: "Kids",
        description: "Adorable outfits for little trendsetters. Playful meets stylish!",
      },
    },
    {
      imageUrl:
        "https://source.unsplash.com/a-group-of-women-standing-next-to-each-other-holding-dumbs-r0NIJzlF3_s",
      content: {
        title: "Activewear",
        description: "Power up your workouts with fashion-forward activewear. Be fierce!",
      },
    },
    {
      imageUrl:
        "https://source.unsplash.com/little-boy-giving-candied-kiwi-slice-to-little-sister-at-chinese-new-year-celebration-yeIQE7O1YxA",
      content: {
        title: "Traditional",
        description: "Timeless elegance for cultural celebrations. Embrace tradition in style.",
      },
    },
    {
      imageUrl:
        "https://source.unsplash.com/black-corded-headphones-near-eyeglasses-tCICLJ5ktBE",
      content: {
        title: "Men's Accessories",
        description: "Elevate your look with sleek accessories. Style redefined, confidence amplified.",
      },
    },
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
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 pt-40 relative group">
      <div className="flex w-full h-full sm:flex-col ">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].imageUrl})` }}
          className="w-4/5 h-[500px] sm:w-full  bg-center bg-cover duration-500 rounded-l-2xl"
        ></div>
        <div className="w-1/5 h-[500px] sm:h-[100px] sm:flex-row sm:w-full  bg-cyan-50 rounded-r-2xl p-8 flex flex-col justify-evenly items-center sm:justify-between">
          <a href="#">
            <h5 className="mb-2 sm:text-lg text-2xl font-bold tracking-tight text-gray-900">
              {slides[currentIndex].content.title}
            </h5>
          </a>
          <p className="mb-3 font-normal sm:text-[10px] text-gray-700 dark:text-gray-400">
            {slides[currentIndex].content.description}
          </p>
          <a
            href="#"
            className="inline-flex items-center sm:text-[14px] px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Explore
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
      {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}
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

export default Sale;
