import "./App.css";
import { FaArrowRightLong, FaCode, FaLinux, FaWindows } from "react-icons/fa6";
import { RiToolsLine } from "react-icons/ri";
import {
  SiTypescript,
  SiJavascript,
  SiKotlin,
  SiPython,
  SiDart,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiMysql,
  SiPostman,
  SiAndroidstudio,
  SiZedindustries,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiVercel,
  SiCloudflare,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

function App() {
  // Setting Hero Header
  const headers = [
    "Student Developer",
    "Web and Mobile Development",
    "Part-Time Freelancer",
  ];

  const languages = [
    [<SiJavascript />, "Javascript"],
    [<SiTypescript />, "Typescript"],
    [<SiKotlin />, "Kotlin"],
    [<SiPython />, "Python"],
    [<SiDart />, "Dart"],
    [<SiHtml5 />, "HTML"],
    [<SiCss3 />, "CSS"],
    [<SiCplusplus />, "C++"],
    [<SiMysql />, "MySQL"],
  ];

  const tools = [
    [<FaLinux />, "Linux"],
    [<FaWindows />, "Windows"],
    [<SiPostman />, "Postman"],
    [<SiAndroidstudio />, "Android Studio"],
    [<VscVscode />, "VS Code"],
    [<SiZedindustries />, "Zed"],
    [<SiGit />, "Git"],
    [<SiGithub />, "GitHub"],
    [<SiFigma />, "Figma"],
    [<SiCanva />, "Canva"],
    [<SiVercel />, "Vercel"],
    [<SiCloudflare />, "Cloudflare"],
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
              have been self-teaching all things programming since I was 18,
              which is in 2024. I started off by learning C++ since I originally
              wanted to do Game Development. I eventually stumbled across
              Leetcoding and SQL, although I had no idea what I was really doing
              at that time. Anyway, I started to get better and learn more
              technologies through opportunities like hackathons and freelancing
              gigs. I have shifted between different technologies and fields,
              looking for what works best for me. As of now, I have more than a
              year's worth of experience working with various technologies,
              notably in the Frontend and Mobile fields. But we'll get a deeper
              dive into this later.
            </p>
          </div>

          <div className="text-start mt-10">
            <p className="leading-30 text-6xl font-semibold">Education</p>
          </div>

          {/* Education Timeline */}
          <div className="flex flex-wrap gap-10">
            <div className="flex-1 border-x-2 border-white  flex flex-col p-4 rounded-2xl">
              <h1 className="text-3xl font-semibold">Sunway University</h1>
              <p className="leading-15 text-2xl font-medium">
                Bachelor of Science (Honours) in Computer Science
              </p>
              <p className="leading-5 text-2xl font-light text-zinc-500">
                September 2025 - September 2028
              </p>
            </div>

            <div className="flex-1 border-x-2 border-white flex flex-col p-4 rounded-2xl">
              <h1 className="text-3xl font-semibold">
                Asia Pacific University of Technology and Innovation
              </h1>
              <p className="leading-15 text-2xl font-medium">
                Foundation in Computing and Technology
              </p>
              <p className="leading-5 text-2xl font-light text-zinc-500">
                July 2024 - May 2025
              </p>
            </div>
          </div>

          <div className="mt-15">
            <p className="leading-30 text-8xl font-semibold text-center">
              My Interests
            </p>
            <p className="text-center text-4xl font-light">
              There has to be more in life than coding, <em>right?</em>
            </p>

            {/* Aesthetic Container */}
            <div className="flex flex-wrap gap-2.5 mt-8">
              <div className="flex-2 flex flex-col gap-3">
                <div className="rounded-xl bg-zinc-800 p-4 px-6">
                  <p className="text-3xl font-semibold">
                    Artists I've Been into Lately
                  </p>
                  <p className="leading-10 text-2xl font-light">
                    I mainly listen to Indie, sometimes C-Pop or Hip Hop.
                  </p>

                  <div className="flex gap-8 mt-2 flex-wrap">
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="w-full aspect-square">
                        <img
                          className="rounded-md w-full h-full object-cover"
                          src="/malcolmTodd.png"
                        />
                      </div>

                      <a
                        href="https://open.spotify.com/artist/7eKkW1zo5uzW8kUntiiBvz?si=gs3p9TeMSeGtAjlY2cFyOg"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-2 bg-zinc-700 rounded-2xl py-1 pl-5 hover:bg-black hover:cursor-pointer transition duration-200">
                          <p className="text-2xl font-light">Malcolm Todd</p>
                          <img
                            className="w-12 aspect-square self-end"
                            src="/spotify.svg"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="w-full aspect-square">
                        <img
                          className="rounded-md w-full h-full object-cover"
                          src="/menITrust.jpg"
                        />
                      </div>

                      <a
                        href="https://open.spotify.com/artist/3zmfs9cQwzJl575W1ZYXeT?si=wmDpwCzNTb6UzRF2d-nylQ"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-2 bg-zinc-700 rounded-2xl py-1 pl-5 hover:bg-black hover:cursor-pointer transition duration-200">
                          <p className="text-2xl font-light">Men I Trust</p>
                          <img
                            className="w-12 aspect-square self-end"
                            src="/spotify.svg"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="w-full aspect-square">
                        <img
                          className="rounded-md w-full h-full object-cover"
                          src="/oasis.jpg"
                        />
                      </div>

                      <a
                        href="https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4?si=x2lWVhKlSJSN4h4Lm49YdA"
                        target="_blank"
                      >
                        <div className="flex items-center justify-center gap-2 bg-zinc-700 rounded-2xl py-1 pl-5 hover:bg-black hover:cursor-pointer transition duration-200">
                          <p className="text-2xl font-light">Oasis</p>
                          <img
                            className="w-12 aspect-square self-end"
                            src="/spotify.svg"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Books */}
                <div className="rounded-md bg-zinc-800 p-4 px-6">
                  <p className="text-3xl font-semibold ">I Love Reading</p>
                  <p className="leading-10 text-2xl font-light">
                    It makes me look educated too.
                  </p>

                  <div className="flex flex-row gap-4 mt-2">
                    <div className="flex flex-col flex-1  text-center">
                      <div className="w-full aspect-square">
                        <img
                          src="/psychologyOfmoney.jpg"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <p className="text-2xl font-semibold mt-2 leading-10">
                        The Psychology of Money
                      </p>
                      <p className="text-2xl font-light">Morgan Housel</p>
                    </div>

                    <div className="flex  flex-col flex-1 text-center">
                      <div className="w-full aspect-square">
                        <img
                          src="/artOfNotGivingAF.jpg"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <p className="text-2xl font-semibold mt-2 leading-10">
                        The Art of Not Giving a F*ck
                      </p>
                      <p className="text-2xl font-light">Mark Manson</p>
                    </div>

                    <div className="flex flex-col flex-1 text-center">
                      <div className="w-full aspect-square">
                        <img
                          src="/deepWork.jpeg"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <p className="text-2xl font-semibold mt-2 leading-10">
                        Deep Work
                      </p>
                      <p className="text-2xl font-light">Cal Newport</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Movies */}
              <div className="rounded-xl bg-zinc-800 p-4 px-6 flex-1">
                <p className="text-3xl font-semibold">Movies or TV Shows</p>
                <p className="leading-10 text-2xl font-light">
                  Films that made me reflect on myself.
                </p>

                <div className="flex flex-col mt-2 gap-8">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1">
                      <img
                        src="/nge.jpeg"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                    <div className="flex-2 flex-col flex gap-2">
                      <p className="text-3xl font-medium">
                        Neon Genesis Evangelion
                      </p>
                      <p className="text-xl font-light leading-6 ">
                        By deploying a few of high school teenagers to save the
                        world, the series looks into how human interactions
                        cause pain to one another with their own baggages.{" "}
                        <br />
                        <br />
                        The core concept of the show is the Hedgehog's Dilemma,
                        which states that humans hurt each other, yet the
                        connections we make are worth the pain it brings.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1">
                      <img
                        src="/500dos.jpg"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                    <div className="flex-2 flex-col flex gap-2">
                      <p className="text-3xl font-medium">
                        (500) Days of Summer
                      </p>
                      <p className="text-xl font-light leading-6 ">
                        My favourite Rom-Com, though it's more of a horror
                        movie. The film practically discusses a dysfunctional
                        relationship between Summer who wasn't willing to
                        commit, and Tom who wasn't willing to let go.
                        <br />
                        <br />
                        We all see things that we want to see. We should learn
                        to gauge things and people as a whole, rather than only
                        the parts that serve us.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1">
                      <img
                        src="/houseMd.jpg"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                    <div className="flex-2 flex-col flex gap-2">
                      <p className="text-3xl font-medium">House M.D.</p>
                      <p className="text-xl font-light leading-6 ">
                        House M.D. is a show that explores the life of Dr.
                        House, who is a Vicodin addict and struggles with
                        interpersonal relationships due to a fear of
                        vulnerability.
                        <br />
                        <br />
                        Though the humour in the show was amazing, the show was
                        carried by superb acting by the cast. Problems don't go
                        away just because we ignore them, instead they manifest
                        in other areas of life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Projects */}

        <div className="w-full flex flex-col mt-15 min-h-screen">
          <p className="text-4xl font-light">Experiences</p>
          <p className="leading-30 text-8xl font-semibold">Technical Skills</p>
          <p className="p-4 text-2xl font-light">
            My projects are a mix between hobby projects as well as hackathon
            prototypes. In this section, I'll cover the work I've done, tools,
            languages and frameworks I have experience with.
          </p>
          {/* Container */}
          <div className="flex flex-col flex-wrap mt-5 px-4">
            <div className="flex flex-row flex-wrap gap-2">
              <div className="flex flex-col bg-zinc-800 border-2 border-zinc-500 p-4 rounded-xl flex-1 gap-3 ">
                <div className="flex items-center gap-4">
                  <FaCode className="text-4xl" />
                  <h1 className="leading-10 text-4xl font-semibold">
                    Languages
                  </h1>
                </div>
                {/* Language Containers */}
                <div className="flex flex-wrap gap-2 items-start">
                  {languages.map((v, k) => (
                    <div
                      key={k}
                      className="flex items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit"
                    >
                      <p className="text-lg ">{v[0]}</p>
                      <p className="text-lg font-light ">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col bg-zinc-800 border-2 border-zinc-500 p-4 rounded-xl flex-1 gap-3 ">
                <div className="flex items-center gap-4">
                  <RiToolsLine className="text-4xl" />
                  <h1 className="leading-10 text-4xl font-semibold">Tools</h1>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((v, k) => (
                    <div
                      key={k}
                      className="flex items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150"
                    >
                      <p className="text-lg ">{v[0]}</p>
                      <p className="text-lg font-light ">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
