import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const scrollContainers = [
      document.querySelector('.video-container'),
      document.querySelector('.main-content'),
      document.querySelector('.service-detail-page'),
    ].filter(Boolean);

    scrollContainers.forEach((el) => {
      el.scrollTop = 0;
    });
  }, [pathname]);

  return null;
}
