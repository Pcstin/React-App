import React from "react";
import {
  ImageBackground,
  StyleSheet,
  StatusBar,
  Dimensions
} from "react-native";
import { Block, Button as GaButton, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import Images from "../constants/Images";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block flex style={styles.container}>
        <StatusBar hidden />
        <Block flex center>
        <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block>
        <Block flex space="between">
          <Block style={styles.padded}>
            <Block center style={styles.title}>
              <Text color="white" size={48}>
                租車APP
              </Text>
            </Block>
          </Block>
          <Block flex space="around" style={styles.padded}>
            <Block row center>
              <Block flex right>
                <Block center>
                  <GaButton
                    round
                    onlyIcon
                    shadowless
                    icon="facebook"
                    iconFamily="Font-Awesome"
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE * 1.625}
                    color={theme.COLORS.FACEBOOK}
                    style={[styles.social, styles.shadow]}
                    onPress={() => navigation.navigate("App")}
                    />
                  <Text>會員中心</Text>
                  </Block>
              </Block>
              <Block flex center>
                <Block center>
                  <GaButton
                    round
                    onlyIcon
                    shadowless
                    icon="twitter"
                    iconFamily="Font-Awesome"
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE * 1.625}
                    color={theme.COLORS.TWITTER}
                    style={[styles.social, styles.shadow]}
                    onPress={() => navigation.navigate("Main")}
                  />
                  <Text>站點查詢</Text>
                </Block>
              </Block>
              <Block flex left>
                <Block center>
                  <GaButton
                    round
                    onlyIcon
                    shadowless
                    icon="dribbble"
                    iconFamily="Font-Awesome"
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE * 1.625}
                    color={theme.COLORS.DRIBBBLE}
                    style={[styles.social, styles.shadow]}
                  />
                  <Text>申報表單</Text>
                </Block>
              </Block>
            </Block>
            <Block center style={styles.subTitle}>
              <Block left>
                <Text color="white" size={10}>
                  組長:黃建銘C123456789
                </Text>
                <Text color="white" size={10}>
                  組員:雯琪琪C123456789, 綉綉綉C123456798, 徐孝賢1100137146
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0
  },
  logo: {
    width: 200,
    height: 60,
    zIndex: 2,
    position: 'relative',
    marginTop: '-50%'
  },
  title: {
    marginTop:'-5%'
  },
  subTitle: {
    marginTop: 20
  }
});

export default Onboarding;
