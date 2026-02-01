/**
 * 字符串首字母大写
 * @param {string} str 目标字符串
 * @returns {string} 首字母大写后的字符串
 */
export function firstLetterToUpper(str) {
  if (typeof str !== "string" || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}
