import {NameSpace} from '../../../const';
import {State} from '../../../types/store';
import { Cat } from '../../../types/cats';

export const getCats = (state: State): Cat[] => state[NameSpace.Cat].cats;
export const getFavoriteCats = (state: State): Cat[] => state[NameSpace.Cat].favoriteCats;
export const getCatsLoadingStatus = (state: State): boolean => state[NameSpace.Cat].isLoading;