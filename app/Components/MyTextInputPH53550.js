import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MyTextInput = (props) => {
  return (
    <View style={st.container}>
      {props.label && <Text style={st.label}>{props.label}</Text>}
      <TextInput
        {...props}
        style={[st.input, props.style]}
        placeholderTextColor={props.placeholderTextColor || '#666'}
      />
    </View>
  )
}

export default MyTextInput

const st = StyleSheet.create({
  container: {
    marginTop: 10
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1.5,
    borderColor: '#3498db', // Màu xanh dương nhẹ
    borderRadius: 10, // Bo góc
    fontSize: 16,
    color: '#333', // Màu chữ tối dễ nhìn
    backgroundColor: '#f9f9f9', // Màu nền nhẹ
  },
  label: {
    color: '#2c3e50', // Màu chữ tối
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 5,
  },
})
