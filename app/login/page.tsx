// // "use client";

// // import { signIn } from "next-auth/react";
// // import { useState } from "react";
// // import { useRouter } from "next/navigation";
// // // import { useNotification } from "../components/Notification";
// // import Link from "next/link";
// // import { useNotification } from "../components/Notification";

// // export default function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const router = useRouter();
// //   const { showNotification } = useNotification();

// //   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault();
// //     const result = await signIn("credentials", {
// //       email,
// //       password,
// //       redirect: false,
// //     });

// //     if (result?.error) {
// //       showNotification(result.error, "error");
// //     } else {
// //       showNotification("Login successful!", "success");
// //       router.push("/");
// //     }
// //   };

// //   return (
// //     <div className="max-w-md mx-auto">
// //       <h1 className="text-2xl font-bold mb-4">Login</h1>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label htmlFor="email" className="block mb-1">
// //             Email
// //           </label>
// //           <input
// //             type="email"
// //             id="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //             className="w-full px-3 py-2 border rounded"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="password" className="block mb-1">
// //             Password
// //           </label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //             className="w-full px-3 py-2 border rounded"
// //           />
// //         </div>
// //         <button
// //           type="submit"
// //           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
// //         >
// //           Login
// //         </button>
// //         <p className="text-center mt-4">
// //           Don&apos;t have an account?{" "}
// //           <Link href="/register" className="text-blue-500 hover:text-blue-600">
// //             Register
// //           </Link>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // }

// "use client";

// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { useNotification } from "../components/Notification";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
//   const { showNotification } = useNotification();

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     if (result?.error) {
//       showNotification(result.error, "error");
//     } else {
//       showNotification("Login successful!", "success");
//       router.push("/");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-8 rounded-lg shadow-2xl bg-gray-800 bg-opacity-80 backdrop-blur-lg">
//       <h1 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
//         Login
//       </h1>
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div>
//           <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <div>
//           <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-200">
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:opacity-90 transition duration-300"
//         >
//           Login
//         </button>
//         <p className="text-center text-sm text-gray-400">
//           Don&apos;t have an account?{" "}
//           <Link href="/register" className="text-blue-400 hover:underline">
//             Register
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// }

"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useNotification } from "../components/Notification";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      showNotification(result.error, "error");
    } else {
      showNotification("Login successful!", "success");
      router.push("/");
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-lg shadow-2xl bg-gray-800 bg-opacity-80 backdrop-blur-lg">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 pr-10 py-2 text-white bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold hover:opacity-90 transition duration-300"
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-400 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
