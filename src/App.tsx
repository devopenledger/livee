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
          {/* Other user routes will be added here */}
          
          {/* Agent Dashboard Routes */}
          <Route path="/agent/*" element={<DashboardLayout><div>Agent Dashboard</div></DashboardLayout>} />
          
          {/* Admin Dashboard Routes */}
          <Route path="/admin/*" element={<DashboardLayout><div>Admin Dashboard</div></DashboardLayout>} />
          
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
