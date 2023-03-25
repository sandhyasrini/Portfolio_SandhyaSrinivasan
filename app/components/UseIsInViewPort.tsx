import { RefObject, useEffect, useMemo, useRef, useState } from "react";

export function useIsInViewport(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observer: any = useRef();

  // observer = useMemo(
  //   () =>
  //     new IntersectionObserver(([entry]) =>
  //       setIsIntersecting(entry.isIntersecting)
  //     ),
  //   []
  // );
  useEffect(() => {
    observer.current = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );
  }, []); // do this only once, on mountnpm 

  useEffect(() => {
    observer && observer.current.observe(ref.current as Element);

    return () => {
      observer && observer.current.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}
