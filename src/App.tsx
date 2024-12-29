import "./App.css";
import croppedPhoto from "./assets/cropped-photo.jpeg";

function App() {
  return (
    <>
      {/* Main background */}
      <div className="flex h-screen items-center justify-center bg-black font-inter">
        {/* Card */}
        <div className="bg-vite-bg rounded-lg p-6">
          <div className="flex flex-col gap-6 text-white">
            {/* About */}
            <div className="flex flex-col items-center gap-4">
              <img src={croppedPhoto} alt="profile-picture" className="h-20 w-20" />
              <div className="flex flex-col items-center gap-2">
                <p className="font-semibold text-xl">Brandon Adame Gachuz</p>
                <p className="font-semibold text-origin">Cary, United States</p>
              </div>
              <p>Full-Stack Developer and fútbol lover</p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-3">
              <button className="py-2 px-10 bg-neutral-700 text-white w-full rounded-lg">
                Github
              </button>
              <button className="py-2 px-10 bg-neutral-700 text-white w-full rounded-lg">
                Frontend Mentor
              </button>
              <button className="py-2 px-10 bg-neutral-700 text-white w-full rounded-lg">
                Linkedin
              </button>
              <button className="py-2 px-10 bg-neutral-700 text-white w-full rounded-lg">
                Twitter
              </button>
              <button className="py-2 px-10 bg-neutral-700 text-white w-full rounded-lg">
                Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
