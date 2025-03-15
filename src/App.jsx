import AnimatedGridPattern from "./components/ui/animated-grid-pattern";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero section with animated grid */}
      <div className="relative h-[600px] flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center z-10">
          Welcome to My Portfolio
        </h1>
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
        />
      </div>
    </div>
  );
};

export default App;
