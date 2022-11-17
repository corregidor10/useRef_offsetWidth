import { MainPageStyles } from "./mainPage.jss";
import { Box } from "../components/box/box";
import { Card } from "../components/card/card";
import { ContainerWidthResume } from "../components/containerWidthResume/containerWidthResume";

export const MainPage = () => {
  const styles = MainPageStyles();

  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.sectionLeft}>
        <Box
          children={
            <Card
              name={"Laura María Di Sciglio Morricone"}
              photoUrl={
                "https://media.istockphoto.com/id/1297159365/es/foto/retrato-de-una-joven-sonriente-rostro-parcialmente-cubierto-con-el-pelo-volador-en-un-d%C3%ADa.jpg?s=1024x1024&w=is&k=20&c=2xPCFOHCZ3WZ05vfpais88gJYJJSviiKafeM5EuPjhc="
              }
            />
          }
        />

        <Box children={<ContainerWidthResume />} />
      </div>
      <div className={styles.sectionRight}>
        <Box
          children={
            <Card
              name={"Adoración de los santos reyes"}
              photoUrl={
                "https://media.istockphoto.com/id/1355358172/es/foto/foto-de-cabeza-emocionada-mujer-india-riendo-sobre-fondo-gris-de-estudio.jpg?s=1024x1024&w=is&k=20&c=pasxaNMLHraCM9JR7HkRpM5IHx8Krh6sh8bO2t7TzSY="
              }
            />
          }
        />
        <Box
          children={
            <Card
              name={"Susana García Redondo"}
              photoUrl={
                "https://media.istockphoto.com/id/1355358090/es/foto/disparo-en-la-cabeza-riendo-mujer-joven-emocionada-sobre-fondo-gris.jpg?s=1024x1024&w=is&k=20&c=UuihCje9Ubcro1UHFZwABt-L_djfm7RYwYCFpWNLGWU="
              }
            />
          }
        />
      </div>
    </div>
  );
};
