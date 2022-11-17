import { createUseStyles } from "react-jss";
import { mediaQueries } from "../constants/mediaQueries";

export const MainPageStyles = createUseStyles({
  mainPageContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 48,
    [mediaQueries.TABLET]: {
      flexDirection: "column",
      rowGap: 24
    }
  },
  sectionLeft: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    rowGap: 48,
    [mediaQueries.TABLET]: {
      width: "100%",
      rowGap: 24
    }
  },
  sectionRight: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    rowGap: 48,
    [mediaQueries.TABLET]: {
      width: "100%",
      rowGap: 24
    }
  }
});
