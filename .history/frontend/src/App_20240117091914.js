import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <h1></h1>Welcome to my App</Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
