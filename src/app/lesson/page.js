"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Lesson() {
  const [completed, setCompleted] = useState({
    level1: false,
    level2: false,
    level3: false,
    level4: false,
    level5: false,
    level6: false,
    level7: false,
    level8: false,
  });
  const [subscribed, setSubscribed] = useState(false);
  useEffect(() => {
    const status = {};
    for (let i = 1; i <= 9; i++) {
      status[`level${i}`] = localStorage.getItem(`level${i}DockerCompleted`) === "true";
    }
    setCompleted(status);
        // Check subscription
        setSubscribed(localStorage.getItem("subscribed") === "true");
  }, []);

  


  return (
    <div style={{ padding: "1rem", textAlign: "center", marginTop:"0%"}}>
      
<div className="container" style={{marginBottom:"5%"}}>
   <svg className="svg-icon" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
    <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z">
    </path>
  </svg>  
  <div className="container__star">
     
    <div className="star-eight"></div>
  </div>
  
<div></div></div>
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
  
      

            {/* Single subscribe button right after header */}
            {!subscribed && (
        <div style={{ margin: "1rem 0" }}>
          <Link href="/subscribe">
            <button style={{width:"50%"}} data-text="Get In">
              Subscribe to Access All Levels
            </button>
          </Link>
        </div>
      )}
      <div><br></br></div>

{/* Level 1 */}
<LessonCard
  title="Level 1: Docker Basics"
  desc="Understand containerization, install Docker, run your first container, and explore basic commands."
  unlocked
  link="/level1"
  lockedMsg=""
/>

{/* Level 2 */}
<LessonCard
  title="Level 2: Working with Docker Images"
  desc="Pull, tag, push, and inspect Docker images; understand image layers and official vs custom images."
  unlocked={completed.level1 && subscribed}
  link="/level2"
  lockedMsg={
    completed.level1
      ? "🔒 Locked – Subscribe to access this level"
      : "🔒 Locked – Finish Level 1 first"
  }
/>

{/* Level 3 */}
<LessonCard
  title="Level 3: Container Management"
  desc="Create, start, stop, restart, remove containers, access shells, map ports, and manage lifecycle."
  unlocked={completed.level2 && subscribed}
  link="/level3"
  lockedMsg="🔒 Locked"
/>

{/* Level 4 */}
<LessonCard
  title="Level 4: Dockerfile & Building Custom Images"
  desc="Learn Dockerfile syntax, build custom images, use FROM, RUN, COPY, CMD, ENTRYPOINT, and optimize builds."
  unlocked={completed.level3 && subscribed}
  link="/level4"
  lockedMsg="🔒 Locked"
/>

{/* Level 5 */}
<LessonCard
  title="Level 5: Docker Networking"
  desc="Understand container networking, network types, link containers, expose ports, and inspect networks."
  unlocked={completed.level4 && subscribed}
  link="/level5"
  lockedMsg="🔒 Locked"
/>

{/* Level 6 */}
<LessonCard
  title="Level 6: Docker Volumes & Storage"
  desc="Work with persistent storage, volumes, bind mounts, backup/restore data, and manage volume lifecycle."
  unlocked={completed.level5 && subscribed}
  link="/level6"
  lockedMsg="🔒 Locked"
/>

{/* Level 7 */}
<LessonCard
  title="Level 7: Docker Compose"
  desc="Install Docker Compose, define services, networks, and volumes, and orchestrate multi-container applications."
  unlocked={completed.level6 && subscribed}
  link="/level7"
  lockedMsg="🔒 Locked"
/>

{/* Level 8 */}
<LessonCard
  title="Level 8: Docker Swarm & Orchestration Basics"
  desc="Learn container orchestration, initialize Swarm, deploy & scale services, and monitor nodes and clusters."
  unlocked={completed.level7 && subscribed}
  link="/level8"
  lockedMsg="🔒 Locked"
/>

{/* Level 9 */}
<LessonCard
  title="Level 9: Advanced Docker Topics"
  desc="Explore multi-stage builds, Docker secrets, configs, health checks, .dockerignore, and container security best practices."
  unlocked={completed.level8 && subscribed}
  link="/level9"
  lockedMsg="🔒 Locked"
/>

{/* Certificate */}
<LessonCard
  title="🎓 Certificate of Completion"
  desc="Unlock your Docker certificate after finishing all 9 levels."
  unlocked={completed.level9 && subscribed}
  link="/certificate"
  lockedMsg="🔒 Locked"
/>

    </div>
  );
}

function LessonCard({ title, desc, unlocked, link, lockedMsg }) {
  return (
    <div className="card">
      
      <h2>{title}</h2>
      <p>{desc}</p>
      {unlocked ? (
        <Link href={link}>
          <button data-text="Get In" >Start</button>
        </Link>
      ) : (
        <button data-text="Get In" style={lockedBtnStyle} disabled>
          {lockedMsg}
        </button>
      )}
    </div>
  );
}



const btnStyle = {
  padding: "10px 40px",
  marginTop: "1rem",
  background: "#00cba9",
  color: "black",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const lockedBtnStyle = {
  ...btnStyle,
  background: "#00cba9",
  cursor: "not-allowed",
};
