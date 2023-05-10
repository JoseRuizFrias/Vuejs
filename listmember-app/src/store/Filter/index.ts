import {
  ActionContext,
  ActionTree,
  GetterTree,
  Module,
  MutationTree,
} from "vuex";
import {
  FilteRMutationsType,
  FilterActionEnums,
  FilterActionType,
  FilterMutationsEnums,
  IFilterGetters,
  IFilterState,
} from "./type";

const state: () => IFilterState = () => ({
  filterValue: "",
});
const mutations: MutationTree<IFilterState> & FilteRMutationsType = {
  [FilterMutationsEnums.SAVE_FILTER]: (state: IFilterState, filter: string) => {
    state.filterValue = filter;
  },
};
const actions: ActionTree<IFilterState, unknown> & FilterActionType = {
  [FilterActionEnums.SAVE_FILTER]: (
    { commit }: ActionContext<IFilterState, unknown>,
    filter: string
  ) => {
    commit(FilterMutationsEnums.SAVE_FILTER, filter);
  },
};
const getters: GetterTree<IFilterState, unknown> & IFilterGetters = {
  filterValue: (state: IFilterState) => state.filterValue,
};

const FilterModule: Module<IFilterState, unknown> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default FilterModule;
