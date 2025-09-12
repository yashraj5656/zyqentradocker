"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level7() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level6DockerCompleted, setLevel6DockerCompleted] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel6DockerCompleted(localStorage.getItem("level6DockerCompleted") === "true");
  }, []);

  const lessons = [
    {
      title: "Installing and Configuring Docker Compose",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Installing and Configuring Docker Compose</h4>
          <p>
            Docker Compose is a tool for defining and running multi-container applications.
          </p>
          <p className="mt-2">
            <b>🔹 Install Docker Compose</b><br />
            Install Docker Compose on Linux:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Verify Installation</b><br />
            Check the installed version:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker-compose --version`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Configuration</b><br />
            Docker Compose uses a <code>docker-compose.yml</code> file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# docker-compose.yml\nversion: '3'\nservices:\n  app:\n    image: nginx`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to install or verify Docker Compose (e.g., docker-compose --version) or "docker-compose.yml".',
      check: (code) => {
        const result = /\b(curl\s+-L\s+.*docker-compose.*|docker-compose\s+--version|docker-compose\.yml)\b/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Enter a command like "curl -L ... docker-compose", "docker-compose --version", or "docker-compose.yml".',
      success: '✅ Great! You understand installing and configuring Docker Compose.'
    },
    {
      title: "Learning docker-compose.yml Syntax",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Learning docker-compose.yml Syntax</h4>
          <p>
            The <code>docker-compose.yml</code> file uses YAML to define services, networks, and volumes.
          </p>
          <p className="mt-2">
            <b>🔹 Basic Structure</b><br />
            Define version and services:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`version: '3'\nservices:\n  web:\n    image: nginx\n    ports:\n      - "8080:80"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Key Fields</b><br />
            Common fields include <code>image</code>, <code>build</code>, <code>ports</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`version: '3'\nservices:\n  app:\n    build: .\n    ports:\n      - "5000:5000"`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 YAML Syntax</b><br />
            Use proper indentation (2 spaces):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`version: '3'\nservices:\n  db:\n    image: mysql\n    environment:\n      - MYSQL_ROOT_PASSWORD=secret`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a docker-compose.yml snippet with version and services (e.g., version: \'3\').',
      check: (code) => {
        const result = /\bversion:\s*['"]3['"]\b|\bservices:\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Include version: \'3\' or services: in your docker-compose.yml snippet.',
      success: '✅ Great! You understand docker-compose.yml syntax.'
    },
    {
      title: "Defining Multiple Services in docker-compose.yml",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Defining Multiple Services in docker-compose.yml</h4>
          <p>
            Define multiple services to run interconnected containers.
          </p>
          <p className="mt-2">
            <b>🔹 Multiple Services</b><br />
            Define web and database services:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`version: '3'\nservices:\n  web:\n    image: nginx\n    ports:\n      - "8080:80"\n  db:\n    image: mysql\n    environment:\n      - MYSQL_ROOT_PASSWORD=secret`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Service Dependencies</b><br />
            Use <code>depends_on</code> for startup order:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`services:\n  web:\n    image: nginx\n    depends_on:\n      - db`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Build Custom Images</b><br />
            Build services from Dockerfiles:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`services:\n  app:\n    build: .\n    ports:\n      - "5000:5000"`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a docker-compose.yml snippet defining multiple services (e.g., services: with web and db).',
      check: (code) => {
        const result = /\bservices:\s*\n\s+\w+:\s*\n\s+(image|build|ports|depends_on|environment):/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Define multiple services with image, build, ports, depends_on, or environment (e.g., services: with web and db).',
      success: '✅ Great! You defined multiple services in docker-compose.yml.'
    },
    {
      title: "Defining Networks and Volumes in docker-compose.yml",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Defining Networks and Volumes in docker-compose.yml</h4>
          <p>
            Define custom networks and volumes for services.
          </p>
          <p className="mt-2">
            <b>🔹 Custom Network</b><br />
            Define a network for services:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`version: '3'\nservices:\n  web:\n    image: nginx\n    networks:\n      - my-network\nnetworks:\n  my-network:`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Volumes</b><br />
            Define and mount volumes:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`services:\n  db:\n    image: mysql\n    volumes:\n      - db_data:/var/lib/mysql\nvolumes:\n  db_data:`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combine Networks and Volumes</b><br />
            Use both in a compose file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`version: '3'\nservices:\n  web:\n    image: nginx\n    networks:\n      - app-net\n    volumes:\n      - app_data:/app\nnetworks:\n  app-net:\nvolumes:\n  app_data:`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a docker-compose.yml snippet defining networks or volumes (e.g., networks: or volumes:).',
      check: (code) => {
        const result = /\b(networks:|volumes:|\s+networks:\s*\n\s+-\s+\w+|\s+volumes:\s*\n\s+-\s+\w+:)/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Include networks: or volumes: in your docker-compose.yml snippet.',
      success: '✅ Great! You defined networks or volumes in docker-compose.yml.'
    },
    {
      title: "Using docker-compose up, down, logs, and Orchestrating Multi-Container Apps",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using docker-compose up, down, logs, and Orchestrating Multi-Container Apps</h4>
          <p>
            Manage multi-container applications with Docker Compose commands.
          </p>
          <p className="mt-2">
            <b>🔹 Start Services</b><br />
            Launch all services:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker-compose up`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Stop and Remove</b><br />
            Stop and remove services:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker-compose down`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 View Logs</b><br />
            Check service logs:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker-compose logs web`}
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
                  <td className="border border-green-400 p-2">docker-compose up</td>
                  <td className="border border-green-400 p-2">Start services</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker-compose down</td>
                  <td className="border border-green-400 p-2">Stop and remove services</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker-compose logs</td>
                  <td className="border border-green-400 p-2">View service logs</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker-compose ps</td>
                  <td className="border border-green-400 p-2">List running services</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command to manage a multi-container app (e.g., docker-compose up, docker-compose logs web).',
      check: (code) => {
        const result = /\b(docker-compose\s+(up|down|logs\s+\w*|ps))\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker-compose up, down, logs, or ps (e.g., docker-compose up, docker-compose logs web).',
      success: '✅ Great! You orchestrated a multi-container app with Docker Compose.'
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
          console.log("Completing Level 7");
          localStorage.setItem("level7DockerCompleted", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Docker Compose</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 7, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level6DockerCompleted) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Docker Compose</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 6 First</h3>
          <p>
            You need to complete Level 6 before accessing Level 7. Go back and finish the Docker Volumes and Storage lessons!
          </p>
          <Link href="/level6" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 6
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 7: Docker Compose</h2>

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
            placeholder="💻 Type your Docker Compose command or YAML here..."
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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 7</h2>
          <Link href="/level8" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 8 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}