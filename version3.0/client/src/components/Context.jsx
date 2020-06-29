import React, {useContext} from 'react';

const UserContext = React.createContext();
const CommentIdContext = React.createContext();
const ListingComContext = React.createContext();
// export const AuthContext = React.createContext();

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
// export function useAuth() {
//   return useContext(AuthContext);
// }

export default UserContext;
