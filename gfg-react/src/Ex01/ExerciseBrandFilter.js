import React, { useState } from 'react'

const brands = [
  { id: 1, brand: 'puma' },
  { id: 2, brand: 'addidas' },
  { id: 3, brand: 'reebok' },
  { id: 4, brand: 'nike' },
  { id: 5, brand: 'puma' },
]

function ExerciseBrandFilter() {
  const [selectedBrand, setSelectedBrand] = useState('')

  // Get list of brands to display, filtered if a brand is selected
  const filteredBrands = selectedBrand
    ? brands.filter((b) => b.brand === selectedBrand)
    : brands

  // Extract unique brand names for the dropdown
  const uniqueBrandNames = [...new Set(brands.map((b) => b.brand))]

  return (
    <div>
      <label>Choose a Brand:</label>
      <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
      >
        <option value="">All Brands</option>
        {uniqueBrandNames.map((brand) => (
          <option key={brand} value={brand}>
            {brand.charAt(0).toUpperCase() + brand.slice(1)}
          </option>
        ))}
      </select>
      <br />
      <br />
      <ul>
        {filteredBrands.map((b) => (
          <li key={b.id}>{b.brand}</li>
        ))}
      </ul>
    </div>
  )
}

export default ExerciseBrandFilter
