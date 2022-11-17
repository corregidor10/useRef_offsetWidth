import { FC } from "react";
import { BoxStyles } from "./box.jss";

interface IBoxProps {
  children: React.ReactNode;
}

export const Box: FC<IBoxProps> = ({ children }) => {
  const styles = BoxStyles();

  return <div className={styles.boxContainer}>{children}</div>;
};
