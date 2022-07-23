// սա մի քանի loop-ով տարբերակն ա, 
// դեռ մտածում եմ առանց այսքան loop-ի ոնց կարելի է ստանալ

function solution(grid){
    const {length} = grid;
    for(let i = 0; i < length; i++){
        for(let j = 0; j < length; j++){
            if(grid[i][j] !== "."){
                const number = grid[i][j]
                for(let row = 0; row < length; row++){
                    if( i !== row && grid[row][j] === number ){
                        return false
                    }
                }
                for(let col = 0; col < length; col++){
                    if( j !== col && grid[i][col] === number ){
                        return false
                    }
                }
                const row1 = Math.floor(i / 3) * 3
                const col1 = Math.floor(j / 3) * 3
                // if(i < 3){
                //     row1 = 0
                // } else if(i >= 3 && i < 6){
                //     row1 = 3
                // } else {
                //     row1 = 6
                // }
                // if(j < 3){
                //     col1 = 0
                // } else if(j >= 3 && j < 6){
                //     col1 = 3
                // } else {
                //     col1 = 6
                // }
                // console.log(row1, col1)
                for (let m = row1; m < row1 + 3; m++) {
                    for (let n = col1; n < col1 + 3; n++) {
                        if (m !== i && n !== j && grid[m][n] === number) {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true
}

const grid2 = [
  [".", ".", ".", "1", "4", ".", ".", "2", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  [".", ".", "1", ".", ".", ".", ".", ".", "."],
  [".", "6", "7", ".", ".", ".", ".", ".", "9"],
  [".", ".", ".", ".", ".", ".", "8", "1", "."],
  [".", "3", ".", ".", ".", ".", ".", ".", "6"],
  [".", ".", ".", ".", ".", "7", ".", ".", "."],
  [".", ".", ".", "5", ".", ".", ".", "7", "."],
];



console.log(solution(grid2));