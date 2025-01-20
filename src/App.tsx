import "./App.css";
import croppedPhoto from "./assets/cropped-photo.jpeg";
import AnimatedBeam from "./components/animata/background/animated-beam";
import RippleButton from "./components/animata/button/ripple-button";
import AnimatedBorderTrail from "./components/animata/container/animated-border-trail";
import TextFlip from "./components/animata/text/text-flip";
import GithubIcon from "./assets/github-logo.svg?react";
import LinkedinIcon from "./assets/linkedin-logo.svg?react";
import InstagramIcon from "./assets/instagram-logo.svg?react";

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
      <AnimatedBeam>
        <div className="flex h-screen items-center justify-center font-inter">
          <AnimatedBorderTrail trailColor="trail-color" trailSize="lg">
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
                    <p className="font-semibold text-xl">
                      Brandon Adame Gachuz
                    </p>
                    <p className="font-semibold text-origin">
                      Cary, United States
                    </p>
                  </div>
                  <TextFlip />
                </div>

                {/* Links */}
                <div className="flex flex-col gap-3">
                  <RippleButton onClick={handleGithubRedirect}>
                    <div className="flex items-center gap-2">
                      <GithubIcon className="" />
                      Github
                    </div>
                  </RippleButton>
                  <RippleButton onClick={handleLinkedinRedirect}>
                    <div className="flex items-center gap-2">
                      <LinkedinIcon />
                      Linkedin
                    </div>
                  </RippleButton>
                  <RippleButton onClick={handleInstagramRedirect}>
                    <div className="flex items-center gap-2">
                      <InstagramIcon />
                      Instagram
                    </div>
                  </RippleButton>
                </div>
              </div>
            </div>
          </AnimatedBorderTrail>
        </div>
      </AnimatedBeam>
    </>
  );
}

export default App;
