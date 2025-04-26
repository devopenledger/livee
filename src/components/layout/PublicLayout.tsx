
import { Link } from "react-router-dom";

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen font-poppins">
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://raw.githubusercontent.com/devopenledger/openledger-assets/main/logo-livee.png" alt="Livee" className="h-8" />
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-graphite hover:text-primary transition-colors">Login</Link>
            <Link to="/register" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Register
            </Link>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
};
