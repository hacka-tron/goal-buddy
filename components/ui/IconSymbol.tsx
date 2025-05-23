// This file is a fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// a reusable mapping type for *any* icon component
type IconMap<Comp extends React.ComponentType<any>> =
  Partial<Record<import('expo-symbols').SymbolViewProps['name'], React.ComponentProps<Comp>['name']>>;

const MATERIAL_MAPPING: IconMap<typeof MaterialIcons> = {
  'handshake': 'handshake',
  'bubble.left': 'chat-bubble-outline',
  'bubble.left.fill': 'chat-bubble'
};

const FEATHER_MAPPING: IconMap<typeof Feather> = {
  'target': 'target',
};

export type IconSymbolName = keyof (typeof MATERIAL_MAPPING & typeof FEATHER_MAPPING);

/**
 * An icon component that uses native SFSymbols on iOS, and MaterialIcons on Android and web. This ensures a consistent look across platforms, and optimal resource usage.
 *
 * Icon `name`s are based on SFSymbols and require manual mapping to MaterialIcons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  if (name in MATERIAL_MAPPING) {
    return <MaterialIcons color={color} size={size} name={MATERIAL_MAPPING[name]} style={style} />;
  } if (name in FEATHER_MAPPING) {
    return <Feather color={color} size={size} name={FEATHER_MAPPING[name]} style={style} />;
  }
}
