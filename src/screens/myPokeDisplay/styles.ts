import { StyleSheet } from 'react-native';
import { Background, Colors } from '../../assets/colors/mainColors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  square: {
    height: verticalScale(200),
    width: horizontalScale(200),
    backgroundColor: Background.light,
  },
  textContainer: {
    marginHorizontal: horizontalScale(5),
    marginVertical: verticalScale(5),
  },
  text: {
    fontSize: moderateScale(16),
    color: Colors.newGray,
  },
  reloadCircle: {
    height: verticalScale(45),
    width: horizontalScale(45),
    backgroundColor: Colors.newGray,
    borderRadius: moderateScale(25),
  },
});

export default styles;
