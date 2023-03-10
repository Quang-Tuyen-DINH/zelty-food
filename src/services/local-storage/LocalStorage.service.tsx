import React from 'react'

const LocalStorageService = {
  getStateFromLocal() {
    try {
      const serializedState = localStorage.getItem('zeltyState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  },

  saveState(state: any) {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('zeltyState', serializedState);
    } catch (err) {
      return undefined;
    }
  }
}

export default LocalStorageService