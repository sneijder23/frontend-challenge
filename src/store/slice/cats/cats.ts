import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCats } from '../../thunk/cats';
import { NameSpace } from '../../../const';
import { Cat } from '../../../types/cats';

interface CatsState {
  cats: Cat[],
  favoriteCats: Cat[],
  isLoading: boolean,
}

const initialState: CatsState = {
  cats: [],
  favoriteCats: [],
  isLoading: false,
}

const processSuccess = (state: CatsState, action: PayloadAction<Cat[]>) => {
  state.cats = action.payload;
  state.isLoading = false;
};

const processFailed = (state: CatsState) => {
  state.isLoading = false;
};

const processPending = (state: CatsState) => {
  state.isLoading = true;
};

export const catsSlice = createSlice({
  name: NameSpace.Cat,
  initialState,
  reducers: {
    setFavoriteCat: (state, action: PayloadAction<string>) => {
      const catId = action.payload;
      const existingIndex = state.favoriteCats.findIndex(cat => cat.id === catId);
      if (existingIndex === -1) {
        const cat = state.cats.find(cat => cat.id === catId);
        if (cat) {
          state.favoriteCats.push(cat);
        }
      } else {
        state.favoriteCats.splice(existingIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCats.pending, processPending);
    builder.addCase(fetchCats.fulfilled, processSuccess);
    builder.addCase(fetchCats.rejected, processFailed);
  },
});

export const catsAction = catsSlice.actions;