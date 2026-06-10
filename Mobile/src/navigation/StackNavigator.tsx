import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {LoginScreen} from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";



//1. definir un stack y declarar tipado


export type RootStackParamList={
  Login:undefined,
  Home:{email:string},
  UserTabs:undefined,
  Register: undefined;
  Profile: undefined;
  EditProfile: undefined;
}
//Crear el stack navigator el cual va a manejar la navegación
const Stack =createNativeStackNavigator <RootStackParamList>();
//Utilizar el stack
export default function StackNavigator (){
  return(
    <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login"component={LoginScreen}/>
      <Stack.Screen name="Register" component={RegisterScreen} />

    </Stack.Navigator>
  )
}