/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (path) => path?.replace(/\\+/g, '/')
