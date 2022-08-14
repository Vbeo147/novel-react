import { useState, useEffect } from "react";

export default function useLocal(key) {
  const [local, setLocal] = useState(
    localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
  );
  useEffect(() => {
    const Local = localStorage.getItem(key);
    if (Local) {
      setLocal(JSON.parse(Local));
    }
  }, [key]);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(local));
  }, [local, key]);
  if (typeof key !== "string") {
    return;
  }
  return { local, setLocal };
}
