/**
 * 数字保留指定位数的小数
 * @param {number} num 目标数字
 * @param {number} decimal 保留的小数位数
 * @returns {number} 处理后的数字
 */
export function fixedDecimal(num, decimal = 2) {
  if (typeof num !== "number" || isNaN(num)) return num;
  return Number(num.toFixed(decimal));
}

/**
 * 生成指定范围的随机整数
 * @param {number} min 最小值
 * @param {number} max 最大值
 * @returns {number} 随机整数
 */
export function randomInt(min, max) {
  if (typeof min !== "number" || typeof max !== "number" || min > max) return 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
