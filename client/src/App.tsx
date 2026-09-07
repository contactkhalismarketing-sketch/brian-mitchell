/*
 * DESIGN SYSTEM — Sonoran Quiet Luxury
 * Route aliases support clean, client-facing review URLs while preserving the existing mockup paths.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { AboutPage, BlogArticlePage, BlogIndexPage, ContactPage, CosmeticServicePage, ServicesPage } from "./pages/PracticePages";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/homepage"} component={Home} />
      <Route path={"/services"} component={ServicesPage} />
      <Route path={"/services/cosmetic-dentistry"} component={CosmeticServicePage} />
      <Route path={"/cosmetic-dentistry"} component={CosmeticServicePage} />
      <Route path={"/contact"} component={ContactPage} />
      <Route path={"/contact-us"} component={ContactPage} />
      <Route path={"/about"} component={AboutPage} />
      <Route path={"/about-us"} component={AboutPage} />
      <Route path={"/blogs"} component={BlogIndexPage} />
      <Route path={"/blogs/soft-tissue-management"} component={BlogArticlePage} />
      <Route path={"/blog/soft-tissue-management"} component={BlogArticlePage} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
