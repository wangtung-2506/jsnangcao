var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];
  // dùng hàm reduce
  // 1. trả về một đối tượng
  // Số lượng người vote từ 20-30 tuổi
  // Số lượng người vote từ 30-40 tuổi
  // Số lượng người vote từ 40 trở lên
  let totalMemberVote = voters.reduce(
    (acc, curr) => {
      if (curr.age >= 20 && curr.age <= 30) {
        acc[`Số lượng người vote từ 20-30 tuổi`]++;
      } else if (curr.age >= 30 && curr.age <= 40) {
        acc["Số lượng người vote từ 30-40 tuổi"]++;
      } else {
        acc["Số lượng người vote từ 40 trở lên"]++;
      }
      return acc;
    },
    {
      "Số lượng người vote từ 20-30 tuổi": 0,
      "Số lượng người vote từ 30-40 tuổi": 0,
      "Số lượng người vote từ 40 trở lên": 0,
    }
  );
  console.log(totalMemberVote);