"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level8() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level7DockerCompleted, setLevel7DockerCompleted] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel7DockerCompleted(localStorage.getItem("level7DockerCompleted") === "true");
  }, []);

  const lessons = [
    {
      title: "Understanding Container Orchestration and Its Need",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Container Orchestration and Its Need</h4>
          <p>
            Container orchestration manages multiple containers across hosts for scalability and reliability.
          </p>
          <p className="mt-2">
            <b>🔹 Why Orchestration?</b><br />
            Orchestration automates deployment, scaling, and management:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Manage multiple containers\n# Ensure high availability and load balancing`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Docker Swarm</b><br />
            Docker’s native orchestration tool:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Swarm coordinates containers across nodes`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Key Concepts</b><br />
            Nodes (manager/worker), services, and tasks:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Manager nodes control the swarm\n# Worker nodes run tasks`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write "orchestration" or "swarm" to confirm understanding.',
      check: (code) => {
        const result = /\b(orchestration|swarm)\b/i.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Enter "orchestration" or "swarm".',
      success: '✅ Great! You understand container orchestration and Docker Swarm.'
    },
    {
      title: "Initializing Docker Swarm with docker swarm init",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Initializing Docker Swarm with docker swarm init</h4>
          <p>
            Initialize a Docker Swarm to start orchestration.
          </p>
          <p className="mt-2">
            <b>🔹 Initialize Swarm</b><br />
            Set up a swarm on a manager node:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker swarm init`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Join a Swarm</b><br />
            Add a worker node to the swarm:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker swarm join --token <token> <manager-ip>:2377`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Check Swarm Status</b><br />
            View swarm nodes:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker node ls`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to initialize or join a swarm (e.g., docker swarm init, docker swarm join).',
      check: (code) => {
        const result = /\b(docker\s+swarm\s+(init|join\s+--token\s+\S+\s+\S+:\d+))\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker swarm init or docker swarm join (e.g., docker swarm init, docker swarm join --token <token> <ip>:2377).',
      success: '✅ Great! You initialized a Docker Swarm.'
    },
    {
      title: "Deploying Services with docker service create",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Deploying Services with docker service create</h4>
          <p>
            Deploy services to run containers across the swarm.
          </p>
          <p className="mt-2">
            <b>🔹 Create a Service</b><br />
            Deploy a service with replicas:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker service create --name web --replicas 3 nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Expose Ports</b><br />
            Map service ports:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker service create --name web -p 8080:80 nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Update Service</b><br />
            Modify a running service:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker service update --replicas 5 web`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to create or update a service (e.g., docker service create --name web nginx).',
      check: (code) => {
        const result = /\b(docker\s+service\s+(create\s+--name\s+\w+\s+(--replicas\s+\d+\s+|-p\s+\d+:\d+\s+)?\w+|update\s+--replicas\s+\d+\s+\w+))\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker service create or update (e.g., docker service create --name web nginx, docker service update --replicas 5 web).',
      success: '✅ Great! You deployed a service in Docker Swarm.'
    },
    {
      title: "Scaling Services and Managing Nodes",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Scaling Services and Managing Nodes</h4>
          <p>
            Scale services and manage swarm nodes.
          </p>
          <p className="mt-2">
            <b>🔹 Scale a Service</b><br />
            Adjust the number of replicas:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker service scale web=5`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Add or Remove Nodes</b><br />
            Promote a node to manager or remove it:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker node promote node-1\ndocker node rm node-2`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Nodes</b><br />
            View all nodes:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker node ls`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to scale services or manage nodes (e.g., docker service scale web=5, docker node ls).',
      check: (code) => {
        const result = /\b(docker\s+(service\s+scale\s+\w+=\d+|node\s+(ls|promote\s+\w+|rm\s+\w+)))\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker service scale or docker node ls, promote, rm (e.g., docker service scale web=5, docker node ls).',
      success: '✅ Great! You scaled services or managed nodes.'
    },
    {
      title: "Monitoring Services and Swarm Clusters",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Monitoring Services and Swarm Clusters</h4>
          <p>
            Monitor services and swarm clusters to ensure healthy operation.
          </p>
          <p className="mt-2">
            <b>🔹 List Services</b><br />
            View running services:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker service ls`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Inspect Service Tasks</b><br />
            Check tasks for a service:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker service ps web`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Inspect Nodes</b><br />
            View node details:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker node inspect node-1`}
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
                  <td className="border border-green-400 p-2">docker service ls</td>
                  <td className="border border-green-400 p-2">List services</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker service ps</td>
                  <td className="border border-green-400 p-2">View service tasks</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker node ls</td>
                  <td className="border border-green-400 p-2">List nodes</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker node inspect</td>
                  <td className="border border-green-400 p-2">Inspect node details</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command to monitor services or nodes (e.g., docker service ls, docker node inspect node-1).',
      check: (code) => {
        const result = /\b(docker\s+(service\s+(ls|ps\s+\w+)|node\s+(ls|inspect\s+\w+)))\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker service ls, ps, or docker node ls, inspect (e.g., docker service ls, docker node inspect node-1).',
      success: '✅ Great! You monitored services or the swarm cluster.'
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
          console.log("Completing Level 8");
          localStorage.setItem("level8DockerCompleted", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Docker Swarm & Orchestration Basics</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 8, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level7DockerCompleted) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Docker Swarm & Orchestration Basics</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 7 First</h3>
          <p>
            You need to complete Level 7 before accessing Level 8. Go back and finish the Docker Compose lessons!
          </p>
          <Link href="/level7" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 7
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 8: Docker Swarm & Orchestration Basics</h2>

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
            placeholder="💻 Type your Docker Swarm command here..."
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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 8</h2>
          <Link href="/level9" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 9 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}