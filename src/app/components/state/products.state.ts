export enum ProductActionsTypes{
  GET_ALL_PRODUCT="[Product] Get All Products",
  GET_SLECTED_PRODUCT="[Product] Get Selected Products",
  GET_AVAILABLE_PRODUCT="[Product] Get Available Products",
  SEARCH_PRODUCT="[Product] Search Products",
  NEW_PRODUCT="[Product] New Products",
  SELECT_PRODUCT="[Product] Select Products",
  EDIT_PRODUCT="[Product] Edit Products",
  DELETE_PRODUCT="[Product] Delete Products"
}

export interface ActionEvent{
  type: ProductActionsTypes;
  payload?:any
}

export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T>{
  dataState:DataStateEnum,
  data?:T,
  errorMessage?:string
}
