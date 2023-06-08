import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HeroSection() {
  const products = [
    {
      id: 1,
      name: '50" QLED 4K Smart Google TV - Q98J',
      price: 400,
      image: 'https://assets.kogan.com/images/product/KAQLED50XQ98JSTA/KAQLED50XQ98JSTA_1.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753',
    },
    {
      id: 2,
      name: 'Hoka One One Mens Gaviota 3 Running Shoes ',
      price: 79,
      image: 'https://assets.kogan.com/files/external/2022-Footwear-Hero-Update/HOK-1113520-BBLC-8_1.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 20,
      image: 'https://assets.kogan.com/images/kg-electronic/KXG-TMED15SR_3PK/1-bcd0d22de4-tmed15sr_3pk.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753',
    },
    {
        id: 4,
        name: 'Product 3',
        price: 50,
        image: 'https://assets.kogan.com/files/external/2022-Oct-Hero-Update/KAAP2WTCRDA_new_hero.jpg?auto=webp&bg-color=fff&canvas=1200%2C800&fit=bounds&height=800&quality=75&width=1200',
      },
      {
        id: 5,
        name: '1000 Chip Casino Quality Poker Set',
        price: 64.99,
        image: 'https://assets.kogan.com/files/product/2021/NB1000PKRST/NB1000PKRST_2.jpg?auto=webp&bg-color=fff&canvas=1200%2C800&fit=bounds&height=800&quality=75&width=1200',
      },
      {
        id: 6,
        name: 'Product 3',
        price: 20,
        image: 'https://assets.kogan.com/images/kg-electronic/KXG-TMED15SR_3PK/1-bcd0d22de4-tmed15sr_3pk.jpg?auto=webp&bg-color=fff&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753',
      },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl text-gray-800 font-bold mb-8">Featured Products</h2>
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded shadow">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h3 className="text-xl text-black font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button className="bg-blue-500 text-white py-2 px-4 mt-4 rounded hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default HeroSection;
