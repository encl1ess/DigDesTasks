
function printTriangle() {
    let str = '      ';
    console.log(str);
	for (let i = 0; i < 5; i++) { 
       str = str.slice(1, str.lenght) + '# ';
        console.log(str);
      }
}
printTriangle();

// console =>

//     #
//    # #
//   # # #
//  # # # # 
// # # # # #