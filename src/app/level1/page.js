"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level1() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");


  const lessons = [
    {
      title: "Understanding Containerization vs. Virtualization",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Containerization vs. Virtualization</h4>
          <p>
            Learn the difference between containerization and virtualization.
          </p>
          <p className="mt-2">
            <b>🔹 Containerization</b><br />
            Containers share the host OS, running lightweight, isolated apps:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Example: Containers run on Docker\n# Lightweight, shares host kernel`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Virtualization</b><br />
            Virtual machines (VMs) run a full guest OS, using more resources:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Example: VMs run on hypervisors like VMware\n# Full OS, heavier resource use`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Key Difference</b><br />
            Containers are faster and more efficient than VMs:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Containers: Same OS, isolated apps\n# VMs: Separate OS, full isolation`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write "containerization" or "virtualization" to confirm understanding.',
      check: (code) => {
        const result = /\b(containerization|virtualization)\b/i.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Enter "containerization" or "virtualization".',
      success: '✅ Great! You understand containerization vs. virtualization.'
    },
    {
      title: "Installing Docker on Linux, macOS, or Windows",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Installing Docker on Linux, macOS, or Windows</h4>
          <p>
            Install Docker to start using containers.
          </p>
          <p className="mt-2">
            <b>🔹 Install on Linux</b><br />
            Use package manager (e.g., Ubuntu):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sudo apt-get update\nsudo apt-get install -y docker.io`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Install on macOS</b><br />
            Use Docker Desktop or Homebrew:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`brew install docker`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Install on Windows</b><br />
            Use Docker Desktop (requires WSL2):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Install via PowerShell\nwsl --install\n# Then download Docker Desktop`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to install Docker (e.g., apt-get install docker.io, brew install docker).',
      check: (code) => {
        const result = /\b(apt-get\s+install.*docker|brew\s+install\s+docker|wsl\s+--install)\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a command like apt-get install docker.io, brew install docker, or wsl --install.',
      success: '✅ Great! You installed Docker.'
    },
    {
      title: "Key Docker Concepts: Images, Containers, Docker Engine",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Key Docker Concepts: Images, Containers, Docker Engine</h4>
          <p>
            Understand core Docker components.
          </p>
          <p className="mt-2">
            <b>🔹 Images</b><br />
            Read-only templates for containers:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Example: Pull an image\ndocker pull ubuntu`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Containers</b><br />
            Running instances of images:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Example: Run a container\ndocker run ubuntu`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Docker Engine</b><br />
            The runtime that manages containers:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Check Docker version\ndocker version`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command related to Docker images or containers (e.g., docker pull ubuntu, docker version).',
      check: (code) => {
        const result = /\b(docker\s+(pull\s+\w+|run\s+\w+|version))\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use a command like docker pull ubuntu, docker run ubuntu, or docker version.',
      success: '✅ Great! You explored Docker images, containers, or the engine.'
    },
    {
      title: "Running Your First Container: docker run hello-world",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Running Your First Container: docker run hello-world</h4>
          <p>
            Run a simple container to test Docker.
          </p>
          <p className="mt-2">
            <b>🔹 Run Hello World</b><br />
            Pulls and runs a test container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run hello-world`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Verify Installation</b><br />
            The container outputs a confirmation message:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Output: Hello from Docker!\n# This confirms Docker is working`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Check Container</b><br />
            List containers to see the result:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker ps -a`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write the command to run the hello-world container (e.g., docker run hello-world).',
      check: (code) => {
        const result = /\b(docker\s+run\s+hello-world)\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker run hello-world.',
      success: '✅ Great! You ran your first Docker container.'
    },
    {
      title: "Basic Commands: docker ps, docker images, docker rm, docker rmi",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Basic Commands: docker ps, docker images, docker rm, docker rmi</h4>
          <p>
            Learn essential Docker commands for managing containers and images.
          </p>
          <p className="mt-2">
            <b>🔹 List Containers (docker ps)</b><br />
            Show running or all containers:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker ps\n# Show all containers\ndocker ps -a`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Images (docker images)</b><br />
            Display available images:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker images`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Remove Containers and Images</b><br />
            Clean up unused resources:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Remove container\ndocker rm container_id\n# Remove image\ndocker rmi image_name`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Commands</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Command</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker ps</td>
                  <td className="border border-green-400 p-2">List running containers</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker images</td>
                  <td className="border border-green-400 p-2">List available images</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker rm</td>
                  <td className="border border-green-400 p-2">Remove containers</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker rmi</td>
                  <td className="border border-green-400 p-2">Remove images</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command using docker ps, docker images, docker rm, or docker rmi (e.g., docker ps -a).',
      check: (code) => {
        const result = /\b(docker\s+(ps(\s+-a)?|images|rm\s+\w+|rmi\s+\w+))\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker ps, docker images, docker rm, or docker rmi (e.g., docker ps -a, docker rm id).',
      success: '✅ Great! You used basic Docker commands.'
    }
  ];

  const handleNext = () => {
    if (currentLesson < lessons.length - 1) {
      console.log(`Navigating to next lesson: ${currentLesson + 1}`);
      setCurrentLesson(currentLesson + 1);
      setCode("");
      setMessage("");
    }
  };

  const handlePrev = () => {
    if (currentLesson > 0) {
      console.log(`Navigating to previous lesson: ${currentLesson - 1}`);
      setCurrentLesson(currentLesson - 1);
      setCode("");
      setMessage("");
    }
  };

  const checkCode = () => {
    console.log(`Checking code for lesson ${currentLesson}: "${code}"`);
    try {
      if (!code.trim()) {
        setMessage("❌ Please enter some code to check.");
        return;
      }
      if (lessons[currentLesson].check(code)) {
        setMessage(lessons[currentLesson].success);
        if (currentLesson < lessons.length - 1) {
          console.log(`Advancing to lesson ${currentLesson + 1}`);
          setTimeout(() => {
            setCurrentLesson(currentLesson + 1);
            setCode("");
            setMessage("");
          }, 1000);
        } else {
          console.log("Completing Level 1");
          localStorage.setItem("level1DockerCompleted", "true");
          setTimeout(() => {
            setCurrentLesson(lessons.length);
            setCode("");
            setMessage("");
          }, 1000);
        }
      } else {
        setMessage(lessons[currentLesson].error);
      }
    } catch (error) {
      console.error(`Error in checkCode: ${error.message}`);
      setMessage("❌ An error occurred while checking your code. Please try again.");
    }
  };



  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 1: Docker Basics</h2>

      {currentLesson < lessons.length ? (
        <div>
          <div className="nav-buttons flex justify-between mb-6">
            <button
              onClick={handlePrev}
              disabled={currentLesson === 0}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
            >
              ⬅ Previous
            </button>
            {/* <button
              onClick={handleNext}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Next ➡️
            </button> */}
          </div>

          <h3 className="text-xl font-semibold mb-4">{lessons[currentLesson].title}</h3>
          <div className="lesson-description text-gray-700 mb-4">{lessons[currentLesson].description}</div>
          <p className="task font-semibold mb-4">
            <b>Task:</b> {lessons[currentLesson].task}
          </p>

          <textarea
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              console.log(`Code input updated: "${e.target.value}"`);
            }}
            placeholder="💻 Type your Docker command here..."
            className="code-input"
            style={{
              width: "100%",
              height: "120px",
              background: "#111",
              color: "#0f0",
              fontFamily: "monospace",
              fontSize: "1rem",
              padding: "10px",
              borderRadius: "8px",
              marginTop: "1rem",
            }}
          />
          <div className="action-buttons">
            <button
              onClick={checkCode}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Check Code
            </button>
          </div>
          <p
            className={`mt-4 ${message.includes("❌") ? "error-message text-red-500" : "success-message text-green-500"}`}
          >
            {message}
          </p>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 1</h2>
          <Link href="/summary" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            View Summary ➡️
          </Link>
        </div>
      )}
    </div>
  );
}