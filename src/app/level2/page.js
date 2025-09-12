"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level2() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level1DockerCompleted, setLevel1DockerCompleted] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel1DockerCompleted(localStorage.getItem("level1DockerCompleted") === "true");
  }, []);

  const lessons = [
    {
      title: "Understanding Docker Images and Layers",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Docker Images and Layers</h4>
          <p>
            Docker images are read-only templates used to create containers, built from layers.
          </p>
          <p className="mt-2">
            <b>🔹 Images</b><br />
            Images are snapshots of an application and its dependencies:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Example: An image contains app code and runtime\ndocker images`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Layers</b><br />
            Images are built from cached, immutable layers (e.g., base OS, libraries):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Each Dockerfile instruction creates a layer\n# Layers are reused for efficiency`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 View Images</b><br />
            List local images to see their structure:
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
        </div>
      ),
      task: 'Write "images" or "layers" to confirm understanding.',
      check: (code) => {
        const result = /\b(images|layers)\b/i.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Enter "images" or "layers".',
      success: '✅ Great! You understand Docker images and layers.'
    },
    {
      title: "Pulling Images from Docker Hub with docker pull",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Pulling Images from Docker Hub with docker pull</h4>
          <p>
            Use <code>docker pull</code> to download images from Docker Hub.
          </p>
          <p className="mt-2">
            <b>🔹 Pull an Image</b><br />
            Download a specific image:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker pull nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Pull a Specific Tag</b><br />
            Specify a version using a tag:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker pull nginx:latest`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Verify Pull</b><br />
            Check downloaded images:
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
        </div>
      ),
      task: 'Write a command to pull an image from Docker Hub (e.g., docker pull nginx).',
      check: (code) => {
        const result = /\b(docker\s+pull\s+\w+(:\w+)?)\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker pull (e.g., docker pull nginx or docker pull nginx:latest).',
      success: '✅ Great! You pulled an image from Docker Hub.'
    },
    {
      title: "Exploring Official vs. Custom Images",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Exploring Official vs. Custom Images</h4>
          <p>
            Understand the difference between official and custom Docker images.
          </p>
          <p className="mt-2">
            <b>🔹 Official Images</b><br />
            Maintained by Docker or trusted organizations:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Example: Official image\ndocker pull ubuntu`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Custom Images</b><br />
            Built by users for specific needs:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Example: Pull a custom image\ndocker pull myuser/myapp`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 List Images</b><br />
            Check available images:
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
        </div>
      ),
      task: 'Write a command to pull an official or custom image (e.g., docker pull ubuntu, docker pull user/app).',
      check: (code) => {
        const result = /\b(docker\s+pull\s+(\w+|\w+\/\w+)(:\w+)?)\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker pull for an official or custom image (e.g., docker pull ubuntu, docker pull user/app).',
      success: '✅ Great! You explored official and custom images.'
    },
    {
      title: "Tagging and Pushing Images with docker tag and docker push",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Tagging and Pushing Images with docker tag and docker push</h4>
          <p>
            Tag and push images to Docker Hub for sharing.
          </p>
          <p className="mt-2">
            <b>🔹 Tag an Image</b><br />
            Assign a new name or tag to an image:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker tag myapp myuser/myapp:latest`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Push to Docker Hub</b><br />
            Upload the tagged image:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker push myuser/myapp:latest`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Login to Docker Hub</b><br />
            Authenticate before pushing:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker login`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a command using docker tag, docker push, or docker login (e.g., docker tag myapp user/app).',
      check: (code) => {
        const result = /\b(docker\s+(tag\s+\w+\s+\w+\/\w+(:\w+)?|push\s+\w+\/\w+(:\w+)?|login))\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker tag, docker push, or docker login (e.g., docker tag myapp user/app, docker push user/app).',
      success: '✅ Great! You tagged or pushed an image.'
    },
    {
      title: "Inspecting Images with docker inspect and docker history",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Inspecting Images with docker inspect and docker history</h4>
          <p>
            Examine image details and layer history.
          </p>
          <p className="mt-2">
            <b>🔹 Inspect Image Details</b><br />
            View metadata about an image:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker inspect nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 View Image Layers</b><br />
            Check the history of image layers:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker history nginx`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combine with Pull</b><br />
            Pull and inspect an image:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker pull ubuntu\ndocker inspect ubuntu`}
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
                  <td className="border border-green-400 p-2">docker pull</td>
                  <td className="border border-green-400 p-2">Download images</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker tag</td>
                  <td className="border border-green-400 p-2">Rename or tag images</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker push</td>
                  <td className="border border-green-400 p-2">Upload images to Docker Hub</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker inspect</td>
                  <td className="border border-green-400 p-2">View image metadata</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">docker history</td>
                  <td className="border border-green-400 p-2">Show image layer history</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a command using docker inspect or docker history (e.g., docker inspect nginx).',
      check: (code) => {
        const result = /\b(docker\s+(inspect\s+\w+|history\s+\w+))\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker inspect or docker history (e.g., docker inspect nginx, docker history ubuntu).',
      success: '✅ Great! You inspected Docker images.'
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
          console.log("Completing Level 2");
          localStorage.setItem("level2DockerCompleted", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Working with Docker Images</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 2, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level1DockerCompleted) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Working with Docker Images</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 1 First</h3>
          <p>
            You need to complete Level 1 before accessing Level 2. Go back and finish the Docker Basics lessons!
          </p>
          <Link href="/level1" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 1
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 2: Working with Docker Images</h2>

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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 2</h2>
          <Link href="/level3" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 3 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}