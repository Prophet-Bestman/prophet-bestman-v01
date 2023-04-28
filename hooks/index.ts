import { useEffect, useMemo, useState } from "react";

function useIsInViewport(ref: any) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(() => {
    if (typeof IntersectionObserver !== "undefined") {
      return new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting)
      );
    }
  }, []);

  useEffect(() => {
    observer?.observe(ref.current);

    return () => {
      observer?.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}

export default useIsInViewport;
