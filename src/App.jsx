import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./routes/routes";
// import "./App.css"
// import "./assets/fonts/IBMPlexSans-Bold.ttf";

// export const UserContext = createContext();

function App() {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modal2Open, setModal2Open] = useState(false);
  // const contextValues = {
  //   isModalOpen: isModalOpen,
  //   setIsModalOpen: setIsModalOpen,
  //   modal2Open: modal2Open,
  //   setModal2Open: setModal2Open,
  // };
  return (
    <>
      {/* <UserContext.Provider value={contextValues}> */}
      <div className="App">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
      {/* </UserContext.Provider> */}
    </>
  );
}

export default App;
