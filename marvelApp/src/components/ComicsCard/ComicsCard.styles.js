import {Dimensions, StyleSheet} from 'react-native';
import spacing from '../../styles/spacing';

const {width, height} = Dimensions.get('window');

import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';

export default StyleSheet.create({
  container: {
    padding: spacing.tiny,
    alignItems: 'center',
    width: width / 2,
  },
  
  image: {
    width: width / 2.2,
    height: height / 2.5,
    justifyContent: 'space-between',
    backgroundColor: colors.transparentLight,
    borderRadius: 10,
    overflow: 'hidden'
  },
  title_container: {   
    height: 50,
    backgroundColor: colors.transparentDark,
    padding: spacing.tiny,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: fontSize.normal,
    flexWrap: 'wrap',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  favorite_button: {
    width: 30,
    backgroundColor: colors.transparentMedium,
    alignItems: 'flex-end'
  }
});
