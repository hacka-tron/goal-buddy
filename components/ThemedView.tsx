import { View, type ViewProps } from 'react-native';
import { SafeAreaView, type SafeAreaViewProps } from 'react-native-safe-area-context';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  useSafeArea?: boolean;
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  useSafeArea,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  if (useSafeArea) {
    // It's safe to cast otherProps to SafeAreaViewProps because SafeAreaViewProps extends ViewProps
    return <SafeAreaView style={[{ backgroundColor }, style]} {...otherProps as SafeAreaViewProps} />;
  }

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
