"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Level4() {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [level3DockerCompleted, setLevel3DockerCompleted] = useState(false);

  useEffect(() => {
    setSubscribed(localStorage.getItem("subscribed") === "true");
    setLevel3DockerCompleted(localStorage.getItem("level3DockerCompleted") === "true");
  }, []);

  const lessons = [
    {
      title: "Understanding Dockerfile Syntax and Structure",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Understanding Dockerfile Syntax and Structure</h4>
          <p>
            A Dockerfile defines instructions to build a Docker image.
          </p>
          <p className="mt-2">
            <b>🔹 Dockerfile Basics</b><br />
            A Dockerfile is a script with instructions like <code>FROM</code>, <code>RUN</code>, and <code>CMD</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Sample Dockerfile\nFROM ubuntu\nRUN apt-get update\nCMD ["echo", "Hello, World!"]`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Syntax Rules</b><br />
            Instructions are case-insensitive, typically uppercase:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`# Comments start with #\n# Each instruction creates a layer\nFROM node`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Structure</b><br />
            Start with <code>FROM</code>, followed by setup and runtime instructions:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`FROM base_image\n# Setup commands\n# Runtime command`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write "Dockerfile" or "FROM" to confirm understanding.',
      check: (code) => {
        const result = /\b(Dockerfile|FROM)\b/i.test(code);
        console.log(`Lesson 0 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Enter "Dockerfile" or "FROM".',
      success: '✅ Great! You understand Dockerfile syntax and structure.'
    },
    {
      title: "Using Dockerfile Instructions: FROM, RUN, COPY, ADD",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using Dockerfile Instructions: FROM, RUN, COPY, ADD</h4>
          <p>
            Learn key Dockerfile instructions for building images.
          </p>
          <p className="mt-2">
            <b>🔹 FROM</b><br />
            Specifies the base image:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`FROM ubuntu:latest`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 RUN</b><br />
            Executes commands during image build:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`RUN apt-get update && apt-get install -y python3`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 COPY and ADD</b><br />
            Copy files to the image; <code>ADD</code> also handles URLs/tar:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`COPY app.py /app/\nADD app.tar.gz /app/`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Dockerfile snippet using FROM, RUN, COPY, or ADD (e.g., FROM ubuntu, RUN apt-get update).',
      check: (code) => {
        const result = /\b(FROM\s+\w+(:\w+)?|RUN\s+\S+|COPY\s+\S+\s+\S+|ADD\s+\S+\s+\S+)\b/m.test(code);
        console.log(`Lesson 1 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use FROM, RUN, COPY, or ADD (e.g., FROM ubuntu, RUN apt-get update, COPY file /path).',
      success: '✅ Great! You used Dockerfile instructions.'
    },
    {
      title: "Using CMD and ENTRYPOINT Instructions",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Using CMD and ENTRYPOINT Instructions</h4>
          <p>
            Define how a container runs with <code>CMD</code> and <code>ENTRYPOINT</code>.
          </p>
          <p className="mt-2">
            <b>🔹 CMD</b><br />
            Specifies default container command (overridable):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`CMD ["python3", "app.py"]`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 ENTRYPOINT</b><br />
            Sets the main executable (less overridable):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ENTRYPOINT ["node", "server.js"]`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Combine CMD and ENTRYPOINT</b><br />
            Use together for flexibility:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`ENTRYPOINT ["python3"]\nCMD ["app.py"]`}
            </pre>
          </p>
        </div>
      ),
      task: 'Write a Dockerfile snippet using CMD or ENTRYPOINT (e.g., CMD ["python3", "app.py"]).',
      check: (code) => {
        const result = /\b(CMD\s+\[.*\]|\bENTRYPOINT\s+\[.*\])\b/m.test(code);
        console.log(`Lesson 2 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use CMD or ENTRYPOINT (e.g., CMD ["python3", "app.py"], ENTRYPOINT ["node", "server.js"]).',
      success: '✅ Great! You defined container runtime commands.'
    },
    {
      title: "Building Custom Images with docker build -t <name> .",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Building Custom Images with docker build -t &lt;name&gt; .</h4>
          <p>
            Build images from a Dockerfile using <code>docker build</code>.
          </p>
          <p className="mt-2">
            <b>🔹 Build an Image</b><br />
            Create an image with a name and tag:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker build -t myapp:latest .`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Build with Dockerfile</b><br />
            Specify a Dockerfile (default is ./Dockerfile):
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`docker build -t myuser/myapp:1.0 -f Dockerfile .`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Verify Build</b><br />
            Check the created image:
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
      task: 'Write a command to build an image (e.g., docker build -t myapp:latest .).',
      check: (code) => {
        const result = /\b(docker\s+build\s+-t\s+\w+(\/\w+)?(:[\w\d.-]+)?\s+(.|-f\s+\S+\s+.)?)\b/m.test(code);
        console.log(`Lesson 3 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use docker build -t (e.g., docker build -t myapp:latest .).',
      success: '✅ Great! You built a custom Docker image.'
    },
    {
      title: "Optimizing Dockerfiles and Creating Simple App Images",
      description: (
        <div>
          <h4 className="text-xl font-bold mb-2">Optimizing Dockerfiles and Creating Simple App Images</h4>
          <p>
            Optimize Dockerfiles for smaller images and build simple app images.
          </p>
          <p className="mt-2">
            <b>🔹 Optimize Layers</b><br />
            Combine commands to reduce layers:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`RUN apt-get update && apt-get install -y python3 && apt-get clean`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Use Smaller Base Images</b><br />
            Choose lightweight images like <code>alpine</code>:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`FROM node:alpine\nCOPY app.js /app/\nCMD ["node", "app.js"]`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Simple App Image</b><br />
            Example for a Python app:
            <pre
              style={{
                background: "#222",
                color: "#0f0",
                padding: "10px",
                borderRadius: "8px",
              }}
            >
              {`FROM python:3.9-slim\nCOPY app.py /app/\nWORKDIR /app\nRUN pip install flask\nCMD ["python", "app.py"]`}
            </pre>
          </p>
          <p className="mt-2">
            <b>🔹 Optimization Tips</b><br />
            <table className="border border-green-400 border-collapse w-full mt-2">
              <thead>
                <tr className="border border-green-400">
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Technique</th>
                  <th className="border border-green-400 p-2 bg-gray-900 text-green-400">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Use slim/alpine images</td>
                  <td className="border border-green-400 p-2">Reduce image size</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Combine RUN commands</td>
                  <td className="border border-green-400 p-2">Minimize layers</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Clean up in RUN</td>
                  <td className="border border-green-400 p-2">Remove temp files</td>
                </tr>
                <tr className="border border-green-400">
                  <td className="border border-green-400 p-2">Use .dockerignore</td>
                  <td className="border border-green-400 p-2">Exclude unnecessary files</td>
                </tr>
              </tbody>
            </table>
          </p>
        </div>
      ),
      task: 'Write a Dockerfile for a simple app or an optimization command (e.g., FROM python:3.9-slim, RUN apt-get update && apt-get clean).',
      check: (code) => {
        const result = /\b(FROM\s+\w+(:\w+|-slim|-alpine)?|RUN\s+.*&&.*clean|COPY\s+\S+\s+\S+|CMD\s+\[.*\]|WORKDIR\s+\S+)\b/m.test(code);
        console.log(`Lesson 4 Check: Code="${code}", Result=${result}`);
        return result;
      },
      error: '❌ Try again. Use FROM, RUN (with cleanup), COPY, CMD, or WORKDIR for a simple app or optimization (e.g., FROM python:3.9-slim, RUN apt-get update && apt-get clean).',
      success: '✅ Great! You optimized a Dockerfile or created a simple app image.'
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
          console.log("Completing Level 4");
          localStorage.setItem("level4DockerCompleted", "true");
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
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: Dockerfile and Building Custom Images</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Subscription Required</h3>
          <p>
            To access Level 4, you need a subscription. Please subscribe to continue learning.
          </p>
          <div><br /></div>
          <Link href="/subscribe" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700" style={{ textDecoration: 'none' }}>
            Subscribe Now
          </Link>
        </div>
      </div>
    );
  }

  if (!level3DockerCompleted) {
    return (
      <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: Dockerfile and Building Custom Images</h2>
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Complete Level 3 First</h3>
          <p>
            You need to complete Level 3 before accessing Level 4. Go back and finish the Container Management lessons!
          </p>
          <Link href="/level3" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 3
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="lesson-page max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="header text-2xl font-bold text-center text-gray-800 mb-6">🚀 Level 4: Dockerfile and Building Custom Images</h2>

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
            placeholder="💻 Type your Dockerfile or Docker command here..."
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
          <h2 className="text-2xl font-bold text-green-600 mb-4">🎉 Congrats! You completed Level 4</h2>
          <Link href="/level5" className="btn px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Go to Level 5 ➡️
          </Link>
        </div>
      )}
    </div>
  );
}