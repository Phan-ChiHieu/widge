const ChatWidget = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        background: "white",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        zIndex: 9999,
      }}
    >
      <p>🟢 Hello! How can we help?</p>
    </div>
  );
};

export default ChatWidget;
