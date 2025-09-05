import React, { useState } from 'react'

const allBrands = [
  { id: 1, brand: 'nike' },
  { id: 2, brand: 'puma' },
  { id: 3, brand: 'addida' },
  { id: 4, brand: 'fila' },
  { id: 5, brand: 'jockey' },
]

function AddToCart() {
  const [selectedBrand, setSelectedBrand] = useState([])

  const handleAddToCart = (id) => {
    const selectedItems = allBrands.find((items) => items.id === id)
    setSelectedBrand([...selectedBrand, selectedItems])
  }

  const onRemoveClick = (id) => {
    const filteredBrands = selectedBrand.filter((item) => item.id !== id)
    setSelectedBrand(filteredBrands)
  }

  return (
    <>
      <br /> <br /> <br />
      {allBrands.map((b) => (
        <div>
          <span>{b.brand}</span>
          <button onClick={() => handleAddToCart(b.id)}>Add To Cart</button>
        </div>
      ))}
      {selectedBrand &&
        selectedBrand.map((brand) => (
          <p>
            {brand.brand}{' '}
            <button onClick={() => onRemoveClick(brand.id)}>Remove</button>
          </p>
        ))}
    </>
  )
}

export default AddToCart

// import React, { useState } from 'react'

// const allBrands = [
//   { id: 1, brand: 'nike' },
//   { id: 2, brand: 'puma' },
//   { id: 3, brand: 'addida' },
//   { id: 4, brand: 'fila' },
//   { id: 5, brand: 'jockey' },
// ]

// function AddToCart() {
//   const [selectedBrand, setSelectedBrand] = useState([])

//   const handleAddToCart = (id) => {
//     const selectedItem = allBrands.find((item) => item.id === id)

//     setSelectedBrand((prev) => {
//       // Check if brand is already in cart
//       const existing = prev.find((item) => item.id === id)

//       if (existing) {
//         // Increment quantity if already added
//         return prev.map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       } else {
//         // Add new brand with quantity 1
//         return [...prev, { ...selectedItem, quantity: 1 }]
//       }
//     })
//   }

//   return (
//     <>
//       <br />
//       <br />
//       <br />
//       {allBrands.map((b) => (
//         <div key={b.id}>
//           <span>{b.brand}</span>
//           <button onClick={() => handleAddToCart(b.id)}>Add To Cart</button>
//         </div>
//       ))}

//       <br />
//       <h3>Selected Brands:</h3>
//       {selectedBrand.map((brand) => (
//         <p key={brand.id}>
//           {brand.brand} is: {brand.quantity}
//         </p>
//       ))}
//     </>
//   )
// }

// export default AddToCart
