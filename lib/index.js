/**
 * Modules
 */

var cloneObj = require('@micro-js/clone-obj')

/**
 * Expose cloneShallow
 */

module.exports = cloneShallow['default'] = cloneShallow

/**
 * cloneShallow
 */

function cloneShallow (a) {
  return Array.isArray(a)
    ? a.slice()
    : cloneObj(a)
}
