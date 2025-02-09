"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Error message state
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      router.push("/admin/dashboard");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Correct credentials
    const correctEmail = "khan@gmail.com";
    const correctPassword = "khan123";

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("adminEmail", email);
      localStorage.setItem("adminPassword", password);
      localStorage.setItem("isLoggedIn", "true");

      router.push("/admin/dashboard");
    } else {
      setError("Invalid email or password!"); // Show error if wrong credentials
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }} // Background Image
    >
      <form className="bg-white/75 bg-opacity-90 p-8 rounded-lg shadow-lg w-85" onSubmit={handleLogin}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>} {/* Error Message */}

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          value={email}
          required
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          value={password}
          required
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600 transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
