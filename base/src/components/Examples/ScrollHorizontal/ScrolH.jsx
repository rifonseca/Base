import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import styles from './Styles'

export default function ScrolH() {
  return (
<SafeAreaView >

    <ScrollView horizontal>
    <View style={styles.container}>

    <View style={styles.item}>

    </View>

    <View style={styles.item2}>

    </View>

    <View style={styles.item3}>

    </View>

    <View style={styles.item4}>

    </View>

    <View style={styles.item5}>

    </View>

    </View>

    <View style={styles.container2}>

    </View>


    </ScrollView>

   

 
</SafeAreaView>
  )
}