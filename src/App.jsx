import "./App.css";

import Navbar from "./component/Navbar/Navbar";

import IshuHandle from "./component/IshuHandle";
import { use } from "react";

const ticketPromise = fetch("/Data.json").then((res) => res.json());

//const [abStatus, setAbStatus] = useState([]);

function App() {
  const ticketData = use(ticketPromise);
  return (
    <>
      <div className="bg-[#f5f5f5]">
        <div className="max-w-[1200px] border-2 border-red-500 mx-auto  text-black">
          <Navbar></Navbar>
          <IshuHandle ticketData={ticketData}></IshuHandle>
        </div>
      </div>
    </>
  );
}

export default App;
