import React from "react";

const Categories = () => {
  const slides = [
    {
      imageUrl:
        "https://source.unsplash.com/woman-in-purple-and-white-floral-dress-standing-on-gray-concrete-floor-gBx9kN4okXI",
      content: {
        title: "Ethnic Wear",
        description: "Heavy discount",
      },
    },
    {
      imageUrl:
      "https://source.unsplash.com/man-wearing-brown-and-black-leopard-print-button-up-t-shirt-and-black-sunglasses-crossing-hands-down-while-looking-up-vKnRYW-mtek",
      content: {
        title: "WFh Casual Wear",
        description: "Very-Heavy discount",
      },
    },
    {
        imageUrl:
          "https://source.unsplash.com/man-in-black-jacket-and-red-pants-standing-on-wooden-stairs-24f5AtB5DAA",
        content: {
          title: "Active Wear",
          description: "Heavy discount",
        },
      },
      {
        imageUrl:
          "https://source.unsplash.com/woman-in-white-and-red-floral-sleeveless-dress-7qLpBK2KDo0",
        content: {
          title: "Western Wear",
          description: "Heavy discount",
        },
      },
      
      {
        imageUrl:
        "https://source.unsplash.com/man-standing-while-looking-side-view-Hng0RpHDgHI",
        content: {
          title: "Western Wear",
          description: "Very-Heavy discount",
        },
      },
      {
        imageUrl:
          "https://source.unsplash.com/woman-in-pink-sports-bra-and-pink-leggings-Z72YujnOrlY",
        content: {
          title: "Sports Wear",
          description: "Heavy discount",
        },
      },
      {
        imageUrl:
        "https://source.unsplash.com/man-in-gray-suit-jacket-duInQjGwE5Q",
        content: {
          title: "Office Wear",
          description: "Very-Heavy discount",
        },
      },
      {
        imageUrl:
        "https://source.unsplash.com/person-wearing-silver-link-bracelet-round-analog-watch-qS3sqPT1T9s",
        content: {
          title: "Watches",
          description: "Very-Heavy discount",
        },
      },
      {
        imageUrl:
          "https://source.unsplash.com/black-hair-brush-beside-brown-powder-in-clear-glass-jar-V3NNg858vkA",
        content: {
          title: "Men Grooming",
          description: "Heavy discount",
        },
      },
      {
        imageUrl:
        "https://source.unsplash.com/close-up-photography-of-assorted-cosmetics-FoeIOgztCXo",
        content: {
          title: "Beauty & Makeup",
          description: "Very-Heavy discount",
        },
      },
      {
        imageUrl:
          "https://source.unsplash.com/matching-pair-of-boys-black-and-gray-floral-collared-shirt-and-shorts-standing-on-gray-concrete-area-PWcJ9t7Ne_Q",
        content: {
          title: "Kids",
          description: "Heavy discount",
        },
      },
      {
        imageUrl:
        "https://source.unsplash.com/a-pair-of-brown-shoes-sitting-on-top-of-a-white-sheet-Y8_JIgWPxDg",
        content: {
          title: "Footwear",
          description: "Very-Heavy discount",
        },
      },
      {
        imageUrl:
        "https://source.unsplash.com/a-display-case-filled-with-lots-of-different-colored-shoes-1_jvoCh__ec",
        content: {
          title: "Footwear",
          description: "Very-Heavy discount",
        },
      },
      
      {
        imageUrl:
        "https://source.unsplash.com/coffee-table-with-basket-beside-sofa-m7r1BVoWTAk",
        content: {
          title: "Home & Decor",
          description: "Very-Heavy discount",
        },
      },
      
      {
        imageUrl:
        "https://source.unsplash.com/woman-in-green-gold-and-red-sari-dress-hiding-her-right-eye-while-smiling-y9HsMX3-mUY",
        content: {
          title: "Jewellery",
          description: "Very-Heavy discount",
        },
      },
      {
        imageUrl:
        "https://source.unsplash.com/black-sony-headphones-hung-on-stand-near-apple-magic-keyboard-and-mouse-dJt4lxWy5nk",
        content: {
          title: "Headphones",
          description: "Very-Heavy discount",
        },
      },
      {
        imageUrl:
        "https://source.unsplash.com/a-bunch-of-shoes-hanging-up-on-a-wall-lqVutqIhOvg",
        content: {
          title: "Flip-Flops",
          description: "Very-Heavy discount",
        },
      },
      {
        imageUrl:
        "https://source.unsplash.com/a-man-walking-down-a-walkway-with-a-suitcase-CSZNjQj59Co",
        content: {
          title: "bags & TRolleys",
          description: "Very-Heavy discount",
        },
      },
      

      
  ];
  return (
    <div className="grid grid-cols-6 gap-5 p-5  ">
    {slides.map((item, index) => (
      <div key={index} className="relative " >
        <div className="max-w-56  bg-white border border-gray-200 rounded-lg shadow "  >
          <a href="#">
            <img
              className="rounded-t-lg h-[350px] md:h-[250px] lg:h-[300px] sm:h-[150px]"
              src={item.imageUrl}
              alt=""
            />
          </a>

          <div className=" max-w-56 max-h-28 p-5 absolute bottom-0 left-0 right-0 ">
            <a href="#">
              <h5 className="mb-1 sm:text-xs sm:font-light text-2xl font-bold tracking-tight text-white">
                {item.content.title}
              </h5>
            </a>
            {/* <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-300 rounded-lg hover:bg-slate-300 focus:ring-4 focus:outline-none focus:ring-slate-300 dark:bg-slate-300 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
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
      </div>
    ))}
  </div>
  );
};

export default Categories;
