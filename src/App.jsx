import "./App.css";
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  // Setting Hero Header
  const headers = [
    "Student Developer",
    "Web and Mobile Development",
    "Part-Time Freelancer",
  ];

  return (
    <main className="bg-zinc-900 w-full min-h-full zalando-sans tracking-tight  text-white">
      {/* Nav */}
      <nav className="w-full p-8 px-50 flex justify-between text-2xl absolute top-0">
        <p className="text-3xl font-semibold">Tan Wen Zhe</p>
        <ul className="flex gap-4 font-light">
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact Me</li>
        </ul>
      </nav>

      {/* Main Container */}
      <div className="p-4 px-20 w-full min-h-screen">
        {/* Hero */}
        <div className="w-full items-center justify-center flex flex-col min-h-screen">
          <ul className="text-8xl flex text-center justify-center font-semibold h-24 w-full relative">
            <li className="heroCaption absolute">{headers[0]}</li>
            <li className="heroCaption absolute">{headers[1]}</li>
            <li className="heroCaption absolute">{headers[2]}</li>
          </ul>
          <p className="leading-20 text-4xl text-zinc-500">Hi, I am Wen Zhe.</p>
          <button className="group flex items-center gap-4 mt-2 rounded-4xl py-2 pl-6 bg-zinc-800 text-2xl transition-colors hover:cursor-pointer hover:text-black hover:bg-white duration-150 ease-in-out">
            <p>Let's Go</p>
            <div className="text-xl p-2 rounded-4xl bg-white text-black self-end heroButton">
              <FaArrowRightLong />
            </div>
          </button>
        </div>

        {/* About Section*/}
        <div className="w-full flex flex-col min-h-screen">
          <p className="text-4xl font-light">About Me</p>
          <p className="leading-30 text-8xl font-semibold">Who Am I?</p>
          <div className="p-4">
            <p className="text-2xl font-light">
              Hello! My name is Wen Zhe, or you could also call me Nathan. I
              have been self-teaching myself all things programming since I was
              18, which is in 2024. I started off by learning C++ since I
              originally wanted to do Game Development. I eventually stumbled
              across Leetcoding and SQL, although I had no idea what I was
              really doing at that time. Anyway, I started to get better and
              learn more technologies through opportunities like hackathons and
              freelancing gigs. I have shifted between different technologies
              and fields, looking for what works best for me. As of now, I have
              more than a year's worth of experience working with various
              technologies, notably in the Frontend and Mobile fields. But we'll
              get a deeper dive into this later.
            </p>
          </div>

          <div className="text-end mt-30">
            <p className="leading-25 text-6xl font-semibold">
              My Education Journey
            </p>
            <p className="text-2xl font-light">
              I am currently a pursuing a Bachelor's Degree in Computer Science
              at Sunway University, Malaysia.
            </p>
          </div>

          {/* Education Timeline */}
        </div>
      </div>
    </main>
  );
}

export default App;
