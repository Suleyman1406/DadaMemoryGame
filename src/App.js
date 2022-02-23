import "./App.css";
import Content from "./Components/Content";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./Firebase/FirebaseConfig";
import Footer from "./Components/Footer";
function App() {
  return (
    <Provider store={store}>
      <Content />
      <Footer />
    </Provider>
  );
}

export default App;
