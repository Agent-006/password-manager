import { Hero, Navbar, Wrapper } from "./components";

function App() {
  return (
    <>
      <div className="h-screen w-full bg-zinc-950">
        <Navbar />
        <Wrapper>
          <Hero />
        </Wrapper>
      </div>
    </>
  );
}

export default App;
