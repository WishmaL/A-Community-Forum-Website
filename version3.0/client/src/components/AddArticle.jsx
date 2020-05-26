// import React, { useState, useEffect } from 'react';

// function AddArticle() {
//   const [article, setArticle] = useState({ title: '', body: '' });

//   useEffect(() => {
//     axios
//       .put('/articles/addArticle')
//       .then((res) => {
//         // console.log(res)
//         this.setState({ articles: res.data });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <div>
//       <form action="" method="post">
//         <label>Title</label>
//         <input type="text" />

//         <label>Body</label>
//         <input type="textarea" />

//         <label>Add images</label>
//         <input type="img" />

//         <button onSubmit={submitHandler}>Add article</button>
//       </form>
//     </div>
//   );
// }

// export default AddArticle;
