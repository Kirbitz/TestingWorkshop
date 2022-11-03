import axios from 'axios'

// TODO update call to the correct route
export function getUpdateText () {
  return new Promise((resolve, reject) => {
    axios.get('/update')
      .then((response) => { return resolve(response) })
      .catch((error) => { return reject(error) })
  })
}