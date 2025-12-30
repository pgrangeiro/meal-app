export enum Navigation {
  CATEGORIES = "Categories",
  MEALS_OVERVIEW = "Meals",
}

export type NavigationRouter = {
  [Navigation.CATEGORIES]: undefined;
  [Navigation.MEALS_OVERVIEW]: { categoryId: string };
};
