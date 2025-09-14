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
  
    // Load background template (place in /public folder of Next.js)
    const bgImg = new Image();
    bgImg.src = "/ZBC.png"; 
  
    bgImg.onload = () => {
      // Fit image to A4 landscape size
      doc.addImage(bgImg, "PNG", 0, 0, 297, 210);
  
      // Title: Certificate of Appreciation
      doc.setFont("Orbitron", "bold");
      doc.setFontSize(34);
      doc.setTextColor(255, 255, 255); 
      doc.text("Certificate of Completion", 148, 40, { align: "center" });
  
      // Subtitle
      doc.setFont("Gill Sans", "normal");
      doc.setFontSize(14);
      doc.text("Proudly Presented To", 148, 60, { align: "center" });
  
      // Student Name (Big + Elegant)
      doc.setFont("times", "italic");
      doc.setFontSize(34);
      doc.setTextColor(0, 203, 169); // Zyqentra teal
      doc.text(studentName || "Name Surname", 148, 80, { align: "center" });
  
      // Course / Reason
      doc.setFont("Gill Sans", "normal");
      doc.setFontSize(14);
      doc.setTextColor(220, 220, 220);
      doc.text(
       `This certifies that ${studentName} has successfully completed the Docker 
    Fundamentals Course, demonstrating exceptional proficiency with containerization, 
    Docker images, containers, Docker Compose, networking, and best practices. 
    Through this course, ${studentName} has mastered core Docker concepts and is now 
    capable of building and managing containerized applications effectively.`,
        148,
        100,
        { align: "center", maxWidth: 250 }
      );
  
      // Date
      doc.setFontSize(12);
      doc.setTextColor(200, 200, 200);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 60, 170, { align: "center" });
  
      // Signature
      doc.setFontSize(12);
      doc.text("Signed: Zyqentra", 230, 170, { align: "center" });
  
      // Save PDF
      doc.save("Zyqentra_Certificate.pdf");
    };
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
