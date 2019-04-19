import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from "react-navigation";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import CatagoryComponent from './catagory'
import PapularLocations from './papular'
import MapScreen from './mapScreen'
import NewsFeed from './newsFood'
import CarsTransport from './Cars&Transport'
import ListingShopping from './listingShopping'
import RealEstate from './realEstate'
import Jobs from './jobs'
import Blogs from './blogs'

// Sub Screen Construction tabs Components
import TownPlannerAd from './SubScreens/Construction/townPlannerAd'
import DevelopersAd from './SubScreens/Construction/DevelopersAd'
import PropertyDealerAd from './SubScreens/Construction/PropertyDealerAd'
import ArchituctureAd from './SubScreens/Construction/ArchituctureAd'
// Maps
import TownPlannerMap from './SubScreens/Construction/townPlannerMap'
import DevelopersMap from './SubScreens/Construction/DevelopersMap'
import PropertyDealerMap from './SubScreens/Construction/PropertyDealerMap'
import ArchituctureMap from './SubScreens/Construction/ArchituctureMap'
// Sub Screen Medical and health tabs Components
import NutritionistAd from './SubScreens/MedicalHealth/NutritionistAd'
import SpasAd from './SubScreens/MedicalHealth/SpasAd'
import DesntistAd from './SubScreens/MedicalHealth/DesntistAd'
import DoctorsAd from './SubScreens/MedicalHealth/DoctorsAd'
//Maps
import NutritionistMap from './SubScreens/MedicalHealth/NutritionistMap'
import SpasMap from './SubScreens/MedicalHealth/SpasMap'
import DesntistMap from './SubScreens/MedicalHealth/DesntistMap'
import DoctorsMap from './SubScreens/MedicalHealth/DoctorsMap'
// Sub Screen Education Intitute  tabs Components
import ApartmentsAd from './SubScreens/Education/ApartmentsAd'
import BrokersAd from './SubScreens/Education/BrokersAd'
import HealthCarsAd from './SubScreens/Education/HealthCarsAd'
import HouseAd from './SubScreens/Education/HouseAd'
// Maps
import ApartmentsMap from './SubScreens/Education/ApartmentsMap'
import BrokersMap from './SubScreens/Education/BrokersMap'
import HealthCarsMap from './SubScreens/Education/HealthCarsMap'
import HouseMap from './SubScreens/Education/HouseMap'
// Sub Screen Shoppnig  tabs Components
import CenterAd from './SubScreens/Shopping/CenterAd'
import ClothingAd from './SubScreens/Shopping/ClothingAd'
import ComputersAd from './SubScreens/Shopping/ComputersAd'
import FashionAd from './SubScreens/Shopping/FashionAd'
//Maps
import CenterMap from './SubScreens/Shopping/CenterMap'
import ClothingMap from './SubScreens/Shopping/ClothingMap'
import ComputersMap from './SubScreens/Shopping/ComputersMap'
import FashionMap from './SubScreens/Shopping/FashionMap'
// Sub Screen Restaurants tabs Components
import SeaFoodAd from './SubScreens/Restaurants/SeaFoodAd'
import TurkishAd from './SubScreens/Restaurants/TurkishAd'
import AmericanAd from './SubScreens/Restaurants/AmericanAd'
import CafesAd from './SubScreens/Restaurants/CafesAd'
//Maps
import SeaFoodMap from './SubScreens/Restaurants/SeaFoodMap'
import TurkishMap from './SubScreens/Restaurants/TurkishMap'
import AmericanMap from './SubScreens/Restaurants/AmericanMap'
import CafesMap from './SubScreens/Restaurants/CafesMap'
// Sub Screen Vacations tabs Components
import BeachesAd from './SubScreens/Vacations/BeachesAd'
import EventAd from './SubScreens/Vacations/EventAd'
import PartiesAd from './SubScreens/Vacations/PartiesAd'
import ResortsAd from './SubScreens/Vacations/ResortsAd'
//Maps
import BeachesMap from './SubScreens/Vacations/BeachesMap'
import EventMap from './SubScreens/Vacations/EventMap'
import PartiesMap from './SubScreens/Vacations//PartiesMap'
import ResortsMap from './SubScreens/Vacations/ResortsMap'
// Sub Screen Eventand Planing tabs Components
import FastivalsAd from './SubScreens/EventPlanning/FastivalsAd'
import MuseumsAd from './SubScreens/EventPlanning/MuseumsAd'
import CosinosAd from './SubScreens/EventPlanning/CosinosAd'
import CinemasAd from './SubScreens/EventPlanning/CinemasAd'
//Maps
import FastivalsMap from './SubScreens/EventPlanning/FastivalsMap'
import MuseumsMap from './SubScreens/EventPlanning/MuseumsMap'
import CosinosMap from './SubScreens/EventPlanning/CosinosMap'
import CinemasMap from './SubScreens/EventPlanning/CinemasMap'


// import HeaderComponent from '../header'
import WelComeScreen from './welcomeScreen'
import LogInScreen from './loginInScreen'
import SignUpScreen from './signUpScreen'
import Construction from './construction'
import MedicalHealth from './medical&health'
import EducationInstitutes from './educationInstitutes'
import Shopping from './shopping'
import EventPlaning from './eventplaning'
import Electronics from './electronics'
import RestaurantsFood from './restaurants&food'
import Vacations from './vacations'
import { Text, Left } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5'



// Home Tabs

const homeTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: MapScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#ef5350' }} />)
    }
  },
  Catagory: {
    screen: CatagoryComponent,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='list-alt' size={24} style={{ color: '#26a69a' }} />)
    }
  },
  Papular: {
    screen: PapularLocations,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='map-marked-alt' size={24} style={{ color: '#90caf9' }} />)
    }
  },

}, {
    tabBarOptions: {
      header:null,
      headerBackTitleVisible:false,
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }

  })

// Listing tab navigators
const transportTabNavigation = createMaterialTopTabNavigator({
  Transport: {
    screen: CarsTransport,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='car' size={24} style={{ color: '#1de9b6' }} />)
    }
  },
  Shopping: {
    screen: ListingShopping,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='shopping-cart' size={24} style={{ color: '#00b8d4' }} />)
    }
  },
  Estate: {
    screen: RealEstate,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (<Icon name='city' size={24} style={{ color: '#ef6c00' }} />)
    }
  }
}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Main Bottom tab naivgators
const appTabNavigator = createMaterialBottomTabNavigator({
  Home: {
    screen: homeTabNavigation,
    animationEnabled: true,
    navigationOptions: { tabBarIcon: ({ tintColor, focused }) => (<Icon name="home" size={24} focused style={{ color: '#ff7043' }} />) }
  },
  NewsFeed: {
    screen: NewsFeed,
    navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="newspaper" size={24} style={{ color: '#43a047' }} />) }

  },
  Listing: {
    screen: transportTabNavigation,
    navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="list" size={24} style={{ color: '#26a69a' }} />) }

  },
  Jobs: {
    screen: Jobs,
    navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="user-tie" size={24} style={{ color: '#ab47bc' }} />) }


  },
  Blog: {
    screen: Blogs,
    navigationOptions: { tabBarIcon: ({ tintColor }) => (<Icon name="blogger" size={24} />) }


  }
}, {
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
)

// Sub catagory townplanner top tabs
const townPlannerTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: TownPlannerMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: TownPlannerAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)

// Sub catagory developers top tabs
const developersTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: DevelopersMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: DevelopersAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory Property Dealer top tabs
const propertyDealersTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: PropertyDealerMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: PropertyDealerAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Archituctures top tabs
const archituctureTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: ArchituctureMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: ArchituctureAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory nutritionist top tabs
const nutritionistTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: NutritionistMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: NutritionistAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Spas top tabs
const spasTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: SpasMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: SpasAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Desntist top tabs
const desntistTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: DesntistMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: DesntistAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Doctors top tabs
const doctorsTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: DoctorsMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: DoctorsAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Apartments top tabs
const apartmentsTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: ApartmentsMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: ApartmentsAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Brokers top tabs
const brokersTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: BrokersMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {

    screen: BrokersAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory HealthCars top tabs
const healthcarsTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: HealthCarsMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: HealthCarsAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory House top tabs
const houseTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: HouseMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: HouseAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory Center top tabs
const centerTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: CenterMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: CenterAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory Clothing top tabs
const clothingTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: ClothingMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: ClothingAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory Computers top tabs
const computersTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: ComputersMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: ComputersAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Fashion top tabs
const fashionTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: FashionMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: FashionAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory Fastivals top tabs
const festivalsTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: FastivalsMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: FastivalsAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory Museums top tabs
const museumsTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: MuseumsMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: MuseumsAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory Cosinos top tabs
const cosinosTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: CosinosMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: CosinosAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory Cinemas top tabs
const cinemasTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: CinemasMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: CinemasAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// Sub catagory SeaFood top tabs
const seafoodTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: SeaFoodMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: SeaFoodAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Turkish top tabs
const turkishTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: TurkishMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: TurkishAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory American top tabs
const americanTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: AmericanMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: AmericanAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Cafes top tabs
const cafesTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: CafesMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: CafesAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Beaches top tabs
const beachesTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: BeachesMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: BeachesAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Event top tabs
const eventsTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: EventMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: EventAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Parties top tabs
const partiesTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: PartiesMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: PartiesAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)// Sub catagory Resorts top tabs
const resortsTabNavigation = createMaterialTopTabNavigator({
  Map: {
    screen: ResortsMap,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='map' horizontal='true' size={24} style={{ color: '#00838f' }} />)
    }
  },
  Ad: {
    screen: ResortsAd,
    navigationOptions: {
      tabBarIcon: ({ tintColor, horizontal }) => (<Icon name='phoenix-squadron' horizontal='true' size={24} style={{ color: 'white' }} />)
    }

  },

}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#f0edf6',
      labelStyle: {
        fontSize: 12,
      },
      iconStyle: {
        color: 'white'
      },
      style: {
        backgroundColor: '#694fad',
      },

    }
  }
)
// main stack navigatior
const authStackNavigation = createStackNavigator({
  Welcome: WelComeScreen,
  LogInScreen: LogInScreen,
  SignUpScreen: SignUpScreen,
  App: { screen: appTabNavigator,
  navigationOptions :{
    header:null
  } },
  Construction: Construction,
  MedicalHealth: MedicalHealth,
  EducationInstitutes: EducationInstitutes,
  Shop: Shopping,
  EventPlaning: EventPlaning,
  Electronics: Electronics,
  RestaurantsFood: RestaurantsFood,
  Vacations: Vacations,
  // Constructions
  TownPlanner: townPlannerTabNavigation,
  developers: developersTabNavigation,
  propertyDealers: propertyDealersTabNavigation,
  architucture: archituctureTabNavigation,
  // Health And Medical
  nutritionist: nutritionistTabNavigation,
  spas: spasTabNavigation,
  desntist: desntistTabNavigation,
  doctors: doctorsTabNavigation,
  // Education Intitute
  apartments: apartmentsTabNavigation,
  brokers: brokersTabNavigation,
  healthcars: healthcarsTabNavigation,
  house: houseTabNavigation,
  // Shopping
  center: centerTabNavigation,
  clothing: clothingTabNavigation,
  computers: computersTabNavigation,
  fashion: fashionTabNavigation,
  //event Planning
  festivals: festivalsTabNavigation,
  museums: museumsTabNavigation,
  cosinos: cosinosTabNavigation,
  cinemas: cinemasTabNavigation,
  // Electronis

  //Restaurants and Food
  seafood: seafoodTabNavigation,
  turkish: turkishTabNavigation,
  american: americanTabNavigation,
  cafes: cafesTabNavigation,
  // Vacations and Holidays
  beaches: beachesTabNavigation,
  events: eventsTabNavigation,
  parties: partiesTabNavigation,
  resorts: resortsTabNavigation,

},{
})

// main switch navigators
const AppNavigator = createSwitchNavigator({
  // Home: HeaderComponent,
  SplashScreen: authStackNavigation

});

export default createAppContainer(AppNavigator);
