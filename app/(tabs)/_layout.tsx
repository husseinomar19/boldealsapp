
import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
export default function TabsLayout() {

  return (
  <Tabs 
  screenOptions={{
    tabBarShowLabel:true,
    tabBarLabelStyle: {
     color: '#fff',
    },
    tabBarItemStyle:{
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBarStyle: {
      backgroundColor: '#000',
      height: 60,
      justifyContent: 'center',
      alignItems:'center',
      borderRadius: 50,
      margin:20,
      

    }
  }}
  >
  <Tabs.Screen name="index" options={
    {title: "Home",
    headerShown: false,
    
    tabBarIcon: ({focused}) =>(
      <>
      <Feather name="home" size={24} color={focused ? '#239b56' : '#fff'} />
      </>
    )
      
    }
  } />
   <Tabs.Screen name="search" options={
    {title: "search",
      headerShown: false,
      tabBarIcon: ({focused}) =>(
        <>
        <Feather name="search" size={24} color={focused ? '#239b56' : '#fff'} />
        </>
      )
    }
  } />
 </Tabs>
  )
 
}