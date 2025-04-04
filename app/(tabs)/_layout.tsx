
import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';
import Octicons from '@expo/vector-icons/Octicons';
export default function TabsLayout() {

  return (
  <Tabs 
  screenOptions={{
    tabBarShowLabel:true,
    tabBarLabelStyle: {
      
    },
    tabBarItemStyle:{
      width: '100%',
      height: '100%',
      
    },
    tabBarStyle: {
      backgroundColor: '#000',
      borderColor: '#000',
      height: 60,
      borderRadius: 50,
      margin: 10,
      position: 'absolute',
      bottom: 20, 
      zIndex: 100,    

    }
  }}
  >
  <Tabs.Screen name="index" options={
    {title: "Home",
    headerShown: false,
    
    tabBarIcon: ({focused}) =>(
      <>
      <Feather name="home" size={24} color={focused ? '#246bfd' : '#fff'} />
      </>
    )
      
    }
  } />
   <Tabs.Screen name="search" options={
    {title: "search",
      
      headerShown: false,
      tabBarIcon: ({focused}) =>(
        <>
        <Feather name="search" size={24} color={focused ? '#246bfd' : '#fff'}/> 
        </>
      )
    }
  } />
  <Tabs.Screen name="save" options={
    {title: "save",
      
      headerShown: false,
      tabBarIcon: ({focused}) =>(
        <>
        <Octicons name="checklist" size={24} color={focused ? '#246bfd' : '#fff'} /> 
        </>
      )
    }
  } />
 </Tabs>
  )
 
}