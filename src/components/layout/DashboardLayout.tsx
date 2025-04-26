
import { Link, useLocation } from "react-router-dom";

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const role = location.pathname.split('/')[1]; // Extract role from URL

  return (
    <div className="min-h-screen flex font-poppins">
      <aside className="w-64 bg-graphite text-white p-4">
        <div className="mb-8">
          <img src="https://raw.githubusercontent.com/devopenledger/openledger-assets/main/logo-livee.png" alt="Livee" className="h-8" />
        </div>
        <nav>
          {role === 'user' && (
            <div className="space-y-2">
              <Link to="/user/rent" className="block p-2 hover:bg-primary/10 rounded">Rent Properties</Link>
              <Link to="/user/buy" className="block p-2 hover:bg-primary/10 rounded">Buy Tokens</Link>
              <Link to="/user/concierge" className="block p-2 hover:bg-primary/10 rounded">Concierge</Link>
              <Link to="/user/marketplace" className="block p-2 hover:bg-primary/10 rounded">Marketplace</Link>
              <Link to="/user/portfolio" className="block p-2 hover:bg-primary/10 rounded">Portfolio</Link>
              <Link to="/user/rental-history" className="block p-2 hover:bg-primary/10 rounded">Rental History</Link>
              <Link to="/user/finance" className="block p-2 hover:bg-primary/10 rounded">Finance</Link>
              <Link to="/user/advisors" className="block p-2 hover:bg-primary/10 rounded">Advisors</Link>
              <Link to="/user/kyc" className="block p-2 hover:bg-primary/10 rounded">KYC</Link>
            </div>
          )}
          {role === 'agent' && (
            <div className="space-y-2">
              <Link to="/agent/commissions" className="block p-2 hover:bg-primary/10 rounded">Commissions</Link>
              <Link to="/agent/clients" className="block p-2 hover:bg-primary/10 rounded">Clients</Link>
              <Link to="/agent/sales" className="block p-2 hover:bg-primary/10 rounded">Sales & Offers</Link>
              <Link to="/agent/tokenize" className="block p-2 hover:bg-primary/10 rounded">Tokenize Properties</Link>
            </div>
          )}
          {role === 'admin' && (
            <div className="space-y-2">
              <Link to="/admin/users" className="block p-2 hover:bg-primary/10 rounded">Users</Link>
              <Link to="/admin/agents" className="block p-2 hover:bg-primary/10 rounded">Agents</Link>
              <Link to="/admin/properties" className="block p-2 hover:bg-primary/10 rounded">Properties</Link>
              <Link to="/admin/rentals" className="block p-2 hover:bg-primary/10 rounded">Rentals</Link>
              <Link to="/admin/vehicles" className="block p-2 hover:bg-primary/10 rounded">Vehicles</Link>
              <Link to="/admin/mortgages" className="block p-2 hover:bg-primary/10 rounded">Mortgages</Link>
              <Link to="/admin/contracts" className="block p-2 hover:bg-primary/10 rounded">Contracts</Link>
              <Link to="/admin/marketplace" className="block p-2 hover:bg-primary/10 rounded">Marketplace</Link>
              <Link to="/admin/sales" className="block p-2 hover:bg-primary/10 rounded">Sales</Link>
              <Link to="/admin/reports" className="block p-2 hover:bg-primary/10 rounded">Reports</Link>
            </div>
          )}
          {role === 'developer' && (
            <div className="space-y-2">
              <Link to="/developer/buildings" className="block p-2 hover:bg-primary/10 rounded">Buildings</Link>
              <Link to="/developer/units" className="block p-2 hover:bg-primary/10 rounded">Units</Link>
              <Link to="/developer/landlords" className="block p-2 hover:bg-primary/10 rounded">Landlords</Link>
              <Link to="/developer/tenants" className="block p-2 hover:bg-primary/10 rounded">Tenants</Link>
              <Link to="/developer/facilities" className="block p-2 hover:bg-primary/10 rounded">Facilities</Link>
              <Link to="/developer/concierge" className="block p-2 hover:bg-primary/10 rounded">Concierge</Link>
              <Link to="/developer/reports" className="block p-2 hover:bg-primary/10 rounded">Reports</Link>
            </div>
          )}
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
};
