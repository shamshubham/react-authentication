import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main
        className="
        flex-grow
        flex
        flex-col
        items-center
        justify-center"
      >
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App!</h1>
        <p className="text-lg text-gray-600">This is the homepage.</p>
      </main>
    </div>
  );
};

export default HomePage;
