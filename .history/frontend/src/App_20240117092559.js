import { Container } from "react-bootstrap";
import 
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1>Welcome to my App</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;