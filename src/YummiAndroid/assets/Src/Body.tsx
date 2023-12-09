/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native';

import { PratosItem } from '../Components/PratosItem';
import { SeparatorItem } from '../Components/SeparatorItem/SeparatorItem';
import { Pratos, pratosList } from '../Data/PratosList';

export default function Body() {

    function renderItem({ item }: ListRenderItemInfo<Pratos>) {
      return <PratosItem {...item} />;
    }
    return (
      <View style={styles.container}>
        <FlatList
            ItemSeparatorComponent={SeparatorItem}
            data={pratosList}
            keyExtractor={(item) => item.name}
            renderItem={renderItem}
        />
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
});
