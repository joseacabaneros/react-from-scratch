// @ref https://codepen.io/Jvsierra/pen/BNbEjW
const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
const genUuid = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;

export { genUuid };