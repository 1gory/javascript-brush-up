  const x = async function tests() {
     throw new Error('Error message');
  }

  try {
    x(); // the function is called without `await`
  } catch (e) {
    console.log(e) // Will the error be caught in "try catch"?
  }

// The error won't be caught because `try catch` works with sync code.
