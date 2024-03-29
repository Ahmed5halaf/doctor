import Sidebar from "./sidebarMenu/Sidebar";
import MainVisit from "./visit/index";
import InfoDoc from "./dataDoc/infoDoc/InfoDoc";
function App() {
  return (
    <div className="flex lg:flex-row flex-col gap-2">
      <div>
        <Sidebar />
      </div>
      <div className="lg:flex-1">
        <MainVisit />
      </div>
      <div className="lg:flex-[.5]">
        <InfoDoc />
      </div>
    </div>
  );
}

export default App;
