// import { Link } from "@remix-run/react";

// export default function Header() {
//   return (
//     <header className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
//       <div className="flex gap-4 sm:gap-6 mb-4 sm:mb-0">
//         <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
//         <a href="#" className="text-gray-700 hover:text-gray-900">FAQ</a>
//       </div>
//       <div className="flex gap-3">
//         <button className="px-4 py-2 bg-amber-700 text-white rounded-md">
//           More tools
//         </button>
//         <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">
//           Sign in
//         </button>
//         <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">
//           Sign up
//         </button>
//       </div>
//     </header>
//   );
// }



import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center">
      <div className="flex flex-wrap gap-4 justify-center w-full sm:w-auto mb-4 sm:mb-0">
        <a href="#" className="text-gray-700 hover:text-gray-900">About us</a>
        <a href="#" className="text-gray-700 hover:text-gray-900">FAQ</a>
      </div>
      <div className="flex flex-wrap gap-3 justify-center w-full sm:w-auto">
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
    </header>
  );
}