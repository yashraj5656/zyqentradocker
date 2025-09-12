"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level3() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level2DockerCompleted, setLevel2DockerCompleted] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel2DockerCompleted(localStorage.getItem("level2DockerCompleted") === "true");
  }, []);

  const lessons = [
    {
      title: "Creating, Starting, Stopping, and Restarting Containers",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Creating, Starting, Stopping, and Restarting Containers</h4>
          <p>
            Manage containers using basic Docker commands.
          </p>
          <p className="mt-2">
            <b>🔹 Create and Run a Container</b><br />
            Create and start a container from an image:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Stop a Container</b><br />
            Stop a running container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker stop my_container`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Start a Stopped Container</b><br />
            Restart a stopped container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker start my_container`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Restart a Container</b><br />
            Restart a running container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker restart my_container`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to create, start, stop, or restart a container (e.g., docker run nginx, docker stop my_container).',
      check: (code) => {
        const result = /\b(docker\s+(run\s+\w+|stop\s+\w+|start\s+\w+|restart\s+\w+))\b/m.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker run, docker stop, docker start, or docker restart (e.g., docker run nginx, docker stop my_container).',
      success: '✅ Great! You managed container creation and lifecycle.'
    },
    {
      title: "Removing Containers with docker rm",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Removing Containers with docker rm</h4>
          <p>
            Remove stopped containers to clean up resources.
          </p>
          <p className="mt-2">
            <b>🔹 Remove a Container</b><br />
            Delete a specific container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker rm my_container`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Force Remove</b><br />
            Remove a running container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker rm -f my_container`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Containers</b><br />
            Check containers before removing:
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
      task: 'Write a command to remove a container (e.g., docker rm my_container).',
      check: (code) => {
        const result = /\b(docker\s+rm\s+(-f\s+)?\w+)\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker rm (e.g., docker rm my_container, docker rm -f my_container).',
      success: '✅ Great! You removed a container.'
    },
    {
      title: "Accessing Container Shell with docker exec -it",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Accessing Container Shell with docker exec -it</h4>
          <p>
            Access a container’s shell to run commands inside it.
          </p>
          <p className="mt-2">
            <b>🔹 Interactive Shell</b><br />
            Open a bash shell in a running container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker exec -it my_container /bin/bash`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Run a Command</b><br />
            Execute a single command in a container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker exec my_container ls`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Alternative Shell</b><br />
            Use sh if bash is unavailable:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker exec -it my_container /bin/sh`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to access a container’s shell or run a command (e.g., docker exec -it my_container /bin/bash).',
      check: (code) => {
        const result = /\b(docker\s+exec\s+(-it\s+)?\w+\s+(\/bin\/bash|\/bin\/sh|\w+))\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker exec (e.g., docker exec -it my_container /bin/bash, docker exec my_container ls).',
      success: '✅ Great! You accessed a container’s shell or ran a command.'
    },
    {
      title: "Understanding Container Lifecycle and State",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Container Lifecycle and State</h4>
          <p>
            Learn the states of a container: created, running, paused, stopped.
          </p>
          <p className="mt-2">
            <b>🔹 Container States</b><br />
            Containers transition through states:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Created: docker create nginx\n# Running: docker start my_container\n# Paused: docker pause my_container\n# Stopped: docker stop my_container`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Pause a Container</b><br />
            Temporarily suspend a container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker pause my_container`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Unpause a Container</b><br />
            Resume a paused container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker unpause my_container`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to manage container state (e.g., docker create nginx, docker pause my_container).',
      check: (code) => {
        const result = /\b(docker\s+(create\s+\w+|pause\s+\w+|unpause\s+\w+))\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker create, docker pause, or docker unpause (e.g., docker create nginx, docker pause my_container).',
      success: '✅ Great! You managed container lifecycle and states.'
    },
    {
      title: "Mapping Ports and Volumes with -p and -v",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Mapping Ports and Volumes with -p and -v</h4>
          <p>
            Expose container services and persist data using ports and volumes.
          </p>
          <p className="mt-2">
            <b>🔹 Map Ports (-p)</b><br />
            Map host port to container port:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -p 8080:80 nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Map Volumes (-v)</b><br />
            Mount a host directory to a container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -v /host/path:/container/path nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combine Ports and Volumes</b><br />
            Run a container with both:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -p 8080:80 -v /data:/app/data nginx`}
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
                  <td className="border border-green-400 p-2">docker run -p</td>
                  <td className="border border-green-400 p-2">Map ports</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker run -v</td>
                  <td className="border border-green-400 p-2">Map volumes</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker exec</td>
                  <td className="border border-green-400 p-2">Run commands in container</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker stop</td>
                  <td className="border border-green-400 p-2">Stop container</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command to map ports or volumes (e.g., docker run -p 8080:80 nginx, docker run -v /host:/container nginx).',
      check: (code) => {
        const result = /\b(docker\s+run\s+(-p\s+\d+:\d+|-v\s+\S+:\S+)(?:\s+-p\s+\d+:\d+|-v\s+\S+:\S+)*\s+\w+)\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker run with -p or -v (e.g., docker run -p 8080:80 nginx, docker run -v /host:/container nginx).',
      success: '✅ Great! You mapped ports or volumes for a container.'
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
          console.log("Completing Level 3");
          localStorage.setItem("level3DockerCompleted", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Container Management</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 3, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level2DockerCompleted) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Container Management</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 2 First</h3>
          <p>
            You need to complete Level 2 before accessing Level 3. Go back and finish the Working with Docker Images lessons!
          </p>
          <Link href="/level2" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 2
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 3: Container Management</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 3</h2>
          <Link href="/level4" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 4 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}