// provide the login status the NavBar

import { createContext, useContext } from 'react';

export const LoggingContext = createContext();

const LogginProvider = LoggingContext.Provider;
const LogginConsumer = LoggingContext.Consumer;

export {
    LogginProvider,
    LogginConsumer
}

