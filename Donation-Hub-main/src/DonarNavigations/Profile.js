import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View
          style={{
            marginTop: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar.Image
            source={{
              uri: "https://api.adorable.io/avatars/80/abott@adorable.png",
            }}
            style={{marginBottom:8}}
            size={100}
          />
          <Title style={styles.title}>Sudharshan</Title>
          <View style={{ flexDirection: "row", gap: 3, alignItems: "center" }}>
            <Ionicons name="location-sharp" size={24} color="#D2042D" />
            <Caption>IIT Tirupati, India</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection2}>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={28}/>
          <Text style={{color:"#777777", marginLeft: 20}}>+91 900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={28}/>
          <Text style={{color:"#777777", marginLeft: 20}}>john_doe@email.com</Text>
        </View>
        <View style={styles.row}>
            <FontAwesome5 name="hand-holding-heart" size={28} color="#777777" />
          <Text style={{color:"#777777", marginLeft: 10}}>10 Received</Text>
        </View>
        <View style={styles.row}>
            <AntDesign name="logout" size={24} color="#777777" />
            <Text style={{color:"#777777", marginLeft: 20}}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  userInfoSection: {
    paddingHorizontal: 16,
    marginBottom: 45,
  },
  userInfoSection2: {
    paddingHorizontal: 16,
    marginBottom: 45,
    display: 'flex',
    gap:1.5
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500",
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
    alignItems:'center'
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
  },
});