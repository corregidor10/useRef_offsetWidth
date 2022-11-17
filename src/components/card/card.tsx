import { FC, useEffect, useRef, useState } from "react";
import { HiPhoneMissedCall, HiPhoneOutgoing } from "react-icons/hi";
import { useSize } from "../../hooks/useSize";
import { Avatar } from "../avatar/avatar";
import { CardStyles } from "./card.jss";

interface ICardProps {
  name: string;
  photoUrl: string;
}

export const Card: FC<ICardProps> = ({ name, photoUrl }) => {
  const styles = CardStyles();

  const [allowPhoneCalls, setAllowPhoneCalls] = useState<boolean>(true);
  const [showData, setShowData] = useState<boolean>(true);
  const [showIcon, setShowIcon] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const { width } = useSize();

  const icon = allowPhoneCalls ? <HiPhoneOutgoing /> : <HiPhoneMissedCall />;

  const onIconClick = () => {
    setAllowPhoneCalls((prev) => !prev);
  };

  useEffect(() => {
    setShowData(containerRef.current?.offsetWidth! > 500);
    setShowIcon(containerRef.current?.offsetWidth! > 200);
  }, [width]);

  return (
    <div className={styles.cardContainer} ref={containerRef}>
      <div className={styles.avatar}>
        <Avatar src={photoUrl} size="100px" />
      </div>
      {showData && <div className={styles.userInfo}>{name}</div>}
      <div className={styles.action} onClick={onIconClick}>
        {showIcon && icon}
      </div>
    </div>
  );
};
