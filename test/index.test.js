// 测试文件（ESM 规范）
import * as utils from "../index.js";

// 测试字符串函数
console.log(
  "测试 firstLetterToUpper：",
  utils.firstLetterToUpper("hello") === "Hello",
); // 预期 true

// 测试数组函数
console.log(
  "测试 unique：",
  JSON.stringify(utils.unique([1, 2, 2, 3])) === JSON.stringify([1, 2, 3]),
); // 预期 true

// 测试数字函数
console.log("测试 fixedDecimal：", utils.fixedDecimal(3.1415, 2) === 3.14); // 预期 true
console.log(
  "测试 randomInt：",
  utils.randomInt(1, 10) >= 1 && utils.randomInt(1, 10) <= 10,
); // 预期 true

console.log("\n✅ 所有测试用例执行完成！");
