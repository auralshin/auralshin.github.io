import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 5,
    color: "gray",
  },
});

const achievements = [
  {
    descriptions: [
      "Ethereum India Fellowship   ‘21",
      "EthIstanbul Hack ‘23  Mentor",
      "Won Ethereum India Hackathon   ‘22",
      "Won SushiSwap Bounty Eth Dubai Hackathon ‘23",
      "Won Ceramic Bounty in EthGlobal 2020",
      "Won CoinDCX bounty in WarpSpeed Hackathon",
      "Won Router Protocol Bounty in Unfold 2022",
    ],
  },
];

const Achievement: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        "Ethereum India Fellowship ‘21"
        <br />
        "EthIstanbul Hack ‘23 Mentor"
        <br />
        "Won Ethereum India Hackathon ‘22"
        <br />
        "Won SushiSwap Bounty Eth Dubai Hackathon ‘23"
        <br />
        "Won Ceramic Bounty in EthGlobal 2020"
        <br />
        "Won CoinDCX bounty in WarpSpeed Hackathon"
        <br />
        "Won Router Protocol Bounty in Unfold 2022"
      </Text>
    </View>
  );
};

export default Achievement;
