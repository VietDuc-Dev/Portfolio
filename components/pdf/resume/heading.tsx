import { Text, View, Link, Image, StyleSheet } from "@react-pdf/renderer";

import type { Resume } from "@/constants/resume";

import { IconText } from "./icons";
import { getBaseUrl } from "@/lib/utils/urls";

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingBottom: 16,
    flexDirection: "row",
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 16,
    marginTop: 2,
    color: "#7c46e1",
    fontWeight: 700,
  },
  infoContainer: {
    flexDirection: "row",
    marginTop: 8,
  },

  twoColumn: {
    flexDirection: "row",
    marginTop: 8,
  },
  left: {
    flexGrow: 1,
    marginRight: 16,
    width: "40%",
  },
  right: {
    flexGrow: 1,
    width: "20%",
  },

  link: {
    marginRight: 16,
    textDecoration: "none",
  },
  imageContainer: {
    position: "absolute",
    right: 0,
    top: -20,
    width: 100,
    height: 100,
  },
  image: {
    borderRadius: 99999,
  },
});

type HeadingProps = {
  info: Resume["basics"];
};

export const Heading: React.FC<HeadingProps> = ({ info }) => {
  return (
    <View style={styles.container}>
      <View style={{ margin: 1 }}>
        <Text style={styles.title}>{info.name}</Text>
        <Text style={styles.subTitle}>{info.label}</Text>

        <View style={styles.twoColumn}>
          <View style={styles.left}>
            <Link src={`mailto:${info.email}`} style={styles.link}>
              <IconText icon="at" text={info.email} />
            </Link>

            <Link src={`mailto:${info.phone}`} style={styles.link}>
              <IconText icon="at" text={info.phone} />
            </Link>
            <IconText
              icon="location"
              text={`${info.location.region}, ${info.location.city}, ${info.location.countryCode}`}
            />
          </View>
          <View style={styles.right}>
            <Link src={info.urlGithub} style={styles.link}>
              <IconText icon="link" text={"github"} />
            </Link>
            <Link src={info.urlPortfolio} style={styles.link}>
              <IconText icon="link" text={"Portfolio"} />
            </Link>
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image style={styles.image} src={`${getBaseUrl()}/images/avatar.jpg`} />
        {/* <Image style={styles.image} src={`/images/avatar.jpg`} /> */}
      </View>
    </View>
  );
};
