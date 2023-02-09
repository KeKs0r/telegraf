/**
 * source: https://github.com/Bruce17/safe-compare/blob/master/index.js#L22
 */

/**
 * Do a constant time string comparison. Always compare the complete strings
 * against each other to get a constant time. This method does not short-cut
 * if the two string's length differs.
 *
 */
export function safeCompare(a: string, b: string) {
  const strA = String(a)
  let strB = String(b)
  const lenA = strA.length
  let result = 0

  if (lenA !== strB.length) {
    strB = strA
    result = 1
  }

  for (let i = 0; i < lenA; i++) {
    result |= strA.charCodeAt(i) ^ strB.charCodeAt(i)
  }

  return result === 0
}
