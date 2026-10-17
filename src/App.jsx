import { useEffect, useRef, useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";
import { Analytics } from "@vercel/analytics/react";
import { MdWeb } from "react-icons/md";
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
  SiGo,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { PiDeviceMobileSpeakerLight } from "react-icons/pi";
import { FiLink } from "react-icons/fi";
import { FaCubes, FaDatabase, FaRegCopyright } from "react-icons/fa";
import { CiDroplet } from "react-icons/ci";
import { GrCubes } from "react-icons/gr";
import { AiOutlineSend } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */
const ROLES = [
  "STUDENT DEVELOPER",
  "WEB AND MOBILE DEVELOPER",
  "PART-TIME FREELANCER",
];

const GLYPHS = "!<>-_\\/[]{}=+*^?#0123456789";

const NAV = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
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
  [<SiGo/>,"Go"],
  [<SiExpress />, "ExpressJS"],
  [<SiNodedotjs />, "NodeJS"],
  [<SiJsonwebtokens />, "JSON Web Token"],
  [<SiTailwindcss />, "TailwindCSS"],
  [<SiFirebase />, "Firebase"],
  [<SiSupabase />, "Supabase"],
];

const mobile = [
  [<TbBrandReactNative />, "React Native"],
  [<SiJetpackcompose />, "Jetpack Compose"],
  [<SiFlutter />, "Flutter"],
  [<SiExpo />, "Expo"],
];

const skillGroups = [
  { icon: <FaCode />, title: "Languages", items: languages },
  { icon: <RiToolsLine />, title: "Tools", items: tools },
  { icon: <MdWeb />, title: "Web Development", items: web },
  { icon: <PiDeviceMobileSpeakerLight />, title: "Mobile App Development", items: mobile },
];

const projects = [
  {
    title: "EduServe Business Website",
    img: "/mecaEduserve.png",
    live: "https://meca-eduserve.com/",
    desc: "My first freelance work for a friend. Developed the website based off Figma draft given by the designer. Responsive website aimed to increase business outreach and build brand image.",
    stack: [
      [<SiReact />, "ReactJS"],
      [<SiVite />, "Vite"],
      [<SiTailwindcss />, "TailwindCSS"],
      [<TbBrandFramerMotion />, "Framer Motion"],
      [<SiHtml5 />, "HTML"],
      [<SiCss3 />, "CSS"],
    ],
  },
  {
    title: "Sui RankUp",
    img: "/suiRankup.png",
    live: "https://devmatch2-ch1ll-guys-prod.vercel.app/",
    repo: "https://github.com/wz-Tan/devmatch2_Ch1llGuys",
    desc: "Web3-Integrated project for DevMatch 2025. An on-chain (SUI) marketplace that levels up assets on NFT purchases and sales. I wrote the smart contracts and integrated the endpoints with the front-end written by my teammates. The website also supports connecting with Slush wallets and minting your own NFTs. My favourite hackathon yet.",
    stack: [
      [<SiReact />, "ReactJS"],
      [<SiTailwindcss />, "TailwindCSS"],
      [<CiDroplet />, "Sui Move"],
      [<SiVercel />, "Vercel"],
      [<GrCubes />, "Web3"],
      [<SiVite />, "Vite"],
    ],
  },
  {
    title: "KitaLearn",
    img: "/kitalearn.png",
    repo: "https://github.com/wz-Tan/kitahack_hackathon",
    desc: "KitaLearn is a project I did for KitaHack 2025, hosted by Google Developer Groups on Campus (GDGOC) Malaysia. I targeted the quality education track for this project. Essentially, KitaLearn is a Flutter app that allows users to learn math by generating a relevant syllabus based on the user's age and country via Gemini API.",
    stack: [
      [<SiFlutter />, "Flutter"],
      [<SiFirebase />, "Firebase"],
      [<SiGooglegemini />, "Google Gemini API"],
    ],
  },
  {
    title: "WakeMeUp",
    img: "/wakeMeUp.png",
    repo: "https://github.com/wz-Tan/WakeMeUp",
    desc: "Location-based alarm written in React Native. Inspiration came from one time I overslept my stop. Provided a great experience for working with backend development and mobile UI design.",
    stack: [
      [<TbBrandReactNative />, "React Native"],
      [<SiExpo />, "Expo"],
      [<SiExpress />, "ExpressJS"],
      [<SiNodedotjs />, "NodeJS"],
      [<SiJsonwebtokens />, "JSON Web Token"],
      [<FaDatabase />, "NeonDB"],
      [<SiGooglemaps />, "Google Maps API"],
    ],
  },
  {
    title: "Portfolio Website",
    img: "/portfolio.png",
    repo: "https://github.com/wz-Tan/Portfolio_2026",
    desc: "...The website you're looking at right now :D",
    stack: [
      [<SiReact />, "ReactJS"],
      [<SiTailwindcss />, "TailwindCSS"],
      [<SiVite />, "Vite"],
    ],
  },
];

const education = [
  {
    school: "Sunway University",
    degree: "Bachelor of Science (Honours) in Computer Science",
    date: "September 2025 - September 2028",
  },
  {
    school: "Asia Pacific University of Technology and Innovation",
    degree: "Foundation in Computing and Technology",
    date: "July 2024 - May 2025",
  },
];

const artists = [
  {
    name: "Malcolm Todd",
    img: "/malcolmTodd.png",
    href: "https://open.spotify.com/artist/7eKkW1zo5uzW8kUntiiBvz?si=gs3p9TeMSeGtAjlY2cFyOg",
  },
  {
    name: "Men I Trust",
    img: "/menITrust.jpg",
    href: "https://open.spotify.com/artist/3zmfs9cQwzJl575W1ZYXeT?si=wmDpwCzNTb6UzRF2d-nylQ",
  },
  {
    name: "Oasis",
    img: "/oasis.jpg",
    href: "https://open.spotify.com/artist/2DaxqgrOhkeH0fpeiQq2f4?si=x2lWVhKlSJSN4h4Lm49YdA",
  },
];

const books = [
  { title: "The Psychology of Money", author: "Morgan Housel", img: "/psychologyOfmoney.jpg" },
  { title: "The Art of Not Giving a F*ck", author: "Mark Manson", img: "/artOfNotGivingAF.jpg" },
  { title: "Deep Work", author: "Cal Newport", img: "/deepWork.jpeg" },
];

const movies = [
  {
    title: "Neon Genesis Evangelion",
    img: "/nge.jpeg",
    paras: [
      "By deploying a few of high school teenagers to save the world, the series looks into how human interactions cause pain to one another with their own baggages.",
      "The core concept of the show is the Hedgehog's Dilemma, which states that humans hurt each other, yet the connections we make are worth the pain it brings.",
    ],
  },
  {
    title: "(500) Days of Summer",
    img: "/500dos.jpg",
    paras: [
      "My favourite Rom-Com, though it's more of a horror movie. The film practically discusses a dysfunctional relationship between Summer who wasn't willing to commit, and Tom who wasn't willing to let go.",
      "We all see things that we want to see. We should learn to gauge things and people as a whole, rather than only the parts that serve us.",
    ],
  },
  {
    title: "House M.D.",
    img: "/houseMd.jpg",
    paras: [
      "House M.D. is a show that explores the life of Dr. House, who is a Vicodin addict and struggles with interpersonal relationships due to a fear of vulnerability.",
      "Though the humour in the show was amazing, the show was carried by superb acting by the cast. Problems don't go away just because we ignore them, instead they manifest in other areas of life.",
    ],
  },
];

const ABOUT_TEXT =
  "Hello! My name is Wen Zhe, or you could also call me Nathan. I have been self-teaching all things programming since I was 18, which is in 2024. I started off by learning C++ since I originally wanted to do Game Development. I eventually stumbled across Leetcoding and SQL, although I had no idea what I was really doing at that time. Anyway, I started to get better and learn more technologies through opportunities like hackathons and freelancing gigs. I have shifted between different technologies and fields, looking for what works best for me. As of now, I have more than a year's worth of experience working with various technologies, notably in the Frontend and Mobile fields. But we'll get a deeper dive into this later. I am also Malaysian.";

const SKILLS_TEXT =
  "My projects are a mix between hobby projects as well as hackathon prototypes. In this section, I'll cover the work I've done, tools, languages and frameworks I have experience with. I have dabbled in web and mobile app development for the most part, but I'm planning to look into AI frameworks such as PyTorch and Scikit-Learn soon.";

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */
function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

// Cycles through words, decoding each one from random glyphs.
function useScramble(words, hold = 2800) {
  const [text, setText] = useState(words[0]);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let i = 0;
    let current = words[0];
    let raf;
    let timer;

    const scramble = (to) => {
      const from = current;
      const len = Math.max(from.length, to.length);
      const queue = Array.from({ length: len }, (_, n) => {
        const start = Math.floor(Math.random() * 15);
        return {
          from: from[n] || "",
          to: to[n] || "",
          start,
          end: start + 10 + Math.floor(Math.random() * 20),
        };
      });
      let frame = 0;
      const update = () => {
        let out = "";
        let done = 0;
        for (const q of queue) {
          if (frame >= q.end) {
            done++;
            out += q.to;
          } else if (frame >= q.start) {
            out += q.to === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          } else {
            out += q.from;
          }
        }
        setText(out);
        if (done === queue.length) {
          current = to;
          timer = setTimeout(next, hold);
        } else {
          frame++;
          raf = requestAnimationFrame(update);
        }
      };
      update();
    };

    const next = () => {
      i = (i + 1) % words.length;
      scramble(words[i]);
    };

    timer = setTimeout(next, hold);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [words, hold]);
  return text;
}

// Scroll velocity -> --vel (marquee skew), scroll progress, cursor glow.
function useCyberFx() {
  useEffect(() => {
    const root = document.documentElement;
    let last = window.scrollY;
    let v = 0;
    let raf;
    const tick = () => {
      const y = window.scrollY;
      v += (y - last - v) * 0.12;
      last = y;
      const vel = Math.max(-14, Math.min(14, v * 0.35));
      root.style.setProperty("--vel", vel.toFixed(2));
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty("--progress", max > 0 ? (y / max).toFixed(4) : "0");
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onMove = (e) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
}

/* ------------------------------------------------------------------ */
/* Kinetic components                                                  */
/* ------------------------------------------------------------------ */
function SplitText({ text, by = "char", as: Tag = "span", className = "", step = 28 }) {
  const [ref, seen] = useInView();
  const words = text.split(" ");
  let i = 0;
  return (
    <Tag
      ref={ref}
      aria-label={text}
      className={`${seen ? "in-view" : ""} ${className}`}
      style={{ "--step": `${step}ms` }}
    >
      {words.map((w, wi) => (
        <span key={wi} aria-hidden="true" className="split-word">
          {by === "char" ? (
            [...w].map((c, ci) => (
              <span key={ci} className="split-unit" style={{ "--i": i++ }}>
                {c}
              </span>
            ))
          ) : (
            <span className="split-unit" style={{ "--i": i++ }}>
              {w}
            </span>
          )}
          {wi < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </Tag>
  );
}

// Each letter's font-weight and colour react to cursor distance.
function WeightText({ text, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const letters = [...el.querySelectorAll("[data-l]")];
    let mx = -9999;
    let my = -9999;
    let raf = null;

    const apply = () => {
      raf = null;
      for (const l of letters) {
        const r = l.getBoundingClientRect();
        const d = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
        const t = Math.max(0, 1 - d / 320);
        l.style.fontWeight = Math.round(300 + 600 * t);
        l.style.setProperty("--t", t.toFixed(3));
      }
    };
    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      el.classList.add("driven");
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  let n = 0;
  return (
    <span ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((w, wi, arr) => (
        <span key={wi} aria-hidden="true" className="inline-block whitespace-nowrap">
          {[...w].map((c, ci) => (
            <span key={ci} data-l className="wave-letter" style={{ "--i": n++ }}>
              {c}
            </span>
          ))}
          {wi < arr.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
}

function Marquee({ items, reverse = false, variant = "", className = "" }) {
  const loop = [...items, ...items];
  const track = (k) => (
    <div className="marquee-track" aria-hidden={k > 0 ? "true" : undefined}>
      {loop.map((t, i) => (
        <span key={i} className="marquee-item">
          {t}
          <span className="marquee-sep">//</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className={`marquee ${reverse ? "reverse" : ""} ${variant} ${className}`}>
      {track(0)}
      {track(1)}
    </div>
  );
}

function Boot() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGone(true), 2500);
    return () => clearTimeout(t);
  }, []);
  if (gone) return null;
  const lines = [
    "> BOOTING PORTFOLIO.EXE",
    "> LOADING NEURAL STACK ... OK",
    "> LINKING REACT / TAILWIND / FLUTTER ... OK",
    "> WELCOME, NETRUNNER.",
  ];
  return (
    <div className="boot" aria-hidden="true">
      {lines.map((l, i) => (
        <p key={i} style={{ "--d": `${i * 0.35}s` }}>
          {l}
        </p>
      ))}
      <div className="boot-bar" />
    </div>
  );
}

function SectionTitle({ kicker, title, sub }) {
  return (
    <header className="mb-6 md:mb-10">
      <p className="kicker">
        <SplitText text={kicker} step={18} />
      </p>
      <h2 className="title font-display font-black uppercase text-[clamp(1.75rem,8vw,6.5rem)] leading-[1.1]">
        <SplitText text={title} />
      </h2>
      {sub && (
        <p className="text-white/60 text-sm md:text-2xl mt-1 md:mt-2">
          <SplitText by="word" text={sub} step={30} />
        </p>
      )}
    </header>
  );
}

function Chip({ icon, label }) {
  return (
    <div className="chip">
      <span className="text-neon">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */
function App() {
  useCyberFx();
  const role = useScramble(ROLES);

  const [contactButtonMessage, setContactButtonMessage] = useState([
    "Drop A Message",
    <AiOutlineSend />,
  ]);
  const [contactButtonDisabled, setContactButtonDisabled] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setContactButtonDisabled(true);
    setContactButtonMessage(["Sending Message ...", <></>]);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICEID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

    try {
      emailjs.init({ publicKey });
      const response = await emailjs.sendForm(serviceID, templateID, form);
      if (response.status == 200) {
        setContactButtonMessage(["Message Sent", <TiTick />]);
        form.reset();
      }
    } catch (_) {
      setContactButtonMessage(["Try Again", <RxCross1 />]);
    }

    setTimeout(() => {
      setContactButtonMessage(["Drop A Message", <AiOutlineSend />]);
      setContactButtonDisabled(false);
    }, 1500);
  }

  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="relative bg-void text-white font-mono min-h-screen overflow-clip">
      <Analytics />
      <Boot />
      <div className="progress" />
      <div className="gridbg" />
      <div className="glow" />
      <div className="scanlines" />

      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between gap-2 px-4 md:px-12 py-3 md:py-4 backdrop-blur-md bg-void/70 border-b border-white/10">
        <button
          onClick={() => go("hero")}
          className="font-display font-black text-base md:text-2xl cursor-pointer shrink-0"
        >
          WZ<span className="text-neon">//</span>
          <span className="hidden md:inline"> TAN WEN ZHE</span>
        </button>
        <ul className="flex items-center gap-2.5 sm:gap-5 md:gap-8 text-[0.62rem] sm:text-xs md:text-sm min-w-0">
          {NAV.map(([label, id], i) => (
            <li key={id}>
              <button className="navlink" onClick={() => go(id)}>
                <span className="text-hot mr-1 hidden sm:inline">0{i + 1}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero */}
      <section
        id="hero"
        className="relative z-10 min-h-[85svh] md:min-h-screen flex flex-col items-center justify-center text-center px-5 pt-14"
      >
        <span className="hud-corner tl" />
        <span className="hud-corner tr" />
        <span className="hud-corner bl" />
        <span className="hud-corner br" />

        <p className="hud-tag mb-4">{"// SYS.ONLINE — HELLO, WORLD. I AM"}</p>

        <h1 className="chroma font-display uppercase leading-none text-[clamp(2.75rem,12vw,10rem)]">
          <WeightText text="WEN ZHE" />
        </h1>

        <p className="role mt-5 md:mt-8">
          <span className="glitch" data-text={role}>
            {role}
          </span>
          <span className="caret" />
        </p>

        <button onClick={() => go("about")} className="btn-neon mt-6 md:mt-10">
          <span>Let's Go</span>
          <span className="arrow heroButton">
            <FaArrowRightLong />
          </span>
        </button>

        <p className="scroll-hint absolute bottom-6 text-xs tracking-[0.3em] text-white/40">
          SCROLL ▼
        </p>
      </section>

      {/* Crossing marquees */}
      <div className="relative z-10 my-6 md:my-20">
        <div className="marquee-wrap -rotate-2">
          <Marquee
            variant="band"
            items={["Student Developer", "Web + Mobile", "Part-Time Freelancer", "Hackathon Addict"]}
          />
        </div>
        <div className="marquee-wrap rotate-1 -mt-4 md:-mt-10">
          <Marquee
            reverse
            variant="outline"
            items={["React", "Flutter", "Next.js", "Kotlin", "TypeScript", "Python"]}
          />
        </div>
      </div>

      {/* About */}
      <section id="about" className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
        <SectionTitle kicker="01 // About Me" title="Who Am I?" />
        <p className="text-base md:text-xl lg:text-2xl font-light leading-normal md:leading-relaxed text-white/85 max-w-5xl">
          <SplitText by="word" text={ABOUT_TEXT} step={10} />
        </p>

        <h3 className="font-display font-black uppercase text-2xl md:text-5xl mt-12 md:mt-20 mb-4 md:mb-6">
          <SplitText text="Education" />
        </h3>
        <div className="grid sm:grid-cols-2 gap-3 md:gap-6">
          {education.map((e) => (
            <div key={e.school} className="card p-4 md:p-6 flex flex-col gap-2 md:gap-3">
              <h4 className="font-display font-bold text-base md:text-2xl">{e.school}</h4>
              <p className="text-neon text-sm md:text-lg">{e.degree}</p>
              <p className="text-white/50 text-xs md:text-base">{e.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-28">
          <SectionTitle
            kicker="02 // Off Duty"
            title="My Interests"
            sub="There has to be more in life than coding, right?"
          />

          <div className="grid lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6">
              {/* Artists */}
              <div className="card p-4 md:p-6">
                <h4 className="font-display font-bold text-base md:text-2xl">
                  Artists I've Been into Lately
                </h4>
                <p className="text-white/60 text-sm mt-1 mb-3 md:mb-5">
                  I mainly listen to Indie, sometimes C-Pop or Hip Hop.
                </p>
                <div className="grid grid-cols-3 gap-2 md:gap-5">
                  {artists.map((a) => (
                    <div key={a.name} className="flex flex-col gap-2 md:gap-3">
                      <div className="shot aspect-square">
                        <img src={a.img} alt={a.name} />
                      </div>
                      <a
                        href={a.href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/10 py-1.5 sm:py-1 px-1 sm:pl-4 text-[0.65rem] sm:text-base text-center hover:bg-neon hover:text-black transition-colors"
                      >
                        <span>{a.name}</span>
                        <img className="hidden sm:block w-10 aspect-square" src="/spotify.svg" alt="Spotify" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Books */}
              <div className="card p-4 md:p-6">
                <h4 className="font-display font-bold text-base md:text-2xl">I Love Reading</h4>
                <p className="text-white/60 text-sm mt-1 mb-3 md:mb-5">It makes me look educated too.</p>
                <div className="grid grid-cols-3 gap-2 md:gap-5 text-center">
                  {books.map((b) => (
                    <div key={b.title} className="flex flex-col">
                      <div className="shot aspect-square">
                        <img src={b.img} alt={b.title} />
                      </div>
                      <p className="font-semibold mt-2 text-[0.65rem] sm:text-base leading-tight">{b.title}</p>
                      <p className="text-white/50 text-[0.6rem] sm:text-sm">{b.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Movies */}
            <div className="card p-4 md:p-6">
              <h4 className="font-display font-bold text-base md:text-2xl">Movies or TV Shows</h4>
              <p className="text-white/60 text-sm mt-1 mb-3 md:mb-5">Films that made me reflect on myself.</p>
              <div className="flex flex-col gap-4 md:gap-8">
                {movies.map((m) => (
                  <div key={m.title} className="grid grid-cols-[6rem_1fr] sm:grid-cols-[10rem_1fr] lg:grid-cols-1 gap-x-3 gap-y-1 lg:gap-y-3">
                    <div className="shot row-span-2 lg:row-span-1">
                      <img src={m.img} alt={m.title} />
                    </div>
                    <h5 className="font-display font-semibold text-sm md:text-lg">{m.title}</h5>
                    <div className="text-xs md:text-sm font-light leading-5 md:leading-6 text-white/75 flex flex-col gap-2 md:gap-3">
                      {m.paras.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee divider */}
      <div className="relative z-10 marquee-wrap rotate-1 my-6 md:my-10">
        <Marquee
          variant="outline"
          items={["Technical Skills", "Languages", "Frameworks", "Tools"]}
        />
      </div>

      {/* Skills */}
      <section id="skills" className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
        <SectionTitle kicker="03 // Experiences" title="Technical Skills" />
        <p className="text-base md:text-xl lg:text-2xl font-light leading-normal md:leading-relaxed text-white/85 max-w-5xl mb-8 md:mb-12">
          <SplitText by="word" text={SKILLS_TEXT} step={10} />
        </p>

        <div className="grid md:grid-cols-2 gap-3 md:gap-6">
          {skillGroups.map((g) => (
            <div key={g.title} className="card p-4 md:p-6 flex flex-col gap-3 md:gap-5">
              <div className="flex items-center gap-3 text-xl md:text-3xl">
                <span className="text-neon">{g.icon}</span>
                <h3 className="font-display font-bold text-base md:text-2xl">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {g.items.map(([icon, label]) => (
                  <Chip key={label} icon={icon} label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
        <SectionTitle kicker="04 // Work I've Done" title="My Projects So Far" />

        <div className="flex flex-col gap-4 md:gap-8">
          {projects.map((p, n) => (
            <article key={p.title} className="card grid lg:grid-cols-[1fr_2.2fr] gap-3 md:gap-6 p-3 md:p-6">
              <span className="outline-num">{String(n + 1).padStart(2, "0")}</span>
              <div className="shot aspect-[2/1] lg:aspect-video">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-3 md:gap-4 pr-12 md:pr-28">
                  <h3 className="font-display font-bold text-base md:text-3xl">{p.title}</h3>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} live site`}
                      className="text-lg md:text-2xl hover:text-neon"
                    >
                      <FiLink />
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} GitHub repository`}
                      className="text-lg md:text-2xl hover:text-neon"
                    >
                      <SiGithub />
                    </a>
                  )}
                </div>
                <p className="mt-2 md:mt-4 text-sm md:text-lg font-light text-white/80">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 md:gap-2 mt-auto pt-3 md:pt-5">
                  {p.stack.map(([icon, label]) => (
                    <Chip key={label} icon={icon} label={label} />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 max-w-4xl mx-auto px-4 md:px-12 py-12 md:py-20">
        <SectionTitle kicker="05 // Contact Me" title="Let's Talk!" />
        <p className="text-sm md:text-xl font-light text-white/80 mb-5 md:mb-8">
          I'm open to freelance work as well as job opportunities.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-cyan uppercase tracking-widest text-xs md:text-sm">
              {"> Your Name_"}
            </label>
            <input
              className="field"
              id="name"
              name="name"
              type="text"
              placeholder="What should I call you?"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-cyan uppercase tracking-widest text-xs md:text-sm">
              {"> Your Email_"}
            </label>
            <input
              className="field"
              id="email"
              name="email"
              type="email"
              placeholder="What's your email address?"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-cyan uppercase tracking-widest text-xs md:text-sm">
              {"> Message_"}
            </label>
            <textarea
              className="field"
              id="message"
              name="message"
              rows={4}
              placeholder="What's up?"
              required
            />
          </div>

          <button disabled={contactButtonDisabled} className="btn-neon self-center mt-2">
            <span>{contactButtonMessage[0]}</span>
            <span className="arrow">{contactButtonMessage[1]}</span>
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 pt-8 md:pt-16 pb-6 md:pb-10 border-t border-white/10 mt-6 md:mt-10">
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0">
          <div className="flex-1 flex gap-5 text-xl md:text-3xl">
            <a href="https://github.com/wz-Tan" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-neon">
              <SiGithub />
            </a>
            <a href="https://www.linkedin.com/in/wen-zhe-tan" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-neon">
              <SiLinkedin />
            </a>
            <a href="mailto:wztan.dev@gmail.com" aria-label="Email" className="hover:text-neon">
              <SiGmail />
            </a>
          </div>

          <button
            onClick={() => go("hero")}
            className="flex-1 text-base md:text-2xl text-white/40 hover:text-neon transition-colors cursor-pointer navlink"
          >
            Back to Top ▲
          </button>

          <div className="flex-1 flex items-center justify-end gap-3 text-sm md:text-2xl">
            <FaRegCopyright />
            <p className="font-semibold">Tan Wen Zhe, 2026</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
