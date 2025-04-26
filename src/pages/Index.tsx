
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-graphite mb-6">
              Invest in tokenized real estate
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Fractionalize property investments from as little as $100
            </p>
            <div className="flex justify-center gap-4">
              <Link
                to="/register"
                className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/user/buy"
                className="bg-graphite text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-graphite/90 transition-colors"
              >
                Browse Properties
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with dashboard links */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-8 text-sm">
            <Link to="/user" className="text-primary hover:underline">User Dashboard</Link>
            <Link to="/agent" className="text-primary hover:underline">Agent Dashboard</Link>
            <Link to="/admin" className="text-primary hover:underline">Admin Dashboard</Link>
            <Link to="/developer" className="text-primary hover:underline">Developer Dashboard</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
