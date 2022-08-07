import Mainbody from "./components/Mainbody";
import Navbar from "./components/Navbar";
import styled from "styled-components";

const Overall = styled.div`
  width: fit-content;
  min-width: 100vw;
`;

function App() {
  return (
    <>
      <Overall>
        <Navbar/>
        <Mainbody/>
      </Overall>
    </>
  );
}

export default App;
