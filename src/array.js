/**
 * 数组去重
 * @param {Array} arr 目标数组
 * @returns {Array} 去重后的数组
 */
export function unique(arr) {
  if (!Array.isArray(arr)) return arr;
  // 兼容所有类型的数组元素
  return Array.from(new Set(arr));
}
