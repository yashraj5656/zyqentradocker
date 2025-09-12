"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/components/AuthContext"; // 🔹 use auth

export default function Dashboard() {
  const { user } = useAuth(); // 🔹 get logged-in user
  const [completed, setCompleted] = useState({
    level1: false,
    level2: false,
    level3: false,
    level4: false,
    level5: false,
    level6: false,
    level7: false,
    level8: false,
    level9: false,
  });
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    const status = {};
    for (let i = 1; i <= 9; i++) {
      status[`level${i}`] = localStorage.getItem(`level${i}Completed`) === "true";
    }
    setCompleted(status);
        // Check subscription
        setSubscribed(localStorage.getItem("subscribed") === "true");
  }, []);
  const [quizScore, setQuizScore] = useState(null);
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  useEffect(() => {
    if (!user) return; // 🔹 don’t load progress if not logged in

    const status = {};
    for (let i = 1; i <= 9; i++) {
      status[`level${i}`] = localStorage.getItem(`level${i}Completed`) === "true";
    }
    setCompleted(status);

    const storedQuizScore = localStorage.getItem("quizScore");
    if (storedQuizScore) {
      setQuizScore(JSON.parse(storedQuizScore));
    }
  }, [user]);

  const resetProgress = () => {
    for (let i = 1; i <= 9; i++) {
      localStorage.removeItem(`level${i}Completed`);
    }
    localStorage.removeItem("quizScore");
    setCompleted({
      level1: false,
      level2: false,
      level3: false,
      level4: false,
      level5: false,
      level6: false,
      level7: false,
      level8: false,
      level9: false,
    });
    setQuizScore(null);
    alert("Progress reset! Start Level 1 again to unlock subsequent levels.");
  };

  const toggleInfo = () => setIsInfoOpen(!isInfoOpen);

  const levels = [
    { 
      title: "Level 1: Docker Basics", 
      desc: "Understand containerization, install Docker, run your first container, and explore basic commands.", 
      link: "/level1", 
      unlocked: true 
    },
    { 
      title: "Level 2: Working with Docker Images", 
      desc: "Learn to pull, tag, push, and inspect Docker images; understand image layers and official vs custom images.", 
      link: "/level2", 
      unlocked: completed.level1 && subscribed 
    },
    { 
      title: "Level 3: Container Management", 
      desc: "Create, start, stop, restart, remove containers, access container shells, map ports, and manage lifecycle.", 
      link: "/level3", 
      unlocked: completed.level2 && subscribed 
    },
    { 
      title: "Level 4: Dockerfile & Building Custom Images", 
      desc: "Learn Dockerfile syntax, build custom images, use FROM, RUN, COPY, CMD, ENTRYPOINT, and optimize builds.", 
      link: "/level4", 
      unlocked: completed.level3 && subscribed 
    },
    { 
      title: "Level 5: Docker Networking", 
      desc: "Understand container networking, network types, link containers, expose ports, and inspect networks.", 
      link: "/level5", 
      unlocked: completed.level4 && subscribed 
    },
    { 
      title: "Level 6: Docker Volumes & Storage", 
      desc: "Work with persistent storage, volumes, bind mounts, backup/restore data, and manage volume lifecycle.", 
      link: "/level6", 
      unlocked: completed.level5 && subscribed 
    },
    { 
      title: "Level 7: Docker Compose", 
      desc: "Install Docker Compose, define services, networks, and volumes, and orchestrate multi-container applications.", 
      link: "/level7", 
      unlocked: completed.level6 && subscribed 
    },
    { 
      title: "Level 8: Docker Swarm & Orchestration Basics", 
      desc: "Learn container orchestration, initialize Swarm, deploy & scale services, and monitor nodes and clusters.", 
      link: "/level8", 
      unlocked: completed.level7 && subscribed 
    },
    { 
      title: "Level 9: Advanced Docker Topics", 
      desc: "Explore multi-stage builds, Docker secrets, configs, health checks, .dockerignore, and container security best practices.", 
      link: "/level9", 
      unlocked: completed.level8 && subscribed 
    },
    { 
      title: "🎓 Certificate of Completion", 
      desc: "Unlock your Docker certificate after finishing all 9 levels.", 
      link: "/certificate", 
      unlocked: completed.level9 && subscribed 
    },
  ];
  

  const completedCount = Object.values(completed).filter((v) => v).length;
  const progressPercent = (completedCount / 8) * 100;
  const xp = completedCount * 100;

  // 🔹 If not logged in, show login prompt instead
  if (!user) {
    return (
      <div className="">
        <header className="header">
              <h1>Zyqentra</h1>
        </header>
       


       


        <div className="text-center">
          <p className="pp">Learning Docker is like learning to speak to the web — the more you practice, the more it listens.</p>
          <p className="">
            <Link href="/signup" className=""><button data-text="Signup/Login">Signup/Login</button></Link>
            {/*{" "}or{" "} 
            <Link href="/signup" className="text-green-400 underline"><button>Sign up</button></Link><div><br></br> </div>*/}
            {" "}
          </p>
          <Link href="/lesson">
            <button className="btn" data-text="Explore Lessons (Guest Mode)">
              📖 Explore Lessons (Guest Mode)
            </button>
          </Link>
        </div>
      </div>
    );
  }
  let displayName = "Guest";
  if (user?.email) {
    displayName = user.email.split("@")[0].charAt(0).toUpperCase() + user.email.split("@")[0].slice(1);
  }
  

  // 🔹 Logged in → show full dashboard
  return (
  <div className="">
      <header className="header">
              <h1>Zyqentra</h1>
          </header>







      


      <div className="">
        {/* Banner */}
        {/*<div
          className=""
          style={{
            backgroundImage: "url('/ZQENTRA.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="name">
           <span>{displayName}</span>
          </h1>
        </div>*/}

     {/* 🔹 Sticky Cyber Get Premium Button */}
     <div className="rambtn">
  <div className="cyber-wrapper">
    <Link href="/subscribe">
      <button className="cyber-btn"> Get Premium</button>
    </Link>
    <div className="cyber-tooltip">
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
      <strong>PREMIUM MODE</strong><br />
      Unlock all levels, quizzes, and certificate.<br />
      Become a <strong>Docker Pro ⚡</strong>
    </div>
  </div>
  <div className="cyber-wrapper">
    <Link href="/quiz">
      <button className="cyber-btn">Quizzes</button>
    </Link>
    <div className="cyber-tooltip">
      <div className="corner-tl"></div>
      <div className="corner-tr"></div>
      <div className="corner-bl"></div>
      <div className="corner-br"></div>
      <strong>Quizzes</strong><br />
      Test your knowledge of Docker fundamentals with this interactive quiz! <br />
    </div>
  </div>
</div>






        {/* Progress */}
        <motion.div 
          className="flip-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        ><div className="flip-card-inner">
          <div className="flip-card-front">
         <motion.h2 
          className="gradient-text"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
           Docker 
        </motion.h2>
          <div className="">
            <motion.div
              className=""
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1 }}
            />
          </div></div><div className="flip-card-back">
          <p className="title">
            {completedCount} / 9 Levels Completed • {xp} XP Earned
          </p>
          {quizScore !== null && (
            <p className="">
              Quiz Score: {quizScore.correct}/{quizScore.total}
            </p>
          )}</div></div>
        </motion.div>

{/* Info Section */}
<motion.div 
  className=""
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
>
  <button
    onClick={toggleInfo}
    className="submit-btn"
    data-text="Docker"
    style={{width:"40%"}}
  >
    <h3 className="">
      {isInfoOpen ? "▼ Hide Info" : "▶ Learn About 'Docker'"}
    </h3>
  </button>

  {isInfoOpen && (
    <motion.div
      className="knk"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.4 }}
    >
      <h4 className="kh">The Day Containers Changed the World</h4>
      <p className="kp">
        Once upon a time, deploying applications was messy. Servers were fragile, environments inconsistent, and developers constantly fought with dependencies. It was chaos… until a tiny hero named <strong>Docker</strong> appeared.
      </p>
      <p className="kp">
        Docker was lightweight, portable, and a bit magical. Wherever it went, it simplified deployment. Applications could now run anywhere, containers could talk to each other, and developers could ship code with confidence. The world of software became smoother, predictable, and scalable.
      </p>
      <p className="kp">
        One day, a young developer named <strong>Alex</strong> discovered Docker. At first, Alex was intimidated by images, containers, and volumes. But as they ran their first container, something clicked. With every Docker command, environments synchronized, apps launched perfectly, and deployment headaches vanished.
      </p>
      <p className="kp">
        Soon, Alex realized Docker wasn’t just a tool—it was a key to efficiency. It could turn complicated setups into reproducible workflows. And from that day on, Alex didn’t just code—they <strong>containerized the world</strong>.
      </p>
      <p className="kp">
        Docker, the tiny hero, had done its job: it made deployment consistent, scalable, and reliable. And in the hands of learners like Alex, the adventure of DevOps had just begun.
      </p>
    </motion.div>
  )}
</motion.div>


        

        {/* Levels */}
        <div className="t">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`p-6 rounded-xl shadow-lg transition relative group ${
                level.unlocked
                  ? "bg-gray-800/70 border border-green-500/40 hover:shadow-green-500/20"
                  : "bg-gray-700/50 border border-gray-600 opacity-70"
              }`}
            >
              <h3 className="tt">
                {level.title}
                {level.unlocked ? (
                  <span className="">✅</span>
                ) : (
                  <span className="">🔒</span>
                )}
              </h3>
              <p className="td">{level.desc}</p>
              {level.unlocked ? (
                <Link href={level.link}>
                  <button className="submitt-btn" data-text="Get In">
                    {index === levels.length - 1 ? "🎓 Claim Certificate" : "▶ Start Lesson"}
                  </button>
                </Link>
              ) : (
                <p className="tp">Complete previous level to unlock</p>
              )}
            </motion.div>
          ))}

          {/* Quiz Card */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className=""
          >
            <h3 className="">🎮 Docker Quiz</h3>
            <p className="">
              Test your knowledge of Docker fundamentals with an interactive quiz!
            </p>
            <Link href="/quiz">
              <button className="submit-btn" data-text="Take the Quiz">
                Take the Quiz
              </button>
            </Link>
            {quizScore !== null && (
              <p className="">
                Last Score: {quizScore.correct}/{quizScore.total}
              </p>
            )}
          </motion.div>
        </div>

        {/* Actions */}
        <div className="">
          <Link href="/lesson">
            <button className="submit-btn" data-text="View All Lessons">
              📖 View All Lessons
            </button>
          </Link>
          <button
            onClick={resetProgress}
            className="submit-btn"
            data-text="Reset Progress"
          >
            🔄 Reset Progress
          </button>
        </div>
      </div>
    </div>
  );
}
