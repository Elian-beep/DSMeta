import Header from "./components/Header";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container"> {/* div para controlar a largura maxima do card */}
           <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App
