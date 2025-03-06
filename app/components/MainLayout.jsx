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
  
  // Mock suggestions based on input
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setShowSuggestions(false);
      return;
    }
    
    // Generate mock suggestions based on the search query
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
    // Navigate to search results page with the selected suggestion
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
    <div className="flex flex-col items-center justify-center mt-16 px-6">
      <div className="flex items-center mb-6">
        <div className="mr-4">
          <div className="h-12 w-12 bg-red-700 rounded-full flex items-center justify-center">
            <span className="text-black text-lg">🔍</span>
          </div>
        </div>
        <h1 className="text-4xl font-bold">
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
                {selectedCategory} ▼
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
              className="w-full p-4 pl-20 text-sm text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
              placeholder="Search here..."
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => searchQuery.trim() !== "" && setShowSuggestions(true)}
              onBlur={() => setTimeout(handleClickOutside, 200)}
            />
            
            <button
              type="submit"
              className="absolute right-2.5 bottom-2.5 text-black p-2"
            >
              <span className="w-4 h-4">🔍</span>
            </button>
            
            <button
              type="button"
              className="absolute right-10 bottom-2.5 text-black p-2"
            >
              <span className="w-4 h-4">🎤</span>
            </button>
            
            {/* Search suggestions dropdown */}
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
        {["हिंदी", "বাংলা", "اردو", "मराठी", "తెలుగు", "தமிழ்", "ಕನ್ನಡ", "ગુજરાતી", "ಕನ್ನಡ"].map((lang, index) => (
          <button key={index} className="text-sm text-black hover:text-black">
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}

// Create a basic search results page component
// You would place this in a separate file: app/routes/search.jsx
export function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = new URLSearchParams(window.location.search);
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'AI';
  
  // Mock search results
  const searchResults = [
    {
      title: `Result 1 for ${query}`,
      url: 'https://example.com/1',
      description: `This is the first search result for "${query}". It contains information related to your search query.`
    },
    {
      title: `Result 2 for ${query}`,
      url: 'https://example.com/2',
      description: `Another relevant result for "${query}". Click to learn more about this topic.`
    },
    {
      title: `Result 3 for ${query}`,
      url: 'https://example.com/3',
      description: `A third search result containing information about "${query}" and related topics.`
    },
    {
      title: `Result 4 for ${query}`,
      url: 'https://example.com/4',
      description: `More information about "${query}" can be found here. This resource is highly relevant.`
    },
    {
      title: `Result 5 for ${query}`,
      url: 'https://example.com/5',
      description: `A comprehensive article about "${query}" with detailed information and explanations.`
    }
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 py-4 px-6 flex items-center">
        <div className="flex items-center mr-8 cursor-pointer" onClick={() => navigate('/')}>
          <div className="h-8 w-8 bg-red-700 rounded-full flex items-center justify-center mr-2">
            <span className="text-black text-sm">🔍</span>
          </div>
          <h1 className="text-xl font-bold">
            <span className="text-red-700">Mela</span>
            <span className="text-amber-800">Search</span>
          </h1>
        </div>
        
        <div className="flex-1 max-w-2xl relative">
          <input
            type="text"
            className="w-full p-2 pl-4 text-sm text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
            defaultValue={query}
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black">
            <span className="w-4 h-4">🔍</span>
          </button>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto py-6 px-4">
        <p className="text-sm text-black mb-4">About {searchResults.length} results for "{query}" in {category}</p>
        
        <div className="space-y-6">
          {searchResults.map((result, index) => (
            <div key={index} className="search-result">
              <div className="text-sm text-black">{result.url}</div>
              <h2 className="text-xl text-blue-700 hover:underline cursor-pointer">{result.title}</h2>
              <p className="text-sm text-black">{result.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}