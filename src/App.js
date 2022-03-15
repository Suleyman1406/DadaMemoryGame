import Content from "./Components/Content/Content";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import "./Firebase/FirebaseConfig";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <Content />
      <Footer />
    </Provider>
  );
}

export default App;
