import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform,
  Modal
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button, Select, Card } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";
import { block } from "react-native-reanimated";

import articles from '../constants/articles';
import ModalDropdown from "react-native-modal-dropdown";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: '25%' }}
            >
              <Block right style={styles.list}>
                <Text>高雄市單車部</Text>
              </Block>
              <Block center style={styles.stat}>
                <Select
                  width={120}
                  defaultIndex={1}
                  options={["高科站", "樹科站", "第一站", "楠梓站"]}
                  />
              </Block>
              <Block center>
                <Text>高雄市燕巢區深中路58號</Text>
              </Block>
              <Block center>
                <Text>經度:22.77269 緯度:120.40028</Text>
              </Block>
              <Block flex style={styles.profileCard}>
                <Block style={styles.info}>
                  <Block row space="around">
                    <Block middle>
                      <Text
                        bold
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        134
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>可借數量</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4 }}
                      >
                        56
                      </Text>
                      <Text size={12} color={argonTheme.COLORS.TEXT}>可停數量</Text>
                    </Block>
                  </Block>
                </Block>
                
                <Block flex>
                  <Card
                    item={{
                      title: '尚餘數量:16',
                      image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                      cta: '借車', 
                      horizontal: true
                      }}
                    horizontal
                    />
                  <Card
                    item={{
                      title: '尚餘數量:32',
                      image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                      cta: '借車', 
                      horizontal: true
                      }}
                    horizontal
                    />
                  <Card
                    item={{
                      title: '尚餘數量:48',
                      image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                      cta: '借車', 
                      horizontal: true
                      }}
                    horizontal
                    />
                </Block>
                <Block middle>
                  <Text>更新時間 13:41</Text>
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 30,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  },
  list: {
    marginRight: 10
  },
  stat: {
    size: 10
  }
});

export default Profile;
