import { createUseStyles } from "react-jss";
import { mediaQueries } from "../../constants";

export const ContainerWidthStyles = createUseStyles({
  containerWidthContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: 16,
    height: 130,
    [mediaQueries.SMART_WATCH]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  wholePage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: 30,
    fontWeight: 800,
    [mediaQueries.SMART_WATCH]: {
      fontSize: 20,
      fontWeight: 600
    }
  },
  currentContainer: {
    display: "flex",
    flexDirection: "column",
    fontSize: 30,
    justifyContent: "center",
    color: "darkgreen",
    fontWeight: 800,
    [mediaQueries.SMART_WATCH]: {
      fontSize: 20,
      fontWeight: 600
    }
  }
});
