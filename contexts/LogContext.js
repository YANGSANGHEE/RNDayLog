import React, {useCallback} from 'react';
import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';

const LogContext = createContext();

export const LogContextProvider = ({children}) => {
  const onCreate = useCallback(async ({title, con}) => {
    await axios
      .post('http://10.0.2.2:8084/daylogwrite', {
        uuid: uuidv4(),
        title: title,
        con: con,
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <LogContext.Provider value={{onCreate}}>{children}</LogContext.Provider>
  );
};

export default LogContext;
