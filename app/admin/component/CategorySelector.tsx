//  "use client";
// import { MenuItem, Select } from "@mui/material";
// import { useEffect, useState } from "react";

// interface Props {
//   chosenCategory: string;
// }

// function CategorySelector({ chosenCategory }: Props) {
//   const [category, setCategory] = useState(chosenCategory);

//   useEffect(() => {
//     setCategory(chosenCategory);
//   }, [chosenCategory]);

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   return (
//     <>
//       <Select
//         fullWidth
//         label="Category"
//         value={chosenCategory}
//         sx={{ width: "100%", marginBottom: "20px" }}
//         onChange={handleCategoryChange}
//       >
//         <MenuItem value="">Välj en kategori</MenuItem>
//         <MenuItem value="Rea">Rea</MenuItem>
//         <MenuItem value="Nyheter">Nyheter</MenuItem>
//         <MenuItem value="Badleksaker">Badleksaker</MenuItem>
//         <MenuItem value="Handdukar">Handdukar</MenuItem>
//       </Select>
//     </>
//   );
// }

// export default CategorySelector;
