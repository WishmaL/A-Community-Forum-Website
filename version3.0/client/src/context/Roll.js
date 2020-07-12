import { createContext } from 'react';

export const RollContext = createContext();

const RollProvider = RollContext.Provider;
const RollConsumer = RollContext.Consumer;

export {
    RollProvider,
    RollConsumer
}
