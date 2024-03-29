import Sidebar from "./sidebarMenu/Sidebar";
import MainVisit from "./visit/index";
import InfoDoc from "./dataDoc/infoDoc/InfoDoc";
function App() {
  return (
    <div className="flex gap-2">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1">
        <MainVisit />
      </div>
      <div className="flex-[.5]">
        <InfoDoc />
      </div>
    </div>
  );
}

export default App;
