import "./App.css";
import { FaArrowRightLong } from "react-icons/fa6";

function App() {
  // Setting Hero Header
  const headers = [
    "Student Developer.",
    "Web and Mobile Development.",
    "Part-Time Freelancer.",
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
      <div className="p-2 w-full min-h-screen">
        {/* Hero */}
        <div className="w-full items-center justify-center flex flex-col h-screen">
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
      </div>
    </main>
  );
}

export default App;
