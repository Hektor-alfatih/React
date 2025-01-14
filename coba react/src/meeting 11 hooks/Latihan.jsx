import { useState, useEffect } from "react";

// Custom hook
export default function UseOnlineStatus(key) {
  const [state, setState] = useState(key);

  useEffect(() => {
    function handleOnline() {
      setState(true);
    }

    function handleOffline() {
      setState(false);          
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return state;
}

export function StatusBar() {
  const isOnline = UseOnlineStatus(navigator.onLine);

  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

export function SaveButton() {
  const isOnline = UseOnlineStatus(navigator.onLine);

  function handleSaveClick() {
    console.log("Progress saved");
  }

  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save Progress" : "Reconnecting..."}
    </button>
  );
}
