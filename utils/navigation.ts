export enum Navigation {
  CATEGORIES = "Categories",
  MEALS_OVERVIEW = "Meals",
}

export type NavigationRouter = {
  [Navigation.CATEGORIES]: {};
  [Navigation.MEALS_OVERVIEW]: { categoryId: string };
};
