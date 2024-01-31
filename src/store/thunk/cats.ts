import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkObjType } from '../../types/store';
import { Cat } from '../../types/cats';
import { NameSpace } from '../../const';

export const fetchCats = createAsyncThunk<Cat[], undefined, ThunkObjType>(
    `${NameSpace.Cat}/fetchCats`,
    async (_arg, { extra: api }) => {
      const apiKey = 'live_R256Dk38JedJCSBGl1exZI17dkVLVcVNu9noUKwGCW4k9MtKnsOW0fCnPU6lcESn';
  
      const response = await api.get<Cat[]>('', {
        headers: {
          'x-api-key': apiKey,
        },
      });
  
      return response.data;
    },
  );