import { View, Text, Dimensions, Image } from 'react-native';
import React from 'react';
import colors from '@/theme/Colors';
import typography from '@/theme/Typography';

const LoginScreen = () => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const logo_url = 'https://picsum.photos/200/300';
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 16,
        backgroundColor: colors.background,
        width: SCREEN_WIDTH,
        padding: 20,
      }}
    >
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Image
          source={{ uri: logo_url || 'https://picsum.photos/200/300' }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 16,
          }}
        />
        <Text
          style={{
            ...typography.h1,
            color: colors.primary,
          }}
        >
          GharSewa
        </Text>
        <Text
          style={{
            ...typography.bodyMd,
            color: colors['on-surface-variant'],
          }}
        >
          Your home, cared for by neighbors you trust.
        </Text>
      </View>
      <View
        style={{
          flex: 1 / 2,
          backgroundColor: colors['surface-container-lowest'],
          width: '100%',
          borderRadius: 10,
          padding: 20,
          marginTop: 20,
          borderWidth: 0.8,
          borderColor: colors['outline-variant'],
        }}
      >
        <Text style={{ ...typography.h2, color: colors['on-surface'] }}>
          Welcome Back
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
