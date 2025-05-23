import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';
import { ScreenLayout } from '@/components/ScreenLayout';

interface Goal {
  id: string;
  title: string;
  // description?: string; // You could add more details later
}

const userGoals: Goal[] = [
  { id: '1', title: 'Get healthy' },
  { id: '2', title: 'Complete homework' },
  // Add more goals here or fetch them from a data source
];

export default function GoalsScreen2() {
  const colorScheme = useColorScheme();

  const goalItemStyle = {
    ...styles.goalItemContainer,
    borderBottomColor: Colors[colorScheme ?? 'light'].tabIconDefault, // Themed border color
    // If you want a distinct background for goal items:
    // backgroundColor: Colors[colorScheme ?? 'light'].cardBackground, // Assuming you have such a color
  };

  return (
    <ScreenLayout title="My Goals">
      {userGoals.length > 0 ? (
        userGoals.map((goal) => (
          <ThemedView key={goal.id} style={goalItemStyle}>
            <ThemedText type="subtitle">{goal.title}</ThemedText>
            {/* You could add an icon here too, e.g., <IconSymbol name="circle" /> */}
          </ThemedView>
        ))
      ) : (
        <ThemedText style={styles.noGoalsText}>You haven't set any goals yet. Go ahead and add some!</ThemedText>
      )}
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  goalItemContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
  },
  noGoalsText: {
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 16,
    fontSize: 16,
  },
});
