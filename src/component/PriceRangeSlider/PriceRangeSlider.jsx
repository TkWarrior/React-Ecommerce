import React from 'react'

function PriceRangeSlider({priceRange,setpriceRange}) {
    const handleMinChange = (e) => {
      const min = Number(+e.target.value);
      if (min <= priceRange[1]) {
        setpriceRange([min, priceRange[1]]);
      }
    };
    const handleMaxChange = (e) => {
      const max = Number(+e.target.value);
      if (max >= priceRange[0]) {
        setpriceRange([priceRange[0], max]);
      }
    };
  return (
    <div>
      <div className="text-sm text-gray-600 mb-1">
        ₹{priceRange[0]} - ₹{priceRange[1]}
      </div>
      <input
        type="range"
        onChange={handleMinChange}
        min={1}
        max={100000}
        value={priceRange[0]}
      />
      <input
        type="range"
        onChange={handleMaxChange}
        min={1}
        max={100000}
        value={priceRange[1]}
      />
    </div>
  );
}

export default PriceRangeSlider