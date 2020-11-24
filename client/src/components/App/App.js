import "./App.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Todo from "../Todo/Todo";

function App() {
    return (
        <div className="app">
            <Header />
            <main className="section-main">
                <Todo />
            </main>
            <Footer />
        </div>
    );
}

export default App;
