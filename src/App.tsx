import "./App.css";
import SidebarMenu from "./components/Sidebar-menu";
import Dashboard from "./components/Dashboard";

// this could have more structured step but as of now it's just a single page let's not complicate it
// also this only focused on UI implementation for now
function App() {
  return (
    <>
      <div className="flex min-h-screen w-full bg-[#8181A5]/10">
        <SidebarMenu />

        <Dashboard />
      </div>
    </>
  );
}

export default App;
