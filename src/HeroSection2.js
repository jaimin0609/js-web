import React from 'react';

function HeroSection2() {
  const products = [
    {
      id: 1,
      name: 'Arlo Stonewash Sheet Set Natural',
      price: 100,
      image: 'https://www.target.com.au/medias/static_content/product/images/full/42/78/A1574278.jpg?impolicy=product_portrait_hero',
    },
    {
      id: 2,
      name: 'Girls Denim Overall',
      price: 35,
      image: 'https://assets.target.com.au/transform/fa5934fc-bafc-43ac-9c45-2d63d04ace56/320_67865710_20-246790?io=transform:extend,width:700,height:800&output=jpeg&quality=80',
    },
    {
      id: 3,
      name: 'Star Wars Obi-Wan Kenobi vs. Darth Vader',
      price: 63.99,
      image: 'https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/30/654/5518/11/4/828392590_941700790/828392590_941700790_1_720x928.webp',
    },
    // Add more products here...
  ];

  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl text-black font-bold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-3 gap-4">
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
        </div>
      </div>
    </section>
  );
}

export default HeroSection2;
