import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to GoNest
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Your travel companion for unforgettable experiences.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
