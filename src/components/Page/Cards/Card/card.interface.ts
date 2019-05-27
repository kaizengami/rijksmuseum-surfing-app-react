import { CardsData } from "components/app.interface";

export interface Props {
  cardData: CardsData;
  setPopUpIsVisibleState(isVisible: boolean): void;
  setPopUpData(data: any): void;
  dispatch(action: any): void;
}

export interface State {}
