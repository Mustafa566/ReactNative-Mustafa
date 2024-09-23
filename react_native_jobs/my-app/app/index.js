import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, DebugInstructions, images, SIZES, icons } from "../constants";
import { ScreenHeaderBtn } from "../components";
import Welcome from '../components/home/welcome/Welcome';
import NearbyJobs from '../components/home/nearby/Nearbyjobs';
import Popularjobs from '../components/home/popular/Popularjobs';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen 
            options={{ 
                headerStyle: { backgroundColor: COLORS.lightWhite }, 
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                ),
                headerTitle: ""
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View 
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                        <Welcome></Welcome>

                        <Popularjobs />
                        <NearbyJobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;