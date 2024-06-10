import React from "react";

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <nav>
        <ul style={styles.ul}>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="/">
              Home
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="/">
              About
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="/">
              Services
            </a>
          </li>
          <li style={styles.li}>
            <a
              style={styles.a}
              href="/">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

const styles = {
  sidebar: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    width: "200px",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  },
  ul: {
    listStyleType: "none",
    padding: 0,
  },
  li: {
    margin: "10px 0",
  },
  a: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "color 0.3s",
  },
  aHover: {
    color: "#007bff",
  },
};

export default Sidebar;
