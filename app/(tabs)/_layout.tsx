
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
  <Tabs>
  <Tabs.Screen name="index" options={
    {title: "Home",
      headerShown: false,
      
    }
  } />
   <Tabs.Screen name="search" options={
    {title: "search",
      headerShown: false,
      
    }
  } />
 </Tabs>
  )
 
}