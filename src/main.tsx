import ReactDOM from "react-dom/client";
import ChatWidget from "./ChatWidget";

const rootId = "chat-widget-root";
const rootElem = document.getElementById(rootId);

if (rootElem) {
  ReactDOM.createRoot(rootElem).render(<ChatWidget />);
}
