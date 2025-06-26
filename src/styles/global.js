import { StyleSheet, Dimensions } from 'react-native';
import { colors, fonts, spacing, layout } from './theme';

const windowWidth = Dimensions.get('window').width;

export const globalStyles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  card: {
    width: windowWidth * 0.85,
    backgroundColor: colors.surface,
    borderRadius: layout.borderRadius.card,
    padding: spacing.large,
    elevation: layout.elevation,
    alignItems: 'center',
  },
  title: {
    fontSize: fonts.size.title,
    color: colors.textPrimary,
    marginBottom: spacing.xlarge,
    fontWeight: fonts.weight.bold,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: layout.borderRadius.button,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.medium,
  },
  buttonText: {
    color: colors.textOnPrimary,
    fontSize: fonts.size.button,
    fontWeight: fonts.weight.bold,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: colors.inputBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: layout.borderRadius.input,
    paddingHorizontal: spacing.inputVertical,
    marginBottom: spacing.inputVertical,
    fontSize: fonts.size.input,
    color: colors.textSecondary,
  },
});
