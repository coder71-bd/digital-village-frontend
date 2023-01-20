import React from 'react';

const MedicineCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Medecine',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Medicine_Drugs.svg/2560px-Medicine_Drugs.svg.png',
    },
    {
      id: 2,
      name: 'Blood Pressure',
      img: 'https://www.nhlbi.nih.gov/sites/default/files/styles/component_basic_card_image_style_3_2/public/2021-03/shutterstock_684294988.jpg?itok=vBAeRuFI',
    },
    {
      id: 3,
      name: 'Hand Senitizer',
      img: 'https://media.allure.com/photos/60873f9fffbcd5044c1c088d/1:1/w_1200,h_1200,c_limit/Purell%20Advanced%20Hand%20Sanitizer%20Refreshing%20Gel.jpg',
    },
    {
      id: 3,
      name: 'Sergical Mask',
      img: 'https://www.pngmart.com/files/21/Face-Mask-Download-PNG-Image.png',
    },
  ];
  return (
    <div className="grid md:grid-cols-4 gap-6">
      {categories.map((categorie) => (
        <div
          key={categorie.id}
          className="flex items-center shadow-md p-4 rounded-lg"
        >
          <h6>{categorie.name}</h6>
          <img className="w-3/6" src={categorie.img} alt="" />
        </div>
      ))}
    </div>
  );
};

export default MedicineCategories;
