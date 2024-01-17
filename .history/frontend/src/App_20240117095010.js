import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Welcome to my App</h1>
          <HomeScreen/HomeScreen>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
