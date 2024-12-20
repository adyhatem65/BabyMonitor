import {RootStackParamList} from '../types';
import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef<RootStackParamList>();

const navigateTo = (
  screen: keyof RootStackParamList,
  params?: object | undefined,
) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(screen, params));
  }
};

const replace = (
  screen: keyof RootStackParamList,
  params?: object | undefined,
) => {
  if (navigationRef.isReady()) {
    // navigationRef.dispatch(StackActions.replace(screen, params));
    navigationRef.reset({
      index: 0,
      routes: [{name: screen, params: params}],
    });
  }
};

const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.goBack());
  }
};

export {navigationRef, navigateTo, goBack, replace};
