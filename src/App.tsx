import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import EmailVerification from "./pages/EmailVerification";
import NotFound from "./pages/NotFound";
import AppLayout from "./components/layout/AppLayout";
import AlumniNetwork from "./pages/AlumniNetwork";
import CareerPortal from "./pages/CareerPortal";
import Events from "./pages/Events";
import News from "./pages/News";
import KnowledgeHub from "./pages/KnowledgeHub";
import GiveBack from "./pages/GiveBack";
import Community from "./pages/Community";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  return user ? <>{children}</> : <Navigate to="/auth" />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/verify" element={<EmailVerification />} />
            <Route 
              path="/" 
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="alumni-network" element={<AlumniNetwork />} />
              <Route path="career-portal" element={<CareerPortal />} />
              <Route path="events" element={<Events />} />
              <Route path="news" element={<News />} />
              <Route path="knowledge-hub" element={<KnowledgeHub />} />
              <Route path="give-back" element={<GiveBack />} />
              <Route path="community" element={<Community />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
