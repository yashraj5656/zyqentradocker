"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level6() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level5DockerCompleted, setLevel5DockerCompleted] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel5DockerCompleted(localStorage.getItem("level5DockerCompleted") === "true");
  }, []);

  const lessons = [
    {
      title: "Understanding Persistent vs. Ephemeral Storage",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Persistent vs. Ephemeral Storage</h4>
          <p>
            Docker containers use storage that can be ephemeral or persistent.
          </p>
          <p className="mt-2">
            <b>🔹 Ephemeral Storage</b><br />
            Data in a container’s filesystem is lost when the container is removed:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Container data is ephemeral by default\ndocker run nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Persistent Storage</b><br />
            Volumes or bind mounts preserve data beyond container lifecycle:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Persistent storage with a volume\ndocker run -v my_volume:/data nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Volumes</b><br />
            View available volumes:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker volume ls`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write "persistent" or "ephemeral" to confirm understanding.',
      check: (code) => {
        const result = /\b(persistent|ephemeral)\b/i.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Enter "persistent" or "ephemeral".',
      success: '✅ Great! You understand persistent vs. ephemeral storage.'
    },
    {
      title: "Using Volumes with docker volume create and docker run -v",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using Volumes with docker volume create and docker run -v</h4>
          <p>
            Volumes provide managed, persistent storage for containers.
          </p>
          <p className="mt-2">
            <b>🔹 Create a Volume</b><br />
            Create a named volume:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker volume create my_volume`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Use Volume in Container</b><br />
            Mount a volume to a container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -v my_volume:/app/data nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Anonymous Volume</b><br />
            Use a volume without a name:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -v /app/data nginx`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to create or use a volume (e.g., docker volume create my_volume, docker run -v my_volume:/app/data nginx).',
      check: (code) => {
        const result = /\b(docker\s+(volume\s+create\s+\w+|run\s+-v\s+(\w+:)?\S+:\S+\s+\w+))\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker volume create or docker run -v (e.g., docker volume create my_volume, docker run -v my_volume:/app/data nginx).',
      success: '✅ Great! You used Docker volumes.'
    },
    {
      title: "Binding Host Directories to Containers",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Binding Host Directories to Containers</h4>
          <p>
            Bind mounts map host directories to container paths.
          </p>
          <p className="mt-2">
            <b>🔹 Bind Mount</b><br />
            Mount a host directory to a container:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -v /host/path:/app/data nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Read-Only Bind Mount</b><br />
            Restrict container writes:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -v /host/path:/app/data:ro nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combine with Volumes</b><br />
            Use bind mounts and volumes together:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run -v my_volume:/app/data -v /host/path:/app/config nginx`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to bind a host directory (e.g., docker run -v /host/path:/app/data nginx).',
      check: (code) => {
        const result = /\b(docker\s+run\s+-v\s+\S+:\S+(:ro)?\s+\w+)\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker run -v for a bind mount (e.g., docker run -v /host/path:/app/data nginx).',
      success: '✅ Great! You bound a host directory to a container.'
    },
    {
      title: "Backing Up and Restoring Data from Volumes",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Backing Up and Restoring Data from Volumes</h4>
          <p>
            Back up and restore volume data using containers.
          </p>
          <p className="mt-2">
            <b>🔹 Backup a Volume</b><br />
            Copy volume data to a host file:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run --rm -v my_volume:/data -v /host:/backup busybox tar cvf /backup/backup.tar /data`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Restore a Volume</b><br />
            Restore data to a volume:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker run --rm -v my_volume:/data -v /host:/backup busybox tar xvf /backup/backup.tar -C /data`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Inspect Volume</b><br />
            Check volume details:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker volume inspect my_volume`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command to back up, restore, or inspect a volume (e.g., docker volume inspect my_volume, docker run --rm -v my_volume:/data ...).',
      check: (code) => {
        const result = /\b(docker\s+(volume\s+inspect\s+\w+|run\s+--rm\s+-v\s+\w+:\S+\s+-v\s+\S+:\S+\s+\w+\s+tar\s+[xc]vf\s+\S+\s+(-C\s+\S+\s+)?\S*))\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker volume inspect or docker run --rm with tar for backup/restore (e.g., docker volume inspect my_volume, docker run --rm -v my_volume:/data ... tar cvf ...).',
      success: '✅ Great! You backed up, restored, or inspected a volume.'
    },
    {
      title: "Managing Volume Lifecycle",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Managing Volume Lifecycle</h4>
          <p>
            Create, inspect, and remove volumes to manage storage.
          </p>
          <p className="mt-2">
            <b>🔹 Create a Volume</b><br />
            Set up a new volume:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker volume create my_volume`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List and Inspect</b><br />
            View and check volume details:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker volume ls\ndocker volume inspect my_volume`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Remove a Volume</b><br />
            Delete an unused volume:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker volume rm my_volume`}
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
                  <td className="border border-green-400 p-2">docker volume create</td>
                  <td className="border border-green-400 p-2">Create a volume</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker run -v</td>
                  <td className="border border-green-400 p-2">Mount volumes or bind mounts</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker volume ls</td>
                  <td className="border border-green-400 p-2">List volumes</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker volume rm</td>
                  <td className="border border-green-400 p-2">Remove volumes</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command to manage volumes (e.g., docker volume create my_volume, docker volume rm my_volume).',
      check: (code) => {
        const result = /\b(docker\s+volume\s+(create\s+\w+|ls|inspect\s+\w+|rm\s+\w+))\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker volume create, ls, inspect, or rm (e.g., docker volume create my_volume, docker volume rm my_volume).',
      success: '✅ Great! You managed the volume lifecycle.'
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
          console.log("Completing Level 6");
          localStorage.setItem("level6DockerCompleted", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Docker Volumes and Storage</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 6, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level5DockerCompleted) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Docker Volumes and Storage</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 5 First</h3>
          <p>
            You need to complete Level 5 before accessing Level 6. Go back and finish the Docker Networking lessons!
          </p>
          <Link href="/level5" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 5
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 6: Docker Volumes and Storage</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 6</h2>
          <Link href="/level7" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 7 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}