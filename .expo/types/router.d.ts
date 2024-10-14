/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/LocationsScreen` | `/(tabs)/ProfileScreen` | `/(tabs)/SurvivalTipsScreen` | `/CampingGearPage` | `/CardGrid` | `/DassamFallsPage` | `/DetailLocation` | `/DetailsScreen` | `/EmergencyPage` | `/HundruFallsPage` | `/JonhaFallsPage` | `/LocationsScreen` | `/MainScreen` | `/OfflineGuidePage` | `/PackingList` | `/PatratuValleyPage` | `/PlanTripScreen` | `/ProfileScreen` | `/RanchiHillPage` | `/SurvivalTipsPage` | `/SurvivalTipsScreen` | `/TransportDetails` | `/WeatherDetails` | `/WildlifePage` | `/WinterCampingPage` | `/_sitemap`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
