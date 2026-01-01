export enum Navigation {
  CATEGORIES = "Categories",
  MEALS_OVERVIEW = "Meals",
  MEAL_DETAILS = "Details",
}

export type NavigationRouter = {
  [Navigation.CATEGORIES]: {};
  [Navigation.MEALS_OVERVIEW]: { categoryId: string };
  [Navigation.MEAL_DETAILS]: { id: string };
};
