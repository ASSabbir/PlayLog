
import { Typewriter } from 'react-simple-typewriter';

const Type = () => {
  return (
    <section className="bg-zinc-900 text-white py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          Welcome to <span className="text-primary font-title">PlayLog</span>
        </h1>
        <p className="text-lg mb-10">
          Discover, Review, and Share Your Favorite Games with the World!
        </p>
        <div className="text-2xl font-semibold">
          <span>Here, you can </span>
          <span className="text-primary">
            <Typewriter
              words={[
                'Explore Top Reviews 🚀',
                'Add to Your Watchlist 🎮',
                'Share Your Opinions 📝',
                'Connect with Gamers 🌟',
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Type;
