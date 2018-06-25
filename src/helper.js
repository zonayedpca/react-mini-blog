export const leveningStr = (data, amount) => {
  let string = data.split(/<\/?\w*>/);
  string = string.reduce((data, one)=>data+=one);
  string = string.substr(0, amount);
  return string;
}
