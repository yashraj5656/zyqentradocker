"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import jsPDF from "jspdf";

export default function DockerCertificate() {
  const [unlocked, setUnlocked] = useState(false);
  const [studentName, setStudentName] = useState("");

  useEffect(() => {
    const completed = localStorage.getItem("level9DockerCompleted") === "true";
    setUnlocked(completed);
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF("landscape");

    // Background
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 297, 210, "F");

    // Logo
    const logoImg = new Image();
    logoImg.src = "Zy.png"; // Replace with correct logo path
    doc.addImage(logoImg, "PNG", 20, 20, 40, 40);

    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.setTextColor(44, 62, 80);
    doc.text("Certificate of Completion", 148, 50, { align: "center" });

    // Student Name
    doc.setFont("times", "italic");
    doc.setFontSize(27);
    doc.setTextColor(44, 62, 80);
    doc.text(studentName || "Student Name", 148, 80, { align: "center" });

    // Course Description
    doc.setFont("helvetica", "normal");
    doc.setFontSize(16);
    doc.setTextColor(34, 34, 34);
    doc.text(
      `This certifies that ${studentName} has successfully completed the Docker 
    Fundamentals Course, demonstrating exceptional proficiency with containerization, 
    Docker images, containers, Docker Compose, networking, and best practices. 
    Through this course, ${studentName} has mastered core Docker concepts and is now 
    capable of building and managing containerized applications effectively.`,
      148,
      100,
      { align: "center" }
    );

    // Date
    doc.setFontSize(16);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 60, 170, { align: "center" });

    // Signature
    doc.setFontSize(16);
    doc.text("Signed: Zyqentra", 229, 170, { align: "center" });

    // Border
    doc.setDrawColor(0, 203, 169);
    doc.setLineWidth(3);
    doc.rect(10, 10, 277, 190);

    // Save PDF
    doc.save("Docker_Certificate.pdf");
  };

  return (
    <div style={{ padding: "2rem", color: "white", textAlign: "center" }}>
      {!unlocked ? (
        <div>
          <h2>🔒 Locked</h2>
          <p>You must complete <b>the Docker course</b> to unlock your certificate.</p>
          <Link href="/lesson">
            <button style={btnStyle}>Back to Lessons</button>
          </Link>
        </div>
      ) : (
        <div>
          <h2>🎉 Congratulations! You’ve completed the Docker course.</h2>
          <p>Enter your name to personalize your certificate:</p>
          <div className="form-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>
          <button onClick={generatePDF} className="submit-btn">
            Download PDF Certificate
          </button>
        </div>
      )}
    </div>
  );
}

const btnStyle = {
  marginTop: "1rem",
  padding: "10px 20px",
  background: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
