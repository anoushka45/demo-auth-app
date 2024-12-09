"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  email: string;
  password: string;
}

const Home = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const rememberedUser = localStorage.getItem("rememberedUser") || sessionStorage.getItem("rememberedUser");
    
    if (rememberedUser) {
      setUser(JSON.parse(rememberedUser));
    } else {
      router.push("/pages/signIn");  // Redirect to login if no user found
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md text-center">
        {user ? (
          <>
            <h1 className="text-2xl font-semibold text-green-600">Sign In Success!</h1>
            <p className="mt-4 text-gray-700">Welcome, {user.email}</p>
          </>
        ) : (
          <h1 className="text-2xl font-semibold text-red-600">No User Found</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
