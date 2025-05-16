
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full border-b border-gapmap-pastel-purple/10 bg-gradient-to-r from-gapmap-darker via-gapmap-dark to-gapmap-darker">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Logo />
        <h1 className="hidden sm:block font-medium text-sm text-gradient-purple">
          Your Personalized AI Skill Gap Analyzer
        </h1>
      </div>
    </header>
  );
};

export default Header;
