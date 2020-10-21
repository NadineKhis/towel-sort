
// You should implement your task here.

module.exports = function towelSort (matrix) {
    matrix === undefined ? matrix = [] : {}
    let res = []
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2) {
            matrix[i] = matrix[i].reverse()
        }
        res = res.concat(matrix[i])
    }
    return res
}
