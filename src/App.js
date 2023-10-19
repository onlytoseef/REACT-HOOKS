
import "./App.scss"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Routes from "./Pages/Routes"
import CountContextProvider from "./Context/CountContext";
import AuthContextProvider from "./Context/AuthContext";

function App() {
  return (
    <>
    <AuthContextProvider>

      <CountContextProvider>
        <Routes />
      </CountContextProvider>
    </AuthContextProvider>
    </>
  );
}

export default App;
