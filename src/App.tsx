import "./App.css";
import croppedPhoto from "./assets/cropped-photo.jpeg";
import InteractiveGrid from "./components/animata/background/interactive-grid";
import RippleButton from "./components/animata/button/ripple-button";
import TextFlip from "./components/animata/text/text-flip";

function App() {
  const handleGithubRedirect = () => {
    window.location.href = "https://github.com/brandonAdame";
  };

  const handleLinkedinRedirect = () => {
    window.location.href = "https://www.linkedin.com/in/badame/";
  };

  const handleInstagramRedirect = () => {
    window.location.href = "https://www.instagram.com/thedevroad/";
  };

  return (
    <>
      {/* Main background */}
      <InteractiveGrid>
        <div className="flex h-screen items-center justify-center font-inter">
          {/* Card */}
          <div className="bg-vite-bg rounded-lg p-6">
            <div className="flex flex-col gap-6 text-white">
              {/* About */}
              <div className="flex flex-col items-center gap-4">
                <img
                  src={croppedPhoto}
                  alt="profile-picture"
                  className="h-20 w-20"
                />
                <div className="flex flex-col items-center gap-2">
                  <p className="font-semibold text-xl">Brandon Adame Gachuz</p>
                  <p className="font-semibold text-origin">
                    Cary, United States
                  </p>
                </div>
                <TextFlip />
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3">
                <RippleButton onClick={handleGithubRedirect}>
                  Github
                </RippleButton>
                <RippleButton onClick={handleLinkedinRedirect}>
                  Linkedin
                </RippleButton>
                <RippleButton onClick={handleInstagramRedirect}>
                  Instagram
                </RippleButton>
              </div>
            </div>
          </div>
        </div>
      </InteractiveGrid>
    </>
  );
}

export default App;
