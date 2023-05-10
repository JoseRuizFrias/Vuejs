import { ActionContext } from "vuex";

export interface IFilterState {
  filterValue: string;
}

export interface IFilterGetters {
  filterValue(state: IFilterState): string;
}

export enum FilterMutationsEnums {
  SAVE_FILTER = "SAVE_FILTER",
}

export enum FilterActionEnums {
  SAVE_FILTER = "saveFilter",
}

export type FilterActionType<S = IFilterState> = {
  [FilterActionEnums.SAVE_FILTER](
    { commit }: ActionContext<S, unknown>,
    filter: string
  ): void;
};
export type FilteRMutationsType<S = IFilterState> = {
  [FilterMutationsEnums.SAVE_FILTER](state: S, filter: string): void;
};
