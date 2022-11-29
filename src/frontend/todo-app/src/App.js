import Navigation from "./routes/index";
import Layout from "./common/Layout";
import './App.css';

function App() {
  return (
      <Layout>
        {Navigation}
      </Layout>
  );
}

export default App;
