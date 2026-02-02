import { MdWeb } from "react-icons/md";
import "./App.css";
import emailjs from "@emailjs/browser";
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
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
  SiSupabase,
  SiMongodb,
  SiJetpackcompose,
  SiFlutter,
  SiExpo,
  SiVite,
  SiGooglegemini,
  SiGooglemaps,
  SiJsonwebtokens,
  SiNpm,
  SiLinkedin,
  SiGmail,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { PiDeviceMobileSpeakerLight } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import { FaCubes, FaDatabase, FaRegCopyright } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { GrCubes } from "react-icons/gr";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import { LiaSpinnerSolid } from "react-icons/lia";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

function App() {
  // Setting Hero Header
  const headers = [
    "Student Developer",
    "Web and Mobile Developer",
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
    [<FaCubes />, "VBA"],
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
    [<SiNpm />, "NPM"],
    [<SiFigma />, "Figma"],
    [<SiCanva />, "Canva"],
    [<SiVercel />, "Vercel"],
    [<SiCloudflare />, "Cloudflare"],
  ];

  const web = [
    [<SiReact />, "ReactJS"],
    [<SiNextdotjs />, "NextJS"],
    [<SiVite />, "Vite"],
    [<SiExpress />, "ExpressJS"],
    [<SiNodedotjs />, "NodeJS"],
    [<SiJsonwebtokens />, "JSON Web Token"],
    [<SiTailwindcss />, "TailwindCSS"],
    [<SiFirebase />, "Firebase"],
    [<SiSupabase />, "Supabase"],
    [<SiMongodb />, "MongoDB"],
  ];

  const mobile = [
    [<TbBrandReactNative />, "React Native"],
    [<SiJetpackcompose />, "Jetpack Compose"],
    [<SiFlutter />, "Flutter"],
    [<SiExpo />, "Expo"],
  ];

  const eduserve = [
    [<SiReact />, "ReactJS"],
    [<SiVite />, "Vite"],
    [<SiTailwindcss />, "TailwindCSS"],
    [<TbBrandFramerMotion />, "Framer Motion"],
    [<SiHtml5 />, "HTML"],
    [<SiCss3 />, "CSS"],
  ];

  const suiRankup = [
    [<SiReact />, "ReactJS"],
    [<SiTailwindcss />, "TailwindCSS"],
    [<CiDroplet />, "Sui Move"],
    [<SiVercel />, "Vercel"],
    [<GrCubes />, "Web3"],
    [<SiVite />, "Vite"],
  ];

  const kitalearn = [
    [<SiFlutter />, "Flutter"],
    [<SiFirebase />, "Firebase"],
    [<SiGooglegemini />, "Google Gemini API"],
  ];

  const wakemeup = [
    [<TbBrandReactNative />, "React Native"],
    [<SiExpo />, "Expo"],
    [<SiExpress />, "ExpressJS"],
    [<SiNodedotjs />, "NodeJS"],
    [<SiJsonwebtokens />, "JSON Web Token"],
    [<FaDatabase />, "NeonDB"],
    [<SiGooglemaps />, "Google Maps API"],
  ];

  const portfolio = [
    [<SiReact />, "ReactJS"],
    [<SiTailwindcss />, "TailwindCSS"],
    [<SiVite />, "Vite"],
  ];

  const [contactButtonMessage, setContactButtonMessage] = useState([
    "Drop A Message",
    <AiOutlineSend />,
  ]);

  const [contactButtonDisabled, setContactButtonDisabled] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setContactButtonDisabled(true);
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

    setContactButtonMessage(["Sending Message ...", <></>]);

    // Automate Email
    try {
      emailjs.init({ publicKey: publicKey });
      let response = await emailjs.sendForm(serviceID, templateID, e.target);
      if (response.status == 200) {
        setContactButtonMessage(["Message Sent", <TiTick />]);
      }
    } catch (_) {
      setContactButtonMessage(["Try Again", <RxCross1 />]);
    }

    setTimeout(() => {
      setContactButtonMessage(["Drop A Message", <AiOutlineSend />]);
    }, 500);

    setContactButtonDisabled(false);

    // Reset Fields
    name.value = "";
    email.value = "";
    message.value = "";
  }

  // Scroll Behaviour
  function scrollToHero() {
    document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
  }

  function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  }

  function scrollToSkills() {
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
  }

  function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }

  function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="bg-zinc-900 w-screen overflow-clip min-h-full zalando-sans tracking-tight text-white ">
      {/* Nav */}
      <nav className="w-full p-8 md:px-50 flex flex-col lg:flex-row items-center lg:justify-between text-xl md:text-2xl absolute top-0 ">
        <button
          className="hidden md:block hover:cursor-pointer"
          onClick={() => scrollToHero()}
        >
          <p className="text-3xl font-semibold">Tan Wen Zhe</p>
        </button>
        <ul className="flex flex-col items-center gap-2 md:gap-4 md:flex-row font-light ">
          <li>
            <button
              className="hover:cursor-pointer"
              onClick={() => scrollToAbout()}
            >
              About
            </button>
          </li>
          <li>
            <button
              className="hover:cursor-pointer"
              onClick={() => scrollToSkills()}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className="hover:cursor-pointer"
              onClick={() => scrollToProjects()}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className="hover:cursor-pointer"
              onClick={() => scrollToContact()}
            >
              Contact Me
            </button>
          </li>
        </ul>
      </nav>

      {/* Main Container */}
      <div className="p-4 px-20 w-full min-h-screen">
        {/* Hero */}
        <div
          id="hero"
          className="w-full items-center justify-center flex flex-col min-h-screen"
        >
          <ul className="text-4xl md:text-6xl lg:text-8xl flex text-center justify-center font-semibold h-12 md:h-18 lg:h-24 relative w-full">
            <li className="heroCaption absolute md:top-0">{headers[0]}</li>
            <li className="heroCaption absolute -top-10 sm:top-0">
              {headers[1]}
            </li>
            <li className="heroCaption absolute -top-10 sm:top-0">
              {headers[2]}
            </li>
          </ul>
          <p className="leading-5 md:leading-10 lg:leading-20 text-xl md:text-2xl lg:text-4xl text-zinc-500">
            Hi, I am Wen Zhe.
          </p>
          <button
            onClick={() => scrollToAbout()}
            className="group flex items-center gap-4 mt-4 rounded-4xl py-1 md:py-2 pl-6 bg-zinc-800 text-lg md:text-2xl transition-colors hover:cursor-pointer hover:text-black hover:bg-white duration-150 ease-in-out"
          >
            <p>Let's Go</p>
            <div className="text-xl p-2 rounded-4xl bg-white text-black self-end heroButton">
              <FaArrowRightLong />
            </div>
          </button>
        </div>

        {/* About Section*/}
        <div className="w-full flex flex-col min-h-screen" id="about">
          <p className="text-xl md:text-2xl lg:text-4xl font-light">About Me</p>
          <p className="leading-12 md:leading-30 text-4xl md:text-6xl lg:text-8xl font-semibold">
            Who Am I?
          </p>
          <div className="p-4">
            <p className="text-lg md:text-xl lg:text-2xl font-light">
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
              dive into this later. I am also Malaysian.
            </p>
          </div>

          <div className="text-start mt-5 md:mt-10">
            <p className="leading-15 md:leading-30 text-4xl md:text-6xl font-semibold">
              Education
            </p>
          </div>

          {/* Education Timeline */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 md:gap-10">
            <div className="flex-1 border-x-2 border-white  flex flex-col p-4 rounded-2xl hover:border-zinc-600 transition-colors ease-in-out duration-100">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Sunway University
              </h1>
              <p className="py-2 md:py-4 text-xl md:text-2xl font-medium">
                Bachelor of Science (Honours) in Computer Science
              </p>
              <p className="leading-5 text-xl md:text-2xl font-light text-zinc-500">
                September 2025 - September 2028
              </p>
            </div>

            <div className="flex-1 border-x-2 border-white flex flex-col p-4 rounded-2xl  hover:border-zinc-600 transition-colors ease-in-out duration-100">
              <h1 className="text-2xl md:text-3xl  font-semibold">
                Asia Pacific University of Technology and Innovation
              </h1>
              <p className="py-2 md:py-4 text-xl md:text-2xl font-medium">
                Foundation in Computing and Technology
              </p>
              <p className="leading-5 text-xl md:text-2xl font-light text-zinc-500">
                July 2024 - May 2025
              </p>
            </div>
          </div>

          <div className="mt-15">
            <p className="leading-10 md:leading-20 lg:leading-30 text-4xl md:text-6xl lg:text-8xl font-semibold text-center">
              My Interests
            </p>
            <p className="text-center text-xl md:text-2xl lg:text-4xl font-light">
              There has to be more in life than coding, <em>right?</em>
            </p>

            {/* Aesthetic Container */}
            <div className="flex flex-col lg:flex-row flex-wrap gap-2.5 mt-8">
              <div className="flex-2 flex flex-col gap-3">
                <div className="rounded-xl bg-zinc-800 p-4 px-6">
                  <p className="text-2xl md:text-3xl font-semibold">
                    Artists I've Been into Lately
                  </p>
                  <p className="leading-8 md:leading-10 text-xl md:text-2xl font-light">
                    I mainly listen to Indie, sometimes C-Pop or Hip Hop.
                  </p>

                  <div className="flex flex-col md:flex-row gap-8 mt-2 flex-wrap">
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="w-2/3 md:w-full self-center aspect-square">
                        <img
                          className="rounded-md w-full h-full object-cover"
                          src="/malcolmTodd.png"
                        />
                      </div>

                      <a
                        href="https://open.spotify.com/artist/7eKkW1zo5uzW8kUntiiBvz?si=gs3p9TeMSeGtAjlY2cFyOg"
                        target="_blank"
                      >
                        <div className="flex flex-row items-center justify-center md:gap-2 bg-zinc-700 rounded-2xl py-1 pl-5 hover:bg-black hover:cursor-pointer transition duration-200">
                          <p className="text-xl md:text-2xl font-light text-center lg:text-start">
                            Malcolm Todd
                          </p>
                          <img
                            className="w-12 aspect-square lg:self-end"
                            src="/spotify.svg"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="w-2/3 md:w-full self-center aspect-square">
                        <img
                          className="rounded-md w-full h-full object-cover"
                          src="/menITrust.jpg"
                        />
                      </div>

                      <a
                        href="https://open.spotify.com/artist/3zmfs9cQwzJl575W1ZYXeT?si=wmDpwCzNTb6UzRF2d-nylQ"
                        target="_blank"
                      >
                        <div className="flex flex-row items-center justify-center md:gap-2 bg-zinc-700 rounded-2xl py-1 pl-5 hover:bg-black hover:cursor-pointer transition duration-200">
                          <p className="text-xl md:text-2xl font-light text-center lg:text-start">
                            Men I Trust
                          </p>
                          <img
                            className="w-12 aspect-square lg:self-end"
                            src="/spotify.svg"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="flex flex-col gap-5 flex-1">
                      <div className="w-2/3 md:w-full self-center aspect-square">
                        <img
                          className="rounded-md w-full h-full object-cover"
                          src="/oasis.jpg"
                        />
                      </div>

                      <a
                        href="https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4?si=x2lWVhKlSJSN4h4Lm49YdA"
                        target="_blank"
                      >
                        <div className="flex flex-row items-center justify-center md:gap-2 bg-zinc-700 rounded-2xl py-1 pl-5 hover:bg-black hover:cursor-pointer transition duration-200">
                          <p className="text-xl md:text-2xl font-light text-center lg:text-start">
                            Oasis
                          </p>
                          <img
                            className="w-12 aspect-square lg:self-end"
                            src="/spotify.svg"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Books */}
                <div className="rounded-md bg-zinc-800 p-4 px-6">
                  <p className="text-2xl md:text-3xl font-semibold">
                    I Love Reading
                  </p>
                  <p className="leading-8 md:leading-10 text-xl md:text-2xl font-light">
                    It makes me look educated too.
                  </p>

                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <div className="flex flex-col flex-1  text-center">
                      <div className="w-2/3 md:w-full self-center aspect-square">
                        <img
                          src="/psychologyOfmoney.jpg"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <p className="text-xl md:text-2xl font-semibold mt-2 leading-8 md:leading-10">
                        The Psychology of Money
                      </p>
                      <p className="text-xl md:text-2xl font-light">
                        Morgan Housel
                      </p>
                    </div>

                    <div className="flex flex-col flex-1 text-center">
                      <div className="w-2/3 md:w-full self-center aspect-square">
                        <img
                          src="/artOfNotGivingAF.jpg"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <p className="text-xl md:text-2xl font-semibold mt-2 leading-8 md:leading-10">
                        The Art of Not Giving a F*ck
                      </p>
                      <p className="text-xl md:text-2xl font-light">
                        Mark Manson
                      </p>
                    </div>

                    <div className="flex flex-col flex-1 text-center">
                      <div className="w-2/3 md:w-full self-center aspect-square">
                        <img
                          src="/deepWork.jpeg"
                          className="w-full h-full rounded-xl object-cover"
                        />
                      </div>
                      <p className="text-xl md:text-2xl font-semibold mt-2 leading-8 md:leading-10">
                        Deep Work
                      </p>
                      <p className="text-xl md:text-2xl font-light">
                        Cal Newport
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Movies */}
              <div className="rounded-xl bg-zinc-800 p-4 px-6 flex-1">
                <p className="text-2xl md:text-3xl font-semibold">
                  Movies or TV Shows
                </p>
                <p className="leading-8 md:leading-10 text-xl md:text-2xl font-light">
                  Films that made me reflect on myself.
                </p>

                <div className="flex flex-col mt-2 gap-8">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <img
                        src="/nge.jpeg"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                    <div className="flex-2 flex-col flex gap-2">
                      <p className="text-2xl md:text-3xl font-medium">
                        Neon Genesis Evangelion
                      </p>
                      <p className="text-lg md:text-xl font-light leading-6">
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

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <img
                        src="/500dos.jpg"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                    <div className="flex-2 flex-col flex gap-2">
                      <p className="text-2xl md:text-3xl font-medium">
                        (500) Days of Summer
                      </p>
                      <p className="text-lg md:text-xl font-light leading-6">
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

                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <img
                        src="/houseMd.jpg"
                        className="h-full w-full rounded-xl"
                      />
                    </div>
                    <div className="flex-2 flex-col flex gap-2">
                      <p className="text-2xl md:text-3xl font-medium">
                        House M.D.
                      </p>
                      <p className="text-lg md:text-xl font-light leading-6">
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

        <div className="w-full flex flex-col mt-15 min-h-screen" id="skills">
          <p className="text-xl md:text-2xl lg:text-4xl font-light">
            Experiences
          </p>
          <p className="leading-12 md:leading-30 text-4xl md:text-6xl lg:text-8xl font-semibold">
            Technical Skills
          </p>
          <p className="p-4 text-lg md:text-xl lg:text-2xl font-light">
            My projects are a mix between hobby projects as well as hackathon
            prototypes. In this section, I'll cover the work I've done, tools,
            languages and frameworks I have experience with. I have dabbled in
            web and mobile app development for the most part, but I'm planning
            to look into AI frameworks such as PyTorch and Scikit-Learn soon.
          </p>
          {/* Container */}
          <div className="flex flex-col flex-wrap mt-5 px-4 gap-3">
            <div className="flex flex-1 flex-col md:flex-row flex-wrap gap-2">
              <div className="flex flex-col bg-zinc-800 border-2 border-zinc-500 p-4 rounded-xl flex-1 gap-3 ">
                <div className="flex items-center gap-4 text-2xl md:text-4xl">
                  <FaCode />
                  <h1 className="leading-8 md:leading-10 font-semibold">
                    Languages
                  </h1>
                </div>
                {/* Language Containers */}
                <div className="flex flex-wrap gap-2 items-start">
                  {languages.map((v, k) => (
                    <div
                      key={k}
                      className="flex items-center text-md md:text-lg gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150"
                    >
                      <p>{v[0]}</p>
                      <p className="font-light ">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col bg-zinc-800 border-2 border-zinc-500 p-4 rounded-xl flex-1 gap-3 ">
                <div className="flex items-center gap-4 text-2xl md:text-4xl">
                  <RiToolsLine />
                  <h1 className="leading-8 md:leading-10 font-semibold">
                    Tools
                  </h1>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tools.map((v, k) => (
                    <div
                      key={k}
                      className="flex text-md md:text-lg items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150"
                    >
                      <p>{v[0]}</p>
                      <p>{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Row */}
            <div className="flex-1 flex flex-col md:flex-row flex-wrap gap-2">
              <div className="flex flex-col bg-zinc-800 border-2 border-zinc-500 p-4 rounded-xl flex-1 gap-3 ">
                <div className="flex items-center gap-4 text-2xl md:text-4xl">
                  <MdWeb />
                  <h1 className="leading-8 md:leading-10 font-semibold">
                    Web Development
                  </h1>
                </div>
                {/* Language Containers */}
                <div className="flex flex-wrap gap-2 items-start">
                  {web.map((v, k) => (
                    <div
                      key={k}
                      className="flex items-center text-md md:text-lg gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150"
                    >
                      <p>{v[0]}</p>
                      <p className="font-light ">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col bg-zinc-800 border-2 border-zinc-500 p-4 rounded-xl flex-1 gap-3 ">
                <div className="flex items-center gap-4 text-2xl md:text-4xl">
                  <PiDeviceMobileSpeakerLight />
                  <h1 className="leading-8 md:leading-10 font-semibold">
                    Mobile App Development
                  </h1>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mobile.map((v, k) => (
                    <div
                      key={k}
                      className="flex text-md md:text-lg  items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150"
                    >
                      <p>{v[0]}</p>
                      <p className="font-light ">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="mt-15" id="projects">
            <p className="leading-12 md:leading-30 text-4xl md:text-6xl lg:text-8xl font-semibold text-center">
              Work I've Done
            </p>
            <p className="text-center text-2xl md:text-4xl font-light">
              My Projects So Far
            </p>
          </div>

          <div className="flex flex-col items-center mt-10 gap-4">
            {/* First Project */}
            <div className="bg-zinc-800 p-4 px-4 rounded-xl w-full flex lg:flex-row flex-col gap-5 md:gap-10 border-2 border-zinc-500 hover:bg-zinc-700 transition-colors duration-100">
              <div className="flex-1 aspect-video">
                <img
                  src="/mecaEduserve.png"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-3">
                <div className="flex flex-row text-2xl md:text-3xl items-center gap-4">
                  <h1 className="leading-10 md:leading-15 font-semibold">
                    EduServe Business Website
                  </h1>
                  <a
                    className="text-xl md:text-2xl"
                    href="https://meca-eduserve.com/"
                    target="_blank"
                  >
                    <FiLink />
                  </a>
                </div>

                <p className="text-xl md:text-2xl font-light">
                  My first freelance work for a friend. Developed the website
                  based off Figma draft given by the designer. Responsive
                  website aimed to increase business outreach and build brand
                  image.
                </p>
                <div className="flex flex-wrap gap-2 items-start mt-auto py-2">
                  {eduserve.map((v, k) => (
                    <div
                      key={k}
                      className="flex items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150  text-md md:text-lg"
                    >
                      <p>{v[0]}</p>
                      <p className="font-light">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second Project */}
            <div className="bg-zinc-800 p-4 px-4 rounded-xl w-full flex lg:flex-row flex-col gap-5 md:gap-10 border-2 border-zinc-500 hover:bg-zinc-700 transition-colors duration-100">
              <div className="flex-1 aspect-video">
                <img
                  src="/suiRankup.png"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-3">
                <div className="flex flex-row text-2xl md:text-3xl items-center gap-4">
                  <h1 className="leading-10 md:leading-15 font-semibold">
                    Sui RankUp
                  </h1>
                  <a
                    className="text-xl md:text-2xl"
                    href="https://devmatch2-ch1ll-guys-prod.vercel.app/"
                    target="_blank"
                  >
                    <FiLink />
                  </a>
                  <a
                    className="text-xl md:text-2xl"
                    href="https://github.com/wz-Tan/devmatch2_Ch1llGuys"
                    target="_blank"
                  >
                    <SiGithub />
                  </a>
                </div>

                <p className="text-xl md:text-2xl font-light">
                  Web3-Integrated project for DevMatch 2025. An on-chain (SUI)
                  marketplace that levels up assets on NFT purchases and sales.
                  I wrote the smart contracts and integrated the endpoints with
                  the front-end written by my teammates. The website also
                  supports connecting with Slush wallets and minting your own
                  NFTs. My favourite hackathon yet.
                </p>
                <div className="flex flex-wrap gap-2 items-start mt-auto py-2">
                  {suiRankup.map((v, k) => (
                    <div
                      key={k}
                      className="flex items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150  text-md md:text-lg"
                    >
                      <p>{v[0]}</p>
                      <p className="font-light">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Third Project */}
            <div className="bg-zinc-800 p-4 px-4 rounded-xl w-full flex lg:flex-row flex-col gap-5 md:gap-10 border-2 border-zinc-500 hover:bg-zinc-700 transition-colors duration-100">
              <div className="flex-1 aspect-video">
                <img
                  src="/kitalearn.png"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-3">
                <div className="flex flex-row text-2xl md:text-3xl items-center gap-4">
                  <h1 className="leading-10 md:leading-15 font-semibold">
                    KitaLearn
                  </h1>

                  <a
                    className="text-xl md:text-2xl"
                    href="https://github.com/wz-Tan/kitahack_hackathon"
                    target="_blank"
                  >
                    <SiGithub />
                  </a>
                </div>

                <p className="text-xl md:text-2xl font-light">
                  KitaLearn is a project I did for KitaHack 2025, hosted by
                  Google Developer Groups on Campus (GDGOC) Malaysia. I targeted
                  the quality education track for this project. Essentially,
                  KitaLearn is a Flutter app that allows users to learn math by
                  generating a relevant syllabus based on the user's age and
                  country via Gemini API.
                </p>
                <div className="flex flex-wrap gap-2 items-start mt-auto py-2">
                  {kitalearn.map((v, k) => (
                    <div
                      key={k}
                      className="flex items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150  text-md md:text-lg"
                    >
                      <p>{v[0]}</p>
                      <p className="font-light">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fourth Project */}
            <div className="bg-zinc-800 p-4 px-4 rounded-xl w-full flex lg:flex-row flex-col gap-5 md:gap-10 border-2 border-zinc-500 hover:bg-zinc-700 transition-colors duration-100">
              <div className="flex-1 aspect-video">
                <img
                  src="/wakeMeUp.png"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-3">
                <div className="flex flex-row text-2xl md:text-3xl items-center gap-4">
                  <h1 className="leading-10 md:leading-15 font-semibold">
                    WakeMeUp
                  </h1>

                  <a
                    className="text-xl md:text-2xl"
                    href="https://github.com/wz-Tan/WakeMeUp"
                    target="_blank"
                  >
                    <SiGithub />
                  </a>
                </div>

                <p className="text-xl md:text-2xl font-light">
                  Location-based alarm written in React Native. Inspiration came
                  from one time I overslept my stop. Provided a great experience
                  for working with backend development and mobile UI design.
                </p>
                <div className="flex flex-wrap gap-2 items-start mt-auto py-2">
                  {wakemeup.map((v, k) => (
                    <div
                      key={k}
                      className="text-md md:text-lg  flex items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150 "
                    >
                      <p>{v[0]}</p>
                      <p className="font-light">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Fifth Project */}
            <div className="bg-zinc-800 p-4 px-4 rounded-xl w-full flex lg:flex-row flex-col gap-5 md:gap-10 border-2 border-zinc-500 hover:bg-zinc-700 transition-colors duration-100">
              <div className="flex-1 aspect-video">
                <img
                  src="/portfolio.png"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="flex flex-col flex-3">
                <div className="flex flex-row text-2xl md:text-3xl items-center gap-4">
                  <h1 className="leading-10 md:leading-15 font-semibold">
                    Portfolio Website
                  </h1>

                  <a
                    className="text-2xl"
                    href="https://github.com/wz-Tan/Portfolio_2026"
                    target="_blank"
                  >
                    <SiGithub />
                  </a>
                </div>

                <p className="text-2xl font-light">
                  ...The website you're looking at right now :D
                </p>
                <div className="flex flex-wrap gap-2 items-start mt-auto py-2">
                  {portfolio.map((v, k) => (
                    <div
                      key={k}
                      className="flex items-center gap-2 p-2 px-4 rounded-3xl bg-white/10 border-white h-fit w-fit hover:-translate-y-3 transition duration-150  text-md md:text-lg"
                    >
                      <p>{v[0]}</p>
                      <p className="font-light">{v[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Me */}
        <div id="contact" className="w-full flex flex-col h-fit mt-20">
          <p className="text-xl md:text-2xl lg:text-4xl font-light">Contact Me</p>
          <p className="leading-12 md:leading-30 text-4xl md:text-6xl lg:text-8xl font-semibold">Let's Talk!</p>
          <p className="p-2 text-lg md:text-xl lg:text-2xl font-light">
            I'm open to freelance work as well as job opportunities.
          </p>

          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="flex flex-col  p-2 rounded-xl mt-2 h-fit gap-4"
          >
            <div className="flex flex-col gap-2">
              <label
                className="leading-8 md:leading-10 text-xl md:text-2xl font-semibold"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                className="border-2 border-zinc-600 rounded-xl p-2 px-4 text-xl md:text-2xl font-light focus:outline-none focus:border-zinc-400"
                id="name"
                name="name"
                type="text"
                placeholder="What should I call you?"
                required
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="leading-8 md:leading-10 text-xl md:text-2xl font-semibold"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                className="border-2 border-zinc-600 rounded-xl p-2 px-4 text-xl md:text-2xl font-light focus:outline-none focus:border-zinc-400"
                id="email"
                name="email"
                type="email"
                placeholder="What's your email address?"
                required
              ></input>
            </div>

            <div className="flex flex-col gap-2">
              <label
                className="leading-8 md:leading-10 text-xl md:text-2xl font-semibold"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border-2 border-zinc-600 rounded-xl p-2 px-4 text-xl md:text-2xl font-light focus:outline-none focus:border-zinc-400"
                rows={4}
                placeholder="What's up?"
                required
              ></textarea>
            </div>

            <button
              disabled={contactButtonDisabled}
              className="w-fit flex text-xl md:text-2xl mt-4 items-center text-zinc-200 justify-center gap-4 self-center border-zinc-400 border-2 rounded-4xl p-2 px-6 text-center transition-colors hover:cursor-pointer hover:text-black hover:bg-slate-200 duration-150 ease-in-out"
            >
              <p className="font-light">{contactButtonMessage[0]}</p>
              <p>{contactButtonMessage[1]}</p>
            </button>
          </form>

          {/* Footer */}
          <div className="flex flex-col md:flex-row items-center px-4 mt-30 mb-10 gap-4 md:gap-0">
            <div className="flex-1 flex flex-row gap-4 text-2xl md:text-4xl">
              <a href="https://github.com/wz-Tan" target="_blank">
                <SiGithub />
              </a>
              <a href="www.linkedin.com/in/wen-zhe-tan" target="_blank">
                <SiLinkedin />
              </a>
              <a target="_blank" href="mailto:wztan.dev@gmail.com">
                <SiGmail />
              </a>
            </div>

            <button
              className="flex-1 hover:cursor-pointer"
              onClick={() => scrollToHero()}
            >
              <p className="text-2xl md:text-3xl font-light text-center text-zinc-600">
                Back to Top
              </p>
            </button>

            <div className="flex-1 flex flex-row gap-4 text-2xl md:text-4xl justify-end items-center">
              <FaRegCopyright />
              <p className="font-semibold">Tan Wen Zhe, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
