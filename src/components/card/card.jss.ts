import { createUseStyles } from "react-jss";

export const CardStyles = createUseStyles({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    padding: 16,
    backgroundColor: "lightblue",
    justifyContent: "space-between"
  },
  avatar: {
    display: "flex",
    padding: 16,
    minWidth: 100
  },
  userInfo: {
    width: "calc(100% - 132px - 60px)",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    fontSize: 20,
    fontWeight: 800,
    textTransform: "capitalize"
  },
  action: {
    display: "flex",
    minWidth: 60,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 40,
    fontWeight: 800,
    cursor: "pointer"
  }
});
