module.exports = rawRequest => {
  let arr = rawRequest.split(' ');
  const response = {
    method: arr[0],
    path: arr[1]
  };
  if(!arr[4].includes('\r'))
  {
    return response;
  }
  else {
    arr = arr[arr.length - 1].split('\n');
    response.body = arr[arr.length - 1];
    return response;
  }
};
