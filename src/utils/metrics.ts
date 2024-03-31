import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// for component's height, verticalMargin, verticalPadding, likewise
const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;

// for component's width, horizontalMargin, horizontalPadding, likewise
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;

// for font size
const moderateScale = (size: number, factor = 0.5) =>
  size + horizontalScale(size) - size * factor;

export { horizontalScale, verticalScale, moderateScale };
