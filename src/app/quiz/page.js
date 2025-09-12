"use client";
import React, { useState } from 'react';
import Link from "next/link";

const questions = [
  {
    question: "Which command is used to build a Docker image from a Dockerfile?",
    options: ["docker build", "docker run", "docker create", "docker compose"],
    correctAnswer: "docker build",
    explanation: "`docker build` builds a Docker image from a Dockerfile. You can specify a tag with `-t`."
  },
  {
    question: "Which command runs a container from an image?",
    options: ["docker start", "docker run", "docker build", "docker exec"],
    correctAnswer: "docker run",
    explanation: "`docker run` starts a container from an image and can also run a command inside it."
  },
  {
    question: "Which file defines services, networks, and volumes for Docker Compose?",
    options: ["Dockerfile", "docker-compose.yml", "dockerfile.yml", "compose.json"],
    correctAnswer: "docker-compose.yml",
    explanation: "Docker Compose uses `docker-compose.yml` to define multi-container applications."
  },
  {
    question: "How do you list all running containers?",
    options: ["docker ps", "docker ls", "docker containers", "docker list"],
    correctAnswer: "docker ps",
    explanation: "`docker ps` lists currently running containers. Add `-a` to see all containers."
  },
  {
    question: "Which command removes a Docker container?",
    options: ["docker rm", "docker rmi", "docker delete", "docker remove"],
    correctAnswer: "docker rm",
    explanation: "`docker rm <container>` removes a container. Use `docker rmi <image>` to remove an image."
  },
  {
    question: "How do you view logs of a running container?",
    options: ["docker log", "docker logs", "docker view", "docker show"],
    correctAnswer: "docker logs",
    explanation: "`docker logs <container>` displays the logs of a container."
  },
  {
    question: "Which command pushes an image to a Docker registry?",
    options: ["docker push", "docker upload", "docker send", "docker publish"],
    correctAnswer: "docker push",
    explanation: "`docker push <image>` uploads an image to a Docker registry."
  },
  {
    question: "Which command runs a container in detached mode?",
    options: ["docker run -d", "docker run -i", "docker run -t", "docker run --rm"],
    correctAnswer: "docker run -d",
    explanation: "Adding `-d` runs the container in the background (detached mode)."
  },
  {
    question: "Which command shows detailed information about an image or container?",
    options: ["docker info", "docker inspect", "docker describe", "docker details"],
    correctAnswer: "docker inspect",
    explanation: "`docker inspect <container_or_image>` provides detailed JSON-formatted info."
  },
  {
    question: "Which command stops a running container?",
    options: ["docker kill", "docker stop", "docker terminate", "docker pause"],
    correctAnswer: "docker stop",
    explanation: "`docker stop <container>` stops a running container gracefully."
  },
  {
    question: "How do you remove all unused images, networks, and containers?",
    options: ["docker cleanup", "docker prune", "docker remove all", "docker gc"],
    correctAnswer: "docker prune",
    explanation: "`docker system prune` removes all unused resources to free up space."
  },
  {
    question: "Which Dockerfile instruction sets the base image?",
    options: ["FROM", "RUN", "COPY", "ENV"],
    correctAnswer: "FROM",
    explanation: "`FROM <image>` sets the base image for the Dockerfile."
  },
  {
    question: "Which Dockerfile instruction copies files from host to container?",
    options: ["ADD", "COPY", "MOVE", "TRANSFER"],
    correctAnswer: "COPY",
    explanation: "`COPY src dest` copies files from host to image. `ADD` can also fetch remote URLs."
  },
  {
    question: "Which command logs into a Docker registry?",
    options: ["docker login", "docker connect", "docker push", "docker auth"],
    correctAnswer: "docker login",
    explanation: "`docker login` authenticates your Docker CLI with a registry."
  },
  {
    question: "Which command lists Docker images on your system?",
    options: ["docker images", "docker list", "docker ps -a", "docker info"],
    correctAnswer: "docker images",
    explanation: "`docker images` shows all images stored locally."
  },
  {
    question: "Which command starts an interactive shell in a running container?",
    options: ["docker exec -it <container> /bin/bash", "docker shell <container>", "docker attach <container>", "docker login -it <container>"],
    correctAnswer: "docker exec -it <container> /bin/bash",
    explanation: "Use `docker exec -it <container> /bin/bash` to open a terminal inside a running container."
  }
];

const DockerQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    const correct = option === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
    setShowFeedback(true);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(-1); // End of quiz
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowFeedback(false);
    setSelectedOption(null);
  };

  return (
    <div className="card-body">
      <h1 className="quiz-title">🐳 Docker Basics Quiz</h1>
      <p className="quiz-description">
        Test your knowledge of Docker fundamentals with this interactive quiz! Answer questions on containers, images, Dockerfile instructions, and more. Get instant feedback and learn as you go!
      </p>

      {currentQuestion === -1 ? (
        <div className="quiz-result">
          <h2 className="quiz-title text-2xl">Quiz Complete!</h2>
          <p className="quiz-description">
            Your score: <span className="font-bold">{score}</span> out of {questions.length}
          </p>
          <p className="quiz-description">
            {score === questions.length
              ? "Perfect score! You're a Docker pro!"
              : score >= questions.length / 2
              ? "Great job! You're getting the hang of Docker basics."
              : "Keep practicing! Try again to improve your score."}
          </p>
          <button className="quiz-button" onClick={handleRestart}>
            Restart Quiz
          </button>
          <a
            href="https://your-store.com/docker-guide"
            className="quiz-buy-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More with Docker Guide
          </a>
        </div>
      ) : (
        <div className="quiz-question">
          <h2 className="quiz-title text-2xl">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="quiz-description font-medium">{questions[currentQuestion].question}</p>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`quiz-option-button ${
                  showFeedback && selectedOption === option
                    ? isCorrect
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
                onClick={() => handleAnswer(option)}
                disabled={showFeedback}
              >
                {option}
              </button>
            ))}
          </div>
          {showFeedback && (
            <div className="quiz-feedback">
              <p className={isCorrect ? 'text-green-400' : 'text-red-400'}>
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </p>
              <p className="quiz-description">{questions[currentQuestion].explanation}</p>
              <button className="quiz-button" onClick={handleNext}>
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            </div>
          )}
          <p className="quiz-score">Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default DockerQuiz;
