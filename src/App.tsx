
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout } from "./components/layout/PublicLayout";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Public Pages
import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyEmail from "./pages/auth/VerifyEmail";
import NotFound from "./pages/NotFound";

// User Dashboard Pages
import DashboardHome from "./pages/user/Home";
import ConciergeRequests from "./pages/user/ConciergeRequests";
import ProductMarketplace from "./pages/user/ProductMarketplace";
import MyAdvisors from "./pages/user/MyAdvisors";
import UnlockMarkets from "./pages/user/UnlockMarkets";

// Agent Dashboard Pages
import AgentHome from "./pages/agent/Home";
import Commissions from "./pages/agent/Commissions";
import ManageClients from "./pages/agent/ManageClients";
import SalesAndOffers from "./pages/agent/SalesAndOffers";
import TokenizeProperties from "./pages/agent/TokenizeProperties";

// Admin Dashboard Pages
import AdminHome from "./pages/admin/Home";
import UserManagement from "./pages/admin/UserManagement";
import AgentManagement from "./pages/admin/AgentManagement";
import PropertyManagement from "./pages/admin/PropertyManagement";
import UnitRentalsManagement from "./pages/admin/UnitRentalsManagement";
import VehicleRentalsManagement from "./pages/admin/VehicleRentalsManagement";
import MortgageManagement from "./pages/admin/MortgageManagement";
import RentalContractsManagement from "./pages/admin/RentalContractsManagement";
import MarketplaceManagement from "./pages/admin/MarketplaceManagement";
import ReportsAndAdminTools from "./pages/admin/ReportsAndAdminTools";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout><Index /></PublicLayout>} />
          <Route path="/login" element={<PublicLayout><Login /></PublicLayout>} />
          <Route path="/register" element={<PublicLayout><Register /></PublicLayout>} />
          <Route path="/forgot-password" element={<PublicLayout><ForgotPassword /></PublicLayout>} />
          <Route path="/verify-email" element={<PublicLayout><VerifyEmail /></PublicLayout>} />

          {/* User Dashboard Routes */}
          <Route path="/user" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
          <Route path="/user/concierge" element={<DashboardLayout><ConciergeRequests /></DashboardLayout>} />
          <Route path="/user/marketplace" element={<DashboardLayout><ProductMarketplace /></DashboardLayout>} />
          <Route path="/user/advisors" element={<DashboardLayout><MyAdvisors /></DashboardLayout>} />
          <Route path="/user/unlock-markets" element={<DashboardLayout><UnlockMarkets /></DashboardLayout>} />
          
          {/* Agent Dashboard Routes */}
          <Route path="/agent" element={<DashboardLayout><AgentHome /></DashboardLayout>} />
          <Route path="/agent/commissions" element={<DashboardLayout><Commissions /></DashboardLayout>} />
          <Route path="/agent/clients" element={<DashboardLayout><ManageClients /></DashboardLayout>} />
          <Route path="/agent/sales" element={<DashboardLayout><SalesAndOffers /></DashboardLayout>} />
          <Route path="/agent/tokenize" element={<DashboardLayout><TokenizeProperties /></DashboardLayout>} />
          
          {/* Admin Dashboard Routes */}
          <Route path="/admin" element={<DashboardLayout><AdminHome /></DashboardLayout>} />
          <Route path="/admin/users" element={<DashboardLayout><UserManagement /></DashboardLayout>} />
          <Route path="/admin/agents" element={<DashboardLayout><AgentManagement /></DashboardLayout>} />
          <Route path="/admin/properties" element={<DashboardLayout><PropertyManagement /></DashboardLayout>} />
          <Route path="/admin/rentals" element={<DashboardLayout><UnitRentalsManagement /></DashboardLayout>} />
          <Route path="/admin/vehicles" element={<DashboardLayout><VehicleRentalsManagement /></DashboardLayout>} />
          <Route path="/admin/mortgages" element={<DashboardLayout><MortgageManagement /></DashboardLayout>} />
          <Route path="/admin/contracts" element={<DashboardLayout><RentalContractsManagement /></DashboardLayout>} />
          <Route path="/admin/marketplace" element={<DashboardLayout><MarketplaceManagement /></DashboardLayout>} />
          <Route path="/admin/reports" element={<DashboardLayout><ReportsAndAdminTools /></DashboardLayout>} />
          
          {/* Developer Dashboard Routes */}
          <Route path="/developer/*" element={<DashboardLayout><div>Developer Dashboard</div></DashboardLayout>} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
};

export default App;
