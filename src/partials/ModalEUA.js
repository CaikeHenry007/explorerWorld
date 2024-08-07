import { Text, View, Modal, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import styles from "../styles/StyleSheet.js"
import { useFonts } from "expo-font";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function ModalEua({ closeEua, visibleEua }) {
    return (
        <View>
            <Modal transparent={true} animationType="fade" visible={visibleEua}>
                <View>
                    <Text>Estados Unidos</Text>
                    <TouchableOpacity onPress={closeEua}>
                        <Text>fechar</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

