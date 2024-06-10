import React from "react";

const MainContent = () => {
  return (
    <main style={styles.main}>
      <h2>Welcome to the main content area!</h2>
      <p>
        This is where your main content will go. You can add text, images, or
        any other content here.
      </p>
      <div style={styles.contentBox}>
        <h3>Section 1</h3>
        <p>Some interesting information about Section 1.</p>
      </div>
      <div style={styles.contentBox}>
        <h3>Section 2</h3>
        <p>Some interesting information about Section 2.</p>
      </div>
      <div style={styles.contentBox}>
        <h3>Section 3</h3>
        <p>Some interesting information about Section 3.</p>
      </div>
    </main>
  );
};

const styles = {
  main: {
    marginLeft: "240px",
    padding: "25px",
    backgroundColor: "#eaeaea",
    minHeight: "100vh",
  },
  contentBox: {
    backgroundColor: "#fff",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default MainContent;
