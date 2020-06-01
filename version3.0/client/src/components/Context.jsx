import React from 'react'

const UserContext = React.createContext()
const ArticleIdContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

const ArticleIdProvider = ArticleIdContext.Provider
const ArticleIdConsumer = ArticleIdContext.Consumer

export {UserConsumer, UserProvider, ArticleIdProvider, ArticleIdConsumer}

export default UserContext