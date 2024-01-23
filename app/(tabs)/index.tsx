import Landing from '@/components/landingPage';
import { ScrollView, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    nestedScrollEnabled
    bouncesZoom
  >
    <View style={{ flex: 1}}>
      <Landing />
    </View>
  </ScrollView>
  );
}
