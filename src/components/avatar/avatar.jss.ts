import { createUseStyles } from "react-jss";

export const AvatarStyle = createUseStyles({
  content: {
    display: "flex"
  },
  avatar: (props: any) => ({
    width: props.size,
    height: props.size,
    overflow: "hidden",
    objectFit: "cover",
    borderRadius: "50%"
  })
});
