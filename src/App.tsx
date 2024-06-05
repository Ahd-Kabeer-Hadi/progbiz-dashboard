import "./App.css";
import SidebarMenu from "./components/Sidebar-menu";
import Dashboard from "./components/Dashboard";

// this could have more structured step but as of now it's just a single page let's not complicate it
// also this only focused on UI implementation for now
function App() {
  return (
    <>
      <div className="flex relative min-h-screen w-full  bg-[#8181A5]/10">
        <div className="fixed z-20">
          <SidebarMenu />
        </div>
        <div className="w-full ml-14 md:ml-[84px]">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
