"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level9() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level8DockerCompleted, setLevel8DockerCompleted] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel8DockerCompleted(localStorage.getItem("level8DockerCompleted") === "true");
  }, []);

  const lessons = [
    {
      title: "Multi-Stage Builds for Optimized Images",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Multi-Stage Builds for Optimized Images</h4>
          <p>
            Multi-stage builds create smaller, optimized Docker images by separating build and runtime environments.
          </p>
          <p className="mt-2">
            <b>🔹 Multi-Stage Dockerfile</b><br />
            Use multiple <code>FROM</code> stages:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`FROM node:16 AS build\nWORKDIR /app\nCOPY . .\nRUN npm install && npm run build\n\nFROM nginx:alpine\nCOPY --from=build /app/dist /usr/share/nginx/html`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Benefits</b><br />
            Reduces image size by excluding build tools:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Build stage: install dependencies\n# Final stage: copy only runtime artifacts`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Build Command</b><br />
            Build the multi-stage image:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker build -t my-app .`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a multi-stage Dockerfile snippet or build command (e.g., FROM node:16 AS build, docker build -t my-app .).',
      check: (code) => {
        const result = /\b(FROM\s+\w+:\w+\s+AS\s+\w+|docker\s+build\s+-t\s+\w+\s+\.)\b/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Write a multi-stage Dockerfile snippet (e.g., FROM node:16 AS build) or docker build -t my-app .',
      success: '✅ Great! You understand multi-stage builds.'
    },
    {
      title: "Docker Secrets and Configs for Sensitive Data",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Docker Secrets and Configs for Sensitive Data</h4>
          <p>
            Docker secrets and configs securely manage sensitive data in services.
          </p>
          <p className="mt-2">
            <b>🔹 Create a Secret</b><br />
            Store sensitive data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`echo "my-secret" | docker secret create my_secret -`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Create a Config</b><br />
            Store configuration data:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`echo "config-data" | docker config create my_config -`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Use in Service</b><br />
            Mount secrets/configs in a service:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker service create --name app --secret my_secret --config my_config nginx`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to create or use secrets/configs (e.g., docker secret create my_secret -).',
      check: (code) => {
        const result = /\b(docker\s+(secret\s+create\s+\w+\s+-|config\s+create\s+\w+\s+-|service\s+create\s+--name\s+\w+\s+(--secret\s+\w+|--config\s+\w+)\s+\w+))\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker secret create, docker config create, or docker service create with --secret/--config.',
      success: '✅ Great! You managed secrets and configs.'
    },
    {
      title: "Health Checks with HEALTHCHECK",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Health Checks with HEALTHCHECK</h4>
          <p>
            Add health checks to monitor container health in Dockerfiles.
          </p>
          <p className="mt-2">
            <b>🔹 HEALTHCHECK Instruction</b><br />
            Define a health check:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost || exit 1`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 In Dockerfile</b><br />
            Add to a Dockerfile:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`FROM nginx\nHEALTHCHECK CMD curl -f http://localhost || exit 1`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Check Health</b><br />
            Inspect container health:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker inspect --format='{{.State.Health.Status}}' my-container`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a HEALTHCHECK instruction or inspect command (e.g., HEALTHCHECK CMD curl -f http://localhost || exit 1).',
      check: (code) => {
        const result = /\b(HEALTHCHECK\s+(--\w+=\w+\s+)*CMD\s+\S+|docker\s+inspect\s+--format='{{.State.Health.Status}}'\s+\w+)\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Write a HEALTHCHECK instruction or docker inspect --format=\'{{.State.Health.Status}}\' (e.g., HEALTHCHECK CMD curl -f http://localhost || exit 1).',
      success: '✅ Great! You added a health check.'
    },
    {
      title: "Using .dockerignore to Optimize Builds",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using .dockerignore to Optimize Builds</h4>
          <p>
            Use <code>.dockerignore</code> to exclude unnecessary files from the build context.
          </p>
          <p className="mt-2">
            <b>🔹 Create .dockerignore</b><br />
            Example <code>.dockerignore</code> file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`node_modules\n.git\n*.log`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Benefits</b><br />
            Reduces build context size:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Exclude large or sensitive files\n# Speeds up docker build`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Build with .dockerignore</b><br />
            Use with build command:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker build -t my-app .`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a .dockerignore snippet or build command (e.g., node_modules, docker build -t my-app .).',
      check: (code) => {
        const result = /\b(node_modules|\.git|\*\.\w+|docker\s+build\s+-t\s+\w+\s+\.)\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Write a .dockerignore pattern (e.g., node_modules, *.log) or docker build -t my-app .',
      success: '✅ Great! You optimized builds with .dockerignore.'
    },
    {
      title: "Security Best Practices for Containers",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Security Best Practices for Containers</h4>
          <p>
            Follow best practices to secure Docker containers.
          </p>
          <p className="mt-2">
            <b>🔹 Run as Non-Root</b><br />
            Use a non-root user:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`FROM nginx\nUSER nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Limit Capabilities</b><br />
            Drop unnecessary capabilities:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run --cap-drop ALL --cap-add NET_BIND_SERVICE nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Scan Images</b><br />
            Check for vulnerabilities:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker scan my-app`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Useful Commands</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Command/Instruction</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">USER</td>
                  <td className="border border-green-400 p-2">Run as non-root user</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker run --cap-drop</td>
                  <td className="border border-green-400 p-2">Limit container capabilities</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker scan</td>
                  <td className="border border-green-400 p-2">Scan images for vulnerabilities</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">--security-opt</td>
                  <td className="border border-green-400 p-2">Apply security options</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a security-related Dockerfile instruction or command (e.g., USER nginx, docker run --cap-drop ALL).',
      check: (code) => {
        const result = /\b(USER\s+\w+|docker\s+(run\s+--cap-drop\s+\w+|scan\s+\w+|run\s+--security-opt\s+\S+))\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use USER, docker run --cap-drop, docker scan, or --security-opt (e.g., USER nginx, docker run --cap-drop ALL).',
      success: '✅ Great! You applied security best practices.'
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
          console.log("Completing Level 9");
          localStorage.setItem("level9DockerCompleted", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Advanced Docker Topics</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 9, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level8DockerCompleted) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Advanced Docker Topics</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 8 First</h3>
          <p>
            You need to complete Level 8 before accessing Level 9. Go back and finish the Docker Swarm & Orchestration Basics lessons!
          </p>
          <Link href="/level8" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 8
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 9: Advanced Docker Topics</h2>

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
            placeholder="💻 Type your Docker command or file snippet here..."
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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 9</h2>
          <Link href="/certificate" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Get Certificate ➡️
          </Link>
        </div>
      )}
    </div>
  );
}