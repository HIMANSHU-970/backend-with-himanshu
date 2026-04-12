const asyncHandler = (requestHandler ) => {(req, res, next) => {
  Promise.resolve(requestHandler(req, res, next)).
  catch((err) => next(err))
} 
}

export { asyncHandler };

// const asyncHandler = (requestHandler ) => {(req, res, next) => {
//   Promise.resolve(requestHandler(req, res, next)).
//   catch((err) => next(err))
// } 
// }

// or

// const asyncHandler = (requestHandler) => {
//   return async (req, res, next) => {
//     try {
//       await requestHandler(req, res, next);
//     } 

//     catch (err) {
//       res.status(500).json({ error: 'An unexpected error occurred.' ,
//         details: err.message,
//         success : false
//       });

//       // next(err); // Pass the error to the next middleware (optional, if you have an error handling middleware)
//     }
//   };
// }
