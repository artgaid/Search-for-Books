const joinStringFromArray = (str, separator) => {
  if (str && str.length > 0) {
    return str.join(separator);
  }
  return "";
};

export default joinStringFromArray;
