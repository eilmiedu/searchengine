import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "@remix-run/react";

export default function SearchResults() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category') || 'AI';
  
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState(query);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  // Simulate loading search results based on the query
  useEffect(() => {
    // In a real app, you would fetch results from an API
    const mockSearchResults = [
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
    
    setSearchResults(mockSearchResults);
  }, [query]);
  
  // Generate search suggestions based on input
  useEffect(() => {
    if (inputValue.trim() === '') {
      setSuggestions([]);
      return;
    }
    
    // In a real app, you would fetch suggestions from an API
    const generateSuggestions = () => {
      const mockSuggestions = [
        `${inputValue} tutorial`,
        `${inputValue} examples`,
        `${inputValue} best practices`,
        `${inputValue} vs alternative`,
        `${inputValue} for beginners`
      ];
      setSuggestions(mockSuggestions);
    };
    
    // Add a small delay to avoid too many updates while typing
    const timeoutId = setTimeout(generateSuggestions, 200);
    
    return () => clearTimeout(timeoutId);
  }, [inputValue]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    
    if (inputValue?.trim()) {
      navigate(`/search?q=${encodeURIComponent(inputValue)}&category=${category}`);
    }
  };
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowSuggestions(true);
  };
  
  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(suggestion)}&category=${category}`);
  };
  
  const handleBlur = () => {
    // Delay hiding suggestions to allow clicking on them
    setTimeout(() => setShowSuggestions(false), 200);
  };

  const handleFocus = () => {
    if (inputValue.trim() !== '') {
      setShowSuggestions(true);
    }
  };

  // Sample images for the knowledge panel
  const knowledgePanelImages = [
    "https://i.ytimg.com/vi/bCpFbERgj7s/maxresdefault.jpg",
    "https://i.ytimg.com/vi/bCpFbERgj7s/maxresdefault.jpg",
    "https://i.ytimg.com/vi/bCpFbERgj7s/maxresdefault.jpg",
    "https://i.ytimg.com/vi/bCpFbERgj7s/maxresdefault.jpg"
  ];
  
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center mr-8 cursor-pointer" onClick={() => navigate('/')}>
          <div className="h-8 w-8 bg-red-700 rounded-full flex items-center justify-center mr-2">
            <span className="text-bg-gray-700 text-sm">🔍</span>
          </div>
          <h1 className="text-xl font-bold">
            <span className="text-red-700">Mela</span>
            <span className="text-amber-800">Search</span>
          </h1>
        </div>
        
        <div className="flex-1 max-w-2xl relative">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="q"
              className="w-full p-2 pl-4 text-sm text-black border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black"
            >
              <span className="w-4 h-4">🔍</span>
            </button>
          </form>

       
          {/* Search suggestions dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  <span className="mr-2 text-gray-500">🔍</span>
                  <span className="text-sm">{suggestion}</span>
                </div>
              ))}
            </div>
          )}
        </div>


   {/* ///menus */}
   <div className="flex gap-4 px-7">
      <button className="px-4 py-2 bg-amber-700 text-white rounded-md">
        More tools
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">
        Sign in
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">
        Sign up
      </button>
    </div>
          {/* /// */}
          

      </header>
      
      <main className="max-w-full mx-auto py-6 px-12 flex">
        {/* Left side: Search results */}
        <div className="flex-grow mr-8">
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
        </div>
        
        {/* Right side: Knowledge panel with images */}
        <div className="max-w-md w-full bg-gray-50 rounded-lg p-4 h-fit">
          <h3 className="text-lg font-medium mb-3">{query}</h3>
          
          {/* Grid of 4 images */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            {knowledgePanelImages.map((src, index) => (
              <div key={index} className="overflow-hidden rounded">
                <img 
                  src={src} 
                  alt={`${query} image ${index + 1}`} 
                  className="w-full h-auto object-cover cursor-pointer hover:opacity-90"
                />
              </div>
            ))}
          </div>
          
          {/* Lorem ipsum text */}
          <div className="text-sm text-gray-700">
            <p className="mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
            </p>
            <p>
              Aenean eu justo sed elit dignissim aliquam. Nullam quis risus eget urna mollis ornare vel eu leo. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}