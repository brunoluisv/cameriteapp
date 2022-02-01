import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './styles';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export function Header({ showBackButton, goTo }) {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {showBackButton
        ? (
          <>
            <Ionicons 
              style={styles.icon} 
              name="chevron-back-circle-sharp" 
              size={30} 
              color="black" 
              onPress={() => navigation.navigate(goTo)} 
            />
            <Image source={require('../../../assets/camerite-logo.png')} style={styles.image} />
          </>
        )
        : <Image source={require('../../../assets/camerite-logo.png')} style={styles.image} />
      }
    </SafeAreaView>
  );
}