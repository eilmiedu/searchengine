// import { useState, useEffect } from "react";
// import { useNavigate } from "@remix-run/react";

// export default function MainLayout() {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState("AI");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [suggestions, setSuggestions] = useState([]);
  
//   const navigate = useNavigate();
  
//   const categories = ["AI", "Web", "Images", "Videos", "News", "Maps"];
  
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setShowSuggestions(false);
//       return;
//     }
    
//     const mockSuggestions = [
//       `${searchQuery} meaning`,
//       `${searchQuery} definition`,
//       `${searchQuery} wikipedia`,
//       `${searchQuery} news`,
//       `${searchQuery} near me`,
//     ];
    
//     setSuggestions(mockSuggestions);
//     setShowSuggestions(true);
//   }, [searchQuery]);
  
//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };
  
//   const selectCategory = (category) => {
//     setSelectedCategory(category);
//     setShowDropdown(false);
//   };
  
//   const handleInputChange = (e) => {
//     setSearchQuery(e.target.value);
//   };
  
//   const handleSuggestionClick = (suggestion) => {
//     navigate(`/search?q=${encodeURIComponent(suggestion)}&category=${selectedCategory}`);
//   };
  
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchQuery)}&category=${selectedCategory}`);
//     }
//   };
  
//   const handleClickOutside = () => {
//     setShowSuggestions(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center mt-16 px-4 sm:px-6">
//       <div className="flex items-center mb-6">
//         <div className="mr-4">
//           <div className="h-12 w-12 bg-red-700 rounded-full flex items-center justify-center">
//             <span className="text-black text-lg">🔍</span>
//           </div>
//         </div>
//         <h1 className="text-3xl sm:text-4xl font-bold">
//           <span className="text-red-700">Mela</span>
//           <span className="text-amber-800">Search</span>
//         </h1>
//       </div>

//       <div className="w-full max-w-2xl">
//         <form onSubmit={handleSearch}>
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 flex items-center pl-3">
//               <button 
//                 type="button"
//                 className="p-1 text-black border border-gray-300 rounded-md bg-white flex items-center"
//                 onClick={toggleDropdown}
//               >
//                 {selectedCategory} ▼
//               </button>
              
//               {showDropdown && (
//                 <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-20">
//                   {categories.map((category) => (
//                     <button
//                       type="button"
//                       key={category}
//                       className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
//                       onClick={() => selectCategory(category)}
//                     >
//                       {category}
//                     </button>
//                   ))}
//                 </div>
//               )}
//             </div>
            
//             <input
//               type="text"
//               className="w-full p-4 pl-20 md:pl-24 text-sm text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
//               placeholder="Search here..."
//               value={searchQuery}
//               onChange={handleInputChange}
//               onFocus={() => searchQuery.trim() !== "" && setShowSuggestions(true)}
//               onBlur={() => setTimeout(handleClickOutside, 200)}
//             />
            
//             <button
//               type="submit"
//               className="absolute right-2.5 bottom-2.5 text-black p-2"
//             >
//               <span className="w-4 h-4">🔍</span>
//             </button>
            
//             <button
//               type="button"
//               className="absolute right-10 bottom-2.5 text-black p-2"
//             >
//               <span className="w-4 h-4">🎤</span>
//             </button>
            
//             {showSuggestions && suggestions.length > 0 && (
//               <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
//                 {suggestions.map((suggestion, index) => (
//                   <div
//                     key={index}
//                     className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
//                     onMouseDown={() => handleSuggestionClick(suggestion)}
//                   >
//                     <span className="text-black mr-2">🔍</span>
//                     <span className="text-sm">{suggestion}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </form>
//       </div>

//       <div className="mt-6 flex flex-wrap gap-4 justify-center">
//         <span className="text-sm text-black">Language:</span>
//         {["हिंदी", "বাংলা", "اردو", "मराठी", "తెలుగు", "தமிழ்", "ಕನ್ನಡ", "ગુજરાતી", "ಕನ್ನಡ"].map((lang, index) => (
//           <button key={index} className="text-sm text-black hover:text-black">
//             {lang}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useNavigate } from "@remix-run/react";

export default function MainLayout() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("AI");
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  
  const navigate = useNavigate();
  
  const categories = ["AI", "Web", "Images", "Videos", "News", "Maps"];
  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setShowSuggestions(false);
      return;
    }
    
    const mockSuggestions = [
      `${searchQuery} meaning`,
      `${searchQuery} definition`,
      `${searchQuery} wikipedia`,
      `${searchQuery} news`,
      `${searchQuery} near me`,
    ];
    
    setSuggestions(mockSuggestions);
    setShowSuggestions(true);
  }, [searchQuery]);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  
  const selectCategory = (category) => {
    setSelectedCategory(category);
    setShowDropdown(false);
  };
  
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSuggestionClick = (suggestion) => {
    navigate(`/search?q=${encodeURIComponent(suggestion)}&category=${selectedCategory}`);
  };
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}&category=${selectedCategory}`);
    }
  };
  
  const handleClickOutside = () => {
    setShowSuggestions(false);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-16 px-4 sm:px-6">
      <div className="flex items-center mb-6">
        <div className="mr-4">
          <div className="h-12 w-12 bg-red-700 rounded-full flex items-center justify-center">
            <span className="text-black text-lg">🔍</span>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="text-red-700">Mela</span>
          <span className="text-amber-800">Search</span>
        </h1>
      </div>

      <div className="w-full max-w-2xl">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <button 
                type="button"
                className="p-1 text-black border border-gray-300 rounded-md bg-white flex items-center"
                onClick={toggleDropdown}
              >
                <span className="truncate max-w-16">{selectedCategory}</span> ▼
              </button>
              
              {showDropdown && (
                <div className="absolute top-full left-0 mt-1 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-20">
                  {categories.map((category) => (
                    <button
                      type="button"
                      key={category}
                      className="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"
                      onClick={() => selectCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <input
              type="text"
              className="w-full p-4 pl-20 md:pl-24 text-sm text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
              placeholder="Search here..."
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => searchQuery.trim() !== "" && setShowSuggestions(true)}
              onBlur={() => setTimeout(handleClickOutside, 200)}
            />
            
            <div className="absolute right-2.5 bottom-2.5 flex">
              <button
                type="button"
                className="text-black p-2 mr-1"
              >
                <span className="w-4 h-4">🎤</span>
              </button>
              <button
                type="submit"
                className="text-black p-2"
              >
                <span className="w-4 h-4">🔍</span>
              </button>
            </div>
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                {suggestions.map((suggestion, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                    onMouseDown={() => handleSuggestionClick(suggestion)}
                  >
                    <span className="text-black mr-2">🔍</span>
                    <span className="text-sm">{suggestion}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <span className="text-sm text-black">Language:</span>
        <div className="flex flex-wrap gap-4 justify-center">
          {["हिंदी", "বাংলা", "اردو", "मराठी", "తెలుగు", "தமிழ்", "ಕನ್ನಡ", "ગુજરાતી"].map((lang, index) => (
            <button key={index} className="text-sm text-black hover:text-black">
              {lang}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}