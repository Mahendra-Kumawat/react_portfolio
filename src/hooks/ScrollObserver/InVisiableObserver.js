
import { useState, useEffect } from 'react';

export function useIsVisible(ref) {
  const [isIntersepting, setIntersepting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element visibility changes
        if (entry.isIntersecting) {
          setIntersepting(true);
          // Optional: Unobserve after becoming visible to avoid re-triggering
          // observer.unobserve(ref.current);
        } else {
          // Optional: Set back to false if you want animations to re-trigger on scroll out/in
          // setIntersecting(false);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.7 // Trigger when 10% of the element is visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]); // Re-run effect if ref changes

  return isIntersepting;
}
