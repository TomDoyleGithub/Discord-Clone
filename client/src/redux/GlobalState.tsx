import React from "react";
import { Provider } from 'react-redux';
import store from './store';

export default function StoreProvider (props) {
  return <Provider store={store} {...props} />;
}