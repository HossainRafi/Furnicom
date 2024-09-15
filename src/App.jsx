import "./App.css";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <main className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
