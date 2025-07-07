import { useState, useEffect, useRef } from 'react';

interface ScrollSpyOptions {
  sectionIds: string[];
  rootMargin?: string;
  threshold?: number | number[];
}

export function useScrollSpy({
  sectionIds,
  rootMargin = "-50% 0px -50% 0px", // Highlights when section is in the middle of the viewport
  threshold = 0, // How much of the element is visible
}: ScrollSpyOptions): string | null {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionElementsRef = useRef<(Element | null)[]>([]);

  useEffect(() => {
    // Clear previous observer if sectionIds change
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    sectionElementsRef.current = sectionIds.map(id => document.getElementById(id.startsWith('#') ? id.substring(1) : id));

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const intersectingEntries = entries.filter(entry => entry.isIntersecting);

      if (intersectingEntries.length > 0) {
        // If multiple are intersecting (e.g., due to rootMargin),
        // prioritize the one closest to the configured "middle" of the viewport.
        // This logic might need adjustment based on desired behavior with rootMargin.
        // A simpler approach if rootMargin is "0px 0px -100% 0px" (top of viewport):
        // setActiveSection(intersectingEntries[0].target.id);

        // For a "middle of viewport" highlight, we find the one with the largest intersection ratio
        // or the one whose bounding client rect is closest to the center.
        // For simplicity here with the given rootMargin, let's pick the first one that becomes active.
        // More sophisticated logic might be needed for precise "center" highlighting.

        // Find the entry that is most "visible" or "centered"
        // This example prioritizes the last entry that became intersecting if multiple are true
        // which often corresponds to the one user is scrolling towards.
        const mostRelevantEntry = intersectingEntries.reduce((prev, current) => {
            return (prev.intersectionRatio > current.intersectionRatio) ? prev : current;
        });
        setActiveSection(mostRelevantEntry.target.id);
      }
      // Optional: If no section is "active" by the rootMargin rule, clear activeSection
      // else if (entries.every(entry => !entry.isIntersecting) && activeSection) {
      //    // This might cause flicker if sections are close. Test thoroughly.
      //    // setActiveSection(null);
      // }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      rootMargin,
      threshold,
    });

    sectionElementsRef.current.forEach(el => {
      if (el) {
        observerRef.current?.observe(el);
      }
    });

    return () => {
      observerRef.current?.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(','), rootMargin, threshold]); // Re-run if sectionIds themselves change

  return activeSection;
}
