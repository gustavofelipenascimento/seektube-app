import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen';
import SobreScreen from '../screens/SobreScreen';
import ContatoScreen from '../screens/ContatoScreen';
import StudyScreen from '../screens/StudyScreen';
import PerfilScreen from '../screens/PerfilScreens';
import NewsScreen from '../screens/NewsScreen';


const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="TabNavigator"
                    component={TabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen} 
                options={{
                    title: 'home',
                    tabBarIcon: 'home',
                }}
                />
                <Tab.Screen
                name="News"
                component={NewsScreen}
                options={{
                    title: 'news',
                    tabBarIcon: 'newspaper',
                }} /> 
                <Tab.Screen 
                name="Sobre"
                component={SobreScreen}
                options={{
                    title: 'sobre',
                    tabBarIcon: 'information',
                }}/>
                <Tab.Screen
                name="Contato"
                component={ContatoScreen}
                options={{
                    title: 'contato',
                    tabBarIcon: 'mail',
                }} />
                <Tab.Screen
                name="Study"
                component={StudyScreen} 
                options={{
                 title: 'study',
                 tabBarIcon: 'book',   
                }} />
                <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                options={{
                    title: 'perfil',
                    tabBarIcon: 'account',
                }} />
        </Tab.Navigator>
    );
}