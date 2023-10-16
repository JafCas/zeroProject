import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';

const MainInfo = () => {
  const [isStatusActive, setIsStatusActive] = useState(false);

  const optionsArray = [
    { name: 'First' },
    { name: 'Second' },
    { name: 'Third' },
    { name: 'Fourth' },
  ];
  return (
    <SafeAreaView style={{ flex: 1, margin: 16 }}>
      <View
        style={{
          // backgroundColor: 'gray',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          // style={{ backgroundColor: 'blue' }}
          onPress={() => {
            console.log('apretao');
            setIsStatusActive(!isStatusActive);
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 16,
                backgroundColor: isStatusActive ? 'green' : 'red',
                marginHorizontal: 10,
              }}
            ></View>
            <View
              style={{
                height: 30,
                // backgroundColor: isStatusActive ? 'green' : 'red',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: isStatusActive ? 'green' : 'red',
                  fontSize: 16,
                }}
              >
                Status
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'cyan',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Main Info</Text>
        </View>
        <View
          style={{ backgroundColor: 'white', height: 40, width: 40 }}
        ></View>
      </View>
      <View
        style={{
          // backgroundColor: 'gray',
          height: 30,
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingEnd: 30,
        }}
      >
        {optionsArray.map(option => {
          return (
            // <View style={{justifyContent: 'center', }}>
            <TouchableOpacity>
              <Text style={{ fontWeight: '600' }}>
                {option.name.toUpperCase()}
              </Text>
            </TouchableOpacity>
            // </View>
          );
        })}
      </View>
      <View
        style={{
          flex: 9,
          backgroundColor: 'beige',
          paddingTop: 100,
          alignItems: 'center',
        }}
      >
        <View
          style={{ height: 200, width: 200, backgroundColor: 'gray' }}
        ></View>
        <Text>HOLAHOLA</Text>
        <View
          style={{
            height: 45,
            width: 45,
            backgroundColor: 'gray',
            borderRadius: 25,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default MainInfo;
