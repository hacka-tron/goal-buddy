import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';


interface ScreenLayoutProps {
    children: React.ReactNode;
    title: string;
}

export function ScreenLayout({ children, title }: ScreenLayoutProps) {
    const bottom = useBottomTabOverflow();

    return (
        <ThemedView useSafeArea style={styles.screenContainer}>
            <ScrollView
                contentContainerStyle={[styles.scrollContentContainer, { paddingBottom: bottom }]}
                scrollIndicatorInsets={{ bottom }}
                keyboardShouldPersistTaps="handled">
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type="title">{title}</ThemedText>
                </ThemedView>
                {children}
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    scrollContentContainer: {
        paddingTop: 32,       // Explicitly set top padding for content
        paddingHorizontal: 32, // Horizontal padding for content (left and right)
        // Note: paddingBottom is dynamically applied inline using the `bottom` variable
        gap: 16,              // Gap between title container and children, and between children
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        // No specific horizontal padding here; it inherits from scrollContentContainer's padding.
    },
});