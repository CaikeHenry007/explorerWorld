import { Text, View, Modal, TouchableOpacity, TextInput, ImageBackground } from "react-native";
import styles from "../styles/StyleSheet.js"
import { useFonts } from "expo-font";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export default function ModalCadastro({closeCadastro, visibleCadastro, fazerCadastro}) {
  const [font] = useFonts({
    "Pacifico": require("../fonts/Pacifico-Regular.ttf"),
    "Bebas": require("../fonts/Bebas.ttf")
  })
  if (!font) {
    return null;
  }

  return (
    <View>
      <Modal transparent={true} animationType="fade" visible={visibleCadastro}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          
        }}
        blurRadius={7}
        resizeMode="cover"
        source={require("../images/Home.jpg")}>
      <View style={styles.modalcadastro}>
        <View style={styles.modalcadastro2}>
        <View style={{ height: "5%"}}></View>
        <Text style={styles.cadastrotitulo}>Cadastro</Text>
        <View>
            <View style={{height: 90, alignItems: "center", justifyContent: "center", flexDirection:'row'}}>
            <MaterialCommunityIcons
        name='email'
        size={20}
        color={'#c0c0c0'}
        />
        <TextInput style={styles.Caixa} placeholder="Email"/>
        </View>

        <View style={{height: 90, alignItems: "center", justifyContent: "center", flexDirection:'row'}}>
        <MaterialCommunityIcons
        name='account'
        size={20}
        color={'#c0c0c0'}
        />
        <TextInput style={styles.Caixa}placeholder="Username"/>
        </View>

        <View style={{height: 90, alignItems: "center", justifyContent: "center", flexDirection:'row', }}>
        <MaterialCommunityIcons
        name='lock'
        size={20}
        color={'#c0c0c0'}
        />
        <TextInput style={styles.Caixa} secureTextEntry={true}placeholder="Password"/>
        </View>

        <View style={{height: 90, alignItems: "center", justifyContent: "center", flexDirection:'row'}}>
        <MaterialCommunityIcons
        name='phone'
        size={20}
        color={'#c0c0c0'}
        />
        <TextInput style={styles.Caixa}placeholder="Telephone"/>
        </View>

        </View>
      
        <View style={{alignItems:"center"}}>
        <TouchableOpacity style={styles.btncadastro}  onPress={fazerCadastro} >
            <Text style={styles.btntxt}>Cadastrar</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </ImageBackground>
      </Modal>
    </View>
  );
}

