exports.min = function min(array) {
    if (Array.isArray(array)) {
        const res = Math.min(...array)
        if (res === Infinity || res == 0) {
            return 0
        }
        return res
    } else return 0
}

exports.max = function max(array) {
    if (Array.isArray(array)) {
        const res = Math.max(...array)
        if (res === -Infinity || res == 0) {
            return 0
        }
        return res
    } else return 0
}

exports.avg = function avg(array) {
    if (Array.isArray(array) && array.length > 0) {
        const res = array.reduce((total, num) => total += num, 0) / array.length
        return res
    } else return 0
}
