import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth27439Navigator from '../features/EmailAuth27439/navigator';
import Camera27438Navigator from '../features/Camera27438/navigator';
import CalendarView27437Navigator from '../features/CalendarView27437/navigator';
import Maps27436Navigator from '../features/Maps27436/navigator';
import Tutorial27435Navigator from '../features/Tutorial27435/navigator';
import Messaging27434Navigator from '../features/Messaging27434/navigator';
import ArticleList27433Navigator from '../features/ArticleList27433/navigator';
import Achievements27432Navigator from '../features/Achievements27432/navigator';
import Add-Item27429Navigator from '../features/Add-Item27429/navigator';
import BlankScreen27423Navigator from '../features/BlankScreen27423/navigator';
import Contacts27406Navigator from '../features/Contacts27406/navigator';
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
EmailAuth27439: { screen: EmailAuth27439Navigator },
Camera27438: { screen: Camera27438Navigator },
CalendarView27437: { screen: CalendarView27437Navigator },
Maps27436: { screen: Maps27436Navigator },
Tutorial27435: { screen: Tutorial27435Navigator },
Messaging27434: { screen: Messaging27434Navigator },
ArticleList27433: { screen: ArticleList27433Navigator },
Achievements27432: { screen: Achievements27432Navigator },
Add-Item27429: { screen: Add-Item27429Navigator },
BlankScreen27423: { screen: BlankScreen27423Navigator },
Contacts27406: { screen: Contacts27406Navigator },
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
