"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level5() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level4DockerCompleted, setLevel4DockerCompleted] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel4DockerCompleted(localStorage.getItem("level4DockerCompleted") === "true");
  }, []);

  const lessons = [
    {
      title: "Understanding Container Networking Basics",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Container Networking Basics</h4>
          <p>
            Docker networking enables containers to communicate with each other and the outside world.
          </p>
          <p className="mt-2">
            <b>🔹 Networking Basics</b><br />
            Containers use networks to connect, managed by Docker:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Default network: bridge\n# Containers communicate via IP or name`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Networks</b><br />
            View available networks:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker network ls`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Create a Network</b><br />
            Set up a custom network for containers:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker network create my-network`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write "networking" or "network" to confirm understanding.',
      check: (code) => {
        const result = /\b(networking|network)\b/i.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Enter "networking" or "network".',
      success: '✅ Great! You understand Docker networking basics.'
    },
    {
      title: "Exploring Network Types: bridge, host, overlay, none",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Exploring Network Types: bridge, host, overlay, none</h4>
          <p>
            Docker supports different network types for various use cases.
          </p>
          <p className="mt-2">
            <b>🔹 Bridge Network</b><br />
            Default network for isolated containers:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run --network bridge nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Host Network</b><br />
            Container shares host’s network:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run --network host nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Overlay and None</b><br />
            Overlay for multi-host, none for no networking:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker network create -d overlay my-overlay\ndocker run --network none busybox`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using a network type (e.g., docker run --network bridge nginx, docker network create -d overlay my-overlay).',
      check: (code) => {
        const result = /\b(docker\s+(run\s+--network\s+(bridge|host|none)\s+\w+|network\s+create\s+-d\s+overlay\s+\w+))\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker run --network (bridge, host, none) or docker network create -d overlay (e.g., docker run --network bridge nginx).',
      success: '✅ Great! You explored Docker network types.'
    },
    {
      title: "Linking Containers Using Networks",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Linking Containers Using Networks</h4>
          <p>
            Connect containers on the same network for communication.
          </p>
          <p className="mt-2">
            <b>🔹 Create a Custom Network</b><br />
            Set up a user-defined network:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker network create my-network`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Run Containers on Network</b><br />
            Assign containers to the network:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run --network my-network --name web nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Connect Existing Container</b><br />
            Add a container to a network:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker network connect my-network my_container`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to create or use a network (e.g., docker network create my-network, docker run --network my-network nginx).',
      check: (code) => {
        const result = /\b(docker\s+(network\s+create\s+\w+|run\s+--network\s+\w+\s+--name\s+\w+\s+\w+|network\s+connect\s+\w+\s+\w+))\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker network create, docker run --network, or docker network connect (e.g., docker network create my-network).',
      success: '✅ Great! You linked containers using networks.'
    },
    {
      title: "Exposing Ports and Communicating Between Containers",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Exposing Ports and Communicating Between Containers</h4>
          <p>
            Expose ports and enable container-to-container communication.
          </p>
          <p className="mt-2">
            <b>🔹 Expose Ports</b><br />
            Map container ports to the host:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -p 8080:80 --network my-network nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Container Communication</b><br />
            Containers on the same network use names:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run --network my-network --name db mysql\ndocker run --network my-network --name web -e DB_HOST=db nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Test Communication</b><br />
            Run a command to test connectivity:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker exec web ping db`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to expose ports or enable communication (e.g., docker run -p 8080:80 nginx, docker exec web ping db).',
      check: (code) => {
        const result = /(docker\s+(run\s+(-p\s+\d+:\d+|--network\s+\w+\s+--name\s+\w+(\s+-e\s+\w+=\w+)?\s+\w+)|exec\s+\w+\s+ping\s+\w+))/i.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker run -p, docker run --network --name, or docker exec ... ping (e.g., docker run -p 8080:80 nginx).',
      success: '✅ Great! You exposed ports or enabled container communication.'
    },
    {
      title: "Inspecting Networks with docker network ls and docker network inspect",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Inspecting Networks with docker network ls and docker network inspect</h4>
          <p>
            Inspect Docker networks to understand their configuration.
          </p>
          <p className="mt-2">
            <b>🔹 List Networks</b><br />
            View all available networks:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker network ls`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Inspect Network</b><br />
            See details of a specific network:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker network inspect my-network`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Remove Network</b><br />
            Delete unused networks:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker network rm my-network`}
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
                  <td className="border border-green-400 p-2">docker network create</td>
                  <td className="border border-green-400 p-2">Create a network</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker run --network</td>
                  <td className="border border-green-400 p-2">Run container on network</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker network ls</td>
                  <td className="border border-green-400 p-2">List networks</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker network inspect</td>
                  <td className="border border-green-400 p-2">Inspect network details</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker network rm</td>
                  <td className="border border-green-400 p-2">Remove a network</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command to inspect or manage networks (e.g., docker network ls, docker network inspect my-network).',
      check: (code) => {
        const result = /\b(docker\s+network\s+(ls|inspect\s+\w+|rm\s+\w+))\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker network ls, docker network inspect, or docker network rm (e.g., docker network ls, docker network inspect my-network).',
      success: '✅ Great! You inspected or managed Docker networks.'
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
          console.log("Completing Level 5");
          localStorage.setItem("level5DockerCompleted", "true");
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

  if (!subscribed) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Docker Networking</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 5, you need a subscription. Please subscribe to continue learning.
          </p>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level4DockerCompleted) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Docker Networking</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 4 First</h3>
          <p>
            You need to complete Level 4 before accessing Level 5. Go back and finish the Dockerfile and Building Custom Images lessons!
          </p>
          <Link href="/level4" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 4
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 5: Docker Networking</h2>

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
            <button
              onClick={handleNext}
              disabled={currentLesson === lessons.length - 1}
              className="btn px-4 py-2 bg-blue-600 text-white rounded-md disabled:bg-gray-400"
            >
              Next ➡️
            </button>
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
          <div className="action-buttons mt-4">
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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 5</h2>
          <Link href="/level6" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 6 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}