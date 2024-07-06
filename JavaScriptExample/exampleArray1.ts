//สร้างและเข้าถึง Array
let numbers: number[] = [10, 20, 30, 40, 50];
console.log(numbers[2]);

//การใช้งาน Loop ร่วมกับ Array

let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
  console.log(name);
}

//การเพิ่มและลบข้อมูลใน Array(push,pop)
let fruits: string[] = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits);
fruits.pop();
console.log(fruits);
