import { CardsData } from "../../../app.interface";

export interface Props {
  cardData: CardsData;
  setPopUpIsVisibleState(isVisible: boolean): void;
  setPopUpData(data: any): void;
}

export interface State {}
