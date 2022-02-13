import "./App.css";
import Content from "./Components/Content";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import "./Firebase/FirebaseConfig";
function App() {
  return (
    <Provider store={store}>
      <Content />
    </Provider>
  );
}

export default App;
