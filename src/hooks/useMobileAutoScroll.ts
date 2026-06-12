import { RefObject, useEffect, useRef } from 'react';

const MOBILE_BREAKPOINT = 640;
const AUTO_SCROLL_INTERVAL = 3500;
const AUTO_SCROLL_RESUME_DELAY = 5000;
const AUTO_SCROLL_RESET_DELAY = 700;

export default function useMobileAutoScroll(
  containerRef: RefObject<HTMLElement | null>,
  dependencyKey?: string | number
) {
  const pauseUntilRef = useRef(0);
  const isAutoScrollingRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    if (!container || typeof window === 'undefined') {
      return;
    }

    let intervalId: number | null = null;
    let scrollResetId: number | null = null;

    const isMobileViewport = () => window.innerWidth < MOBILE_BREAKPOINT;

    const getItems = () =>
      Array.from(container.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement
      );

    const pauseAutoScroll = () => {
      pauseUntilRef.current = Date.now() + AUTO_SCROLL_RESUME_DELAY;
    };

    const clearScrollReset = () => {
      if (scrollResetId !== null) {
        window.clearTimeout(scrollResetId);
        scrollResetId = null;
      }
    };

    const scrollToNextItem = () => {
      if (!isMobileViewport() || document.hidden || Date.now() < pauseUntilRef.current) {
        return;
      }

      const items = getItems();

      if (items.length < 2) {
        return;
      }

      const currentLeft = container.scrollLeft;
      let currentIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      items.forEach((item, index) => {
        const distance = Math.abs(item.offsetLeft - currentLeft);

        if (distance < closestDistance) {
          closestDistance = distance;
          currentIndex = index;
        }
      });

      const nextIndex = currentIndex >= items.length - 1 ? 0 : currentIndex + 1;
      const nextLeft = nextIndex === 0 ? 0 : items[nextIndex].offsetLeft;

      isAutoScrollingRef.current = true;
      container.scrollTo({ left: nextLeft, behavior: 'smooth' });
      clearScrollReset();
      scrollResetId = window.setTimeout(() => {
        isAutoScrollingRef.current = false;
      }, AUTO_SCROLL_RESET_DELAY);
    };

    const handleUserInteraction = () => {
      if (!isAutoScrollingRef.current) {
        pauseAutoScroll();
      }
    };

    intervalId = window.setInterval(scrollToNextItem, AUTO_SCROLL_INTERVAL);
    container.addEventListener('touchstart', handleUserInteraction, { passive: true });
    container.addEventListener('pointerdown', handleUserInteraction);

    return () => {
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }

      clearScrollReset();
      container.removeEventListener('touchstart', handleUserInteraction);
      container.removeEventListener('pointerdown', handleUserInteraction);
    };
  }, [containerRef, dependencyKey]);
}
