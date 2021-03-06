/*
 * @Author: Lockie
 * @Date: 2017-03-27 10:55:27
 * @Last Modified by: laijie
 * @Last Modified time: 2017-06-28 15:54:33
 */

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param {String} url
 * @param {Object} options
 * @returns promise
 */
function xFetch(url, options) {
  const opts = { ...options };
  opts.headers = {
    ...opts.headers,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return Promise.race([
    fetch(url, opts)
      .then(checkStatus)
      .then(parseJSON)
      .then(data => data),
    new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({ des: '网络超时' });
      }, 10000);
    }),
  ]);
}

export default xFetch;
