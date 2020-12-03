import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen0181703Navigator from '../features/BlankScreen0181703/navigator';
import OnboardingSlideScreen2181704Navigator from '../features/OnboardingSlideScreen2181704/navigator';
import TermsScreen3181705Navigator from '../features/TermsScreen3181705/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen0181703: { screen: BlankScreen0181703Navigator },
OnboardingSlideScreen2181704: { screen: OnboardingSlideScreen2181704Navigator },
TermsScreen3181705: { screen: TermsScreen3181705Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
