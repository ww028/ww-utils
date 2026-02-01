/**
 * 字符串首字母大写
 * @param {string} str 目标字符串
 * @returns {string} 首字母大写后的字符串
 */
function firstLetterToUpper(str) {
  if (typeof str !== "string" || str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 数组去重
 * @param {Array} arr 目标数组
 * @returns {Array} 去重后的数组
 */
function unique(arr) {
  if (!Array.isArray(arr)) return arr;
  // 兼容所有类型的数组元素
  return Array.from(new Set(arr));
}

/**
 * 数字保留指定位数的小数
 * @param {number} num 目标数字
 * @param {number} decimal 保留的小数位数
 * @returns {number} 处理后的数字
 */
function fixedDecimal(num, decimal = 2) {
  if (typeof num !== "number" || isNaN(num)) return num;
  return Number(num.toFixed(decimal));
}

/**
 * 生成指定范围的随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机整数
 */
function randomInt(min, max) {
  if (typeof min !== "number" || typeof max !== "number" || min > max) return 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { firstLetterToUpper, fixedDecimal, randomInt, unique };
//# sourceMappingURL=index.esm.js.map
