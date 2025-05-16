
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="w-full border-b border-gapmap-pastel-purple/20 bg-gradient-to-r from-gapmap-pastel-blue/40 via-white to-gapmap-pastel-purple/40">
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
