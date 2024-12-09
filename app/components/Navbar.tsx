// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">My App</div>
        <div className="space-x-4">
          <Link href="/pages/signIn">
           Sign In
          </Link>
          <Link href="/pages/signup">
           Sign up
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
