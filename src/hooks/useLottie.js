// src/hooks/useLottie.js
import { useState, useEffect } from "react";

export const useLottie = (animationPath) => {
  const [animation, setAnimation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!animationPath) {
      setLoading(false);
      return;
    }

    fetch(animationPath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAnimation(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lottie loading error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [animationPath]);

  return { animation, loading, error };
};
