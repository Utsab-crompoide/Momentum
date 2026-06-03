import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ModalProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '@/theme/Colors';

interface ErrorModalProps extends Omit<ModalProps, 'children'> {
  visible: boolean;
  data: {
    title?: string;
    description?: string;
    primaryButtonText?: string;
  };
  onPress: () => void;
  onCancel: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  visible,
  data,
  onPress,
  onCancel,
  ...modalProps
}) => {
  const {
    title = 'Something went wrong',
    description = "We couldn't process your request at the moment. Please check your internet connection and try again.",
    primaryButtonText = 'Try Again',
  } = data;

  return (
    <Modal visible={visible} transparent animationType="fade" {...modalProps}>
      <View style={styles.container}>
        <View style={styles.modal}>
          {/* Icon Circle */}
          <View style={styles.iconContainer}>
            <View style={styles.errorCircle}>
              <Icon name="warning" size={48} color="#c5192d" />
            </View>
          </View>

          {/* Title */}
          <Text style={styles.title}>{title}</Text>

          {/* Description */}
          <Text style={styles.description}>{description}</Text>

          {/* Primary Button */}
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={onPress}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryButtonText}>{primaryButtonText}</Text>
          </TouchableOpacity>

          {/* Secondary Button */}
          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={onCancel}
            activeOpacity={0.6}
          >
            <Text style={styles.secondaryButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  modal: {
    backgroundColor: colors['surface-container-lowest'],
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 28,
    alignItems: 'center',
    width: '100%',
    maxWidth: 360,
  },
  iconContainer: {
    marginBottom: 24,
  },
  errorCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#f8d7da',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'PlusJakartaSans-Bold',
    color: colors['on-surface'],
    marginBottom: 12,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'PlusJakartaSans-Regular',
    color: colors['on-surface-variant'],
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 24,
  },
  primaryButton: {
    width: '100%',
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'PlusJakartaSans-SemiBold',
    color: colors['on-primary'],
  },
  secondaryButton: {
    paddingVertical: 10,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'PlusJakartaSans-Medium',
    color: colors['on-surface'],
  },
});

export default ErrorModal;
