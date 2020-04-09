import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth27390Navigator from '../features/EmailAuth27390/navigator';
import Camera27389Navigator from '../features/Camera27389/navigator';
import CalendarView27388Navigator from '../features/CalendarView27388/navigator';
import Maps27387Navigator from '../features/Maps27387/navigator';
import Tutorial27386Navigator from '../features/Tutorial27386/navigator';
import Messaging27385Navigator from '../features/Messaging27385/navigator';
import ArticleList27384Navigator from '../features/ArticleList27384/navigator';
import Achievements27383Navigator from '../features/Achievements27383/navigator';
import Add-Item27380Navigator from '../features/Add-Item27380/navigator';
import BlankScreen27374Navigator from '../features/BlankScreen27374/navigator';
import Contacts27357Navigator from '../features/Contacts27357/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth27390: { screen: EmailAuth27390Navigator },
Camera27389: { screen: Camera27389Navigator },
CalendarView27388: { screen: CalendarView27388Navigator },
Maps27387: { screen: Maps27387Navigator },
Tutorial27386: { screen: Tutorial27386Navigator },
Messaging27385: { screen: Messaging27385Navigator },
ArticleList27384: { screen: ArticleList27384Navigator },
Achievements27383: { screen: Achievements27383Navigator },
Add-Item27380: { screen: Add-Item27380Navigator },
BlankScreen27374: { screen: BlankScreen27374Navigator },
Contacts27357: { screen: Contacts27357Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
