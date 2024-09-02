import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="phone"
        options={{
          title: "Phone",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "call" : "call-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mail"
        options={{
          title: "Mail",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "mail" : "mail-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="chat"
        options={{
          title: "Messages",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "chatbox" : "chatbox-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="meetings"
        options={{
          title: "Meetings",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "videocam" : "videocam-outline"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
