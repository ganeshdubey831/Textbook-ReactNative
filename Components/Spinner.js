import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
function Spinner({ size }) {
    return (
        <View>
            <ActivityIndicator size={size || 'large'} color="white" />
        </View>
    )
}

const Styles = StyleSheet.create({
})
export default Spinner