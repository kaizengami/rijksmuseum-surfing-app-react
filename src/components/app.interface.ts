export interface Props {
  putCardsData(value: CardsData): object;
  setLoadingState(value: boolean): object;
  isLoading: boolean;
  dispatch(action: any): void;
  cardsData: object;
  data: any;
}

export interface State {}

export interface CardsData {
  id: string;
  objectNumber: string;
  longTitle: string;
  headerImage: {
    url: string;
  };
}
