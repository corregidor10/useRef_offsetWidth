import { useRef } from "react";
import { useSize } from "../../hooks/useSize";
import { ContainerWidthStyles } from "./containerWidthResume.jss";

export const ContainerWidthResume = () => {
  const styles = ContainerWidthStyles();
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useSize();

  return (
    <div className={styles.containerWidthContainer} ref={containerRef}>
      <div className={styles.wholePage}>
        <span>Screen</span>
        <span>{width}</span>
      </div>
      <div className={styles.currentContainer}>
        <span>Current</span>
        <span>{containerRef.current?.offsetWidth}</span>
      </div>
    </div>
  );
};
