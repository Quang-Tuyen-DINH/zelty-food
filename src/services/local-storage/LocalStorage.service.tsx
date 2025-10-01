import React from 'react'
import { RootState } from '../../store/RootState.model';

const LocalStorageService = {
  getStateFromLocal() {
    try {
      const serializedState = localStorage.getItem('zeltyState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  },

  saveState(state: RootState) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('zeltyState', serializedState);
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}

export default LocalStorageService