import React from 'react';

const UserContext = React.createContext();
const CommentIdContext = React.createContext();
const ListingComContext = React.createContext();

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

const CommentIdProvider = CommentIdContext.Provider;
const CommentIdConsumer = CommentIdContext.Consumer;

const CommentsProvider = ListingComContext.Provider;
const CommentsConsumer = ListingComContext.Consumer;

export {
  UserConsumer,
  UserProvider,
  CommentIdProvider,
  CommentIdConsumer,
  CommentsProvider,
  CommentsConsumer,
};

export default UserContext;
