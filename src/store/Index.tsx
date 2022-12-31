import { createStore } from 'redux';
import LocalStorageService from '../services/local-storage/LocalStorage.service';
import Reducer from "./Reducer";

const persistedState = LocalStorageService.getStateFromLocal();
const Store = createStore(Reducer, persistedState);

Store.subscribe(() => {
  LocalStorageService.saveState(Store.getState())
})

export default Store;