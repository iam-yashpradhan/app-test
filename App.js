import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';


export default function App() {
  return (
      // <WebView
      //     source={{
      //       uri: 'http://127.0.0.1:3000/',
      //     }}
      //     originWhitelist={['https://*', 'bankid://*']}
      //     onShouldStartLoadWithRequest={(r) => {
      //       if (r.url.startsWith('bankid:///')) {
      //         Linking.openURL(r.url)
      //         return false
      //       }
      //       return true
      //     }}
      // />
      <WebView
          style={styles.container}
          source={{ uri: 'https://cdibuild.netlify.app/' }}
      />
      // <Text style={styles.container}>
      //   Yash Pradhan
      // </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});