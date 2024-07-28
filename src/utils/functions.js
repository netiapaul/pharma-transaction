export const defErrorMessage = 'An error occured processing your current request!'

export function handleErrors(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response?.data.errors) {
      console.log('step 1')
      throw new Error(
        Object.keys(error.response.data.errors).map(
          (key, value) => error.response.data.errors[key],
        ),
      )
    } else if (error.response?.data.message) {
      console.log('step 2')
      if (
        error.response.data.message?.includes(
          'You need to update your password before proceeding',
        ) ||
        error.response.data.message?.includes('do you want to auto logout')
      ) {
        localStorage.setItem('token', error.response.data?.logouttoken)
      }
      // if (error.response.data.message?.includes('do you want to auto logout')) {
      //   localStorage.setItem('token', error.response.data?.logouttoken)
      // }
      throw new Error(error.response.data.message)
    } else {
      console.log('step 3')
      throw new Error(error.message)
    }
  } else if (error.request?.statusText) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    throw new Error(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    //   throw new Error('Error', error.message)
    throw new Error(defErrorMessage)
  }
}
