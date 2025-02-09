// // "use client";

// // import Link from "next/link";
// // import { useSession, signOut } from "next-auth/react";
// // import { Home, User } from "lucide-react";
// // import { useNotification } from "./Notification";
// // // import { useNotification } from "./Notification";

// // export default function Header() {
// //   const { data: session } = useSession();
// //   const { showNotification } = useNotification();

// //   const handleSignOut = async () => {
// //     try {
// //       await signOut();
// //       showNotification("Signed out successfully", "success");
// //     } catch {
// //       showNotification("Failed to sign out", "error");
// //     }
// //   };

// //   return (
// //     <div className="navbar sticky top-0 z-40 ">
// //       <div className="container mx-auto">
// //         <div className="flex-1 px-2 lg:flex-none">
// //           <Link
// //             href="/"
// //             className="btn btn-ghost text-xl gap-2 normal-case font-bold"
// //             prefetch={true}
// //             onClick={() =>
// //               showNotification("Welcome to ImageKit ReelsPro", "info")
// //             }
// //           >
// //             <Home className="w-5 h-5" />
// //             ImageKit ReelsPro
// //           </Link>
// //         </div>
// //         <div className="flex flex-1 justify-end px-2">
// //           <div className="flex items-stretch gap-2">
// //             <div className="dropdown dropdown-end">
// //               <div
// //                 tabIndex={0}
// //                 role="button"
// //                 className="btn btn-ghost btn-circle"
// //               >
// //                 <User className="w-5 h-5" />
// //               </div>
// //               <ul
// //                 tabIndex={0}
// //                 className="dropdown-content z-[1] shadow-lg bg-base-100 rounded-box w-64 mt-4 py-2"
// //               >
// //                 {session ? (
// //                   <>
// //                     <li className="px-4 py-1">
// //                       <span className="text-sm opacity-70">
// //                         {session.user?.email?.split("@")[0]}
// //                       </span>
// //                     </li>
// //                     <div className="divider my-1"></div>

// //                     <li>
// //                       <Link
// //                         href="/upload"
// //                         className="px-4 py-2 hover:bg-base-200 block w-full"
// //                         onClick={() =>
// //                           showNotification("Welcome to Admin Dashboard", "info")
// //                         }
// //                       >
// //                         Video Upload
// //                       </Link>
// //                     </li>

// //                     <li>
// //                       <button
// //                         onClick={handleSignOut}
// //                         className="px-4 py-2 text-error hover:bg-base-200 w-full text-left"
// //                       >
// //                         Sign Out
// //                       </button>
// //                     </li>
// //                   </>
// //                 ) : (
// //                   <li>
// //                     <Link
// //                       href="/login"
// //                       className="px-4 py-2 hover:bg-base-200 block w-full"
// //                       onClick={() =>
// //                         showNotification("Please sign in to continue", "info")
// //                       }
// //                     >
// //                       Login
// //                     </Link>
// //                   </li>
// //                 )}
// //               </ul>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // =============

// "use client";

// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";
// import { Home, User } from "lucide-react";
// import { useNotification } from "./Notification";

// export default function Header() {
//   const { data: session } = useSession();
//   const { showNotification } = useNotification();

//   const handleSignOut = async () => {
//     try {
//       await signOut();
//       showNotification("Signed out successfully", "success");
//     } catch {
//       showNotification("Failed to sign out", "error");
//     }
//   };

//   return (
//     <header className="bg-black/70 backdrop-blur-md shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto flex items-center justify-between px-4 py-3">
//         <Link
//           href="/"
//           className="flex items-center gap-2 text-2xl font-bold text-white hover:text-cyan-400 transition duration-300"
//           prefetch={true}
//           onClick={() =>
//             showNotification("Welcome to ImageKit ReelsPro", "info")
//           }
//         >
//           <Home className="w-6 h-6" />
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
//             ImageKit ReelsPro
//           </span>
//         </Link>
//         <div className="flex items-center space-x-4">
//           <div className="dropdown dropdown-end">
//             <button tabIndex={0} className="btn btn-ghost btn-circle">
//               <User className="w-6 h-6 text-white" />
//             </button>
//             <ul
//               tabIndex={0}
//               className="dropdown-content mt-4 z-[1] w-64 rounded-box bg-gray-800 shadow-xl py-2 text-white"
//             >
//               {session ? (
//                 <>
//                   <li className="px-4 py-2">
//                     <span className="text-sm opacity-70">
//                       {session.user?.email?.split("@")[0]}
//                     </span>
//                   </li>
//                   <div className="divider my-1 border-gray-700"></div>
//                   <li>
//                     <Link
//                       href="/upload"
//                       className="block w-full px-4 py-2 hover:bg-gray-700 transition"
//                       onClick={() =>
//                         showNotification("Welcome to Admin Dashboard", "info")
//                       }
//                     >
//                       Video Upload
//                     </Link>
//                   </li>
//                   <li>
//                     <button
//                       onClick={handleSignOut}
//                       className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-700 transition"
//                     >
//                       Sign Out
//                     </button>
//                   </li>
//                 </>
//               ) : (
//                 <li>
//                   <Link
//                     href="/login"
//                     className="block w-full px-4 py-2 hover:bg-gray-700 transition"
//                     onClick={() =>
//                       showNotification("Please sign in to continue", "info")
//                     }
//                   >
//                     Login
//                   </Link>
//                 </li>
//               )}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }


// Updated Header Component for a Futuristic Commercial Website
"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Home, User } from "lucide-react";
import { useNotification } from "./Notification";

export default function Header() {
  const { data: session } = useSession();
  const { showNotification } = useNotification();

  const handleSignOut = async () => {
    try {
      await signOut();
      showNotification("Signed out successfully", "success");
    } catch {
      showNotification("Failed to sign out", "error");
    }
  };

  return (
    <header className="bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-900 backdrop-blur-lg shadow-xl sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold text-white hover:text-cyan-400 transition duration-300"
          prefetch={true}
          onClick={() =>
            showNotification("Welcome to ImageKit ReelsPro", "info")
          }
        >
          <Home className="w-6 h-6" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            ImageKit ReelsPro
          </span>
        </Link>
        <div className="flex items-center space-x-4">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              className="btn btn-ghost btn-circle hover:bg-cyan-700 hover:text-white transition duration-300"
            >
              <User className="w-6 h-6 text-white" />
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content mt-4 z-[1] w-64 rounded-lg bg-gray-900 shadow-2xl py-3 text-white"
            >
              {session ? (
                <>
                  <li className="px-4 py-2">
                    <span className="text-sm opacity-70">
                      {session.user?.email?.split("@")[0]}
                    </span>
                  </li>
                  <div className="divider my-1 border-gray-700"></div>
                  <li>
                    <Link
                      href="/upload"
                      className="block w-full px-4 py-2 hover:bg-gray-700 transition"
                      onClick={() =>
                        showNotification("Welcome to Admin Dashboard", "info")
                      }
                    >
                      Video Upload
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-700 transition"
                    >
                      Sign Out
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="block w-full px-4 py-2 hover:bg-gray-700 transition"
                    onClick={() =>
                      showNotification("Please sign in to continue", "info")
                    }
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
