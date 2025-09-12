"use client";
import { useState, useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { loader } from "@monaco-editor/react";

// Load Monaco Editor only on client-side (no SSR)
const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function DockerEditor() {
  // ✅ Docker tasks
  const tasks = [
    "Print Docker version",
    "List all Docker containers",
    "Pull an image from Docker Hub",
    "Run a container from an image",
    "Stop a running container",
    "Remove a container",
    "Build an image from Dockerfile",
    "List Docker images",
    "Run a container in detached mode",
    "Inspect container details",
    "Tag a Docker image",
    "Push an image to Docker Hub",
    "Create a Docker network",
    "Connect a container to a network",
    "Remove a Docker network",
    "Use volumes to persist data",
    "List volumes",
    "Remove a volume",
    "Use Docker Compose to start services",
    "View Docker Compose logs",
  ];

  // ✅ Docker starter commands
  const starterCodes = useMemo(
    () => [
      `docker --version`,
      `docker ps -a`,
      `docker pull nginx`,
      `docker run nginx`,
      `docker stop <container_id>`,
      `docker rm <container_id>`,
      `docker build -t myapp .`,
      `docker images`,
      `docker run -d nginx`,
      `docker inspect <container_id>`,
      `docker tag myapp myrepo/myapp:latest`,
      `docker push myrepo/myapp:latest`,
      `docker network create mynet`,
      `docker network connect mynet <container_id>`,
      `docker network rm mynet`,
      `docker run -v myvolume:/data nginx`,
      `docker volume ls`,
      `docker volume rm myvolume`,
      `docker-compose up -d`,
      `docker-compose logs`,
    ],
    []
  );

  const [currentTask, setCurrentTask] = useState(0);
  const [code, setCode] = useState(starterCodes[0]);
  const [output, setOutput] = useState("");

  // 🔄 Update editor code when task changes
  useEffect(() => {
    setCode(starterCodes[currentTask]);
  }, [currentTask, starterCodes]);

  // ✅ Setup custom theme only on client
  useEffect(() => {
    if (typeof window !== "undefined") {
      loader.init().then((monaco) => {
        monaco.editor.defineTheme("neon-night", {
          base: "vs-dark",
          inherit: true,
          rules: [
            { token: "comment", foreground: "6a9955" },
            { token: "keyword", foreground: "00f2ea", fontStyle: "bold" },
            { token: "identifier", foreground: "ffffff" },
            { token: "string", foreground: "a855f7" },
            { token: "number", foreground: "ffb86c" },
            { token: "delimiter", foreground: "00cba9" },
          ],
          colors: {
            "editor.background": "#0f0f0f",
            "editor.foreground": "#e0e0e0",
            "editor.lineHighlightBackground": "#111111",
            "editor.selectionBackground": "#00cba955",
            "editorCursor.foreground": "#00f2ea",
            "editorCursor.background": "#000000",
            "editor.selectionHighlightBackground": "#00f2ea33",
            "editorIndentGuide.background": "#333333",
            "editorLineNumber.foreground": "#555555",
            "editorLineNumber.activeForeground": "#00f2ea",
            "editorWhitespace.foreground": "#222222",
          },
        });
      });
    }
  }, []);

  // Mock "execution" for Docker commands
  const handleRun = () => {
    setOutput(`💡 Simulated output:\nRunning: ${code}`);
  };

  return (
    <div className="glitch-form-wrapper">
      <div className="glitch-car">
        {/* Header */}
        <div className="card-header">
          <div className="card-title">
            <span>🐳 Docker Editor</span>
          </div>
          <div className="card-dots"><span></span><span></span><span></span></div>
        </div>

        {/* Body */}
        <div className="card-body">
          {/* Task Row */}
          <div className="task-row">
            <p className="task-text">
              Task {currentTask + 1}: {tasks[currentTask]}
            </p>
            <button
              onClick={() => setCurrentTask((prev) => (prev + 1) % tasks.length)}
              className="task-button"
              data-text="Next"
            >
              Next ➝
            </button>
          </div>

          {/* Editor */}
          <Editor
            height="400px"
            theme="neon-night"
            defaultLanguage="shell"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              fontSize: 15,
              fontFamily: '"Fira Code", Consolas, "Courier New", monospace',
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              cursorSmoothCaretAnimation: "on",
              cursorBlinking: "phase",
              renderLineHighlight: "all",
              smoothScrolling: true,
            }}
          />

          {/* Output Section */}
          <div className="card-body">
            <div className="card-header">
              <div className="card-title"><span> Output</span></div>
              <button onClick={handleRun} className="task-button" data-text="Run_Code">
                ▶ Run Command
              </button>
            </div>
            <div className="card-body">
              <pre className="output-text">{output}</pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
