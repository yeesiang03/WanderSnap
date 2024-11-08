import { View, Text, FlatList } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'

const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
    <FlatList
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <VideoCard video={item} />
      )}

      ListHeaderComponent={() => (
        <View className="my-6 px-4 space-y-6">
          <View className="text-center justify-between items-start flex-row mb-6">
            <View>
              <Text className="font-pmedium text-sm text-gray-100">
                Hello~~~
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                Yee Siang~
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  </SafeAreaView>
  )
}

export default Profile