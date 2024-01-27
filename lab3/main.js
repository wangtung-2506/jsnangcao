/*Julia và Kate đang nghiên cứu về loài chó. Vì vậy, mỗi người trong số họ đã hỏi 5 
chủ sở hữu chó về tuổi của con chó của họ và lưu trữ dữ liệu vào một mảng (một 
mảng cho mỗi người). Hiện tại, họ chỉ quan tâm đến việc biết một con chó là 
trưởng thành hay chó con. Chó được coi là trưởng thành nếu ít nhất 3 tuổi và là 
chó con nếu chưa đầy 3 tuổi.
Tạo một hàm 'checkDogs', hàm này chấp nhận 2 mảng tuổi của chó ('dogsJulia' và 
'dogsKate') và thực hiện những việc sau:
1. Julia phát hiện ra rằng chủ của hai con chó ĐẦU TIÊN và HAI con chó CUỐI 
CÙNG thực sự nuôi mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao nông 
của mảng của Julia và xóa tuổi mèo khỏi mảng đã sao chép đó (vì đó là một cách 
làm không tốt để thay đổi các tham số hàm)*/
/*2. Tạo một mảng có cả dữ liệu của Julia (đã sửa) và Kate*/
/*3. Đối với mỗi con chó còn lại, hãy đăng nhập vào bảng điều khiển xem đó là chó 
trưởng thành ("Chó số 1 là người lớn và 5 tuổi") hay chó con ("Chó số 2 vẫn là chó 
con �")*/
/*4. Chạy hàm cho cả hai bộ dữ liệu thử nghiệm
GỢI Ý: Sử dụng các công cụ từ tất cả các bài giảng trong phần này cho đến nay �
TEST DATA 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]
TEST DATA 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]*/
const checkDogs = function (dogsJulia, dogsKate) {
    console.log(dogsJulia);
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    console.log(dogsJuliaCorrected);
    const dogs = [...dogsJuliaCorrected, ...dogsKate];
    // dogs.forEach((dog, i) => {
    //   if (dog >= 3) {
    //     console.log(`Chó số ${i + 1} là người lớn và ${dog} tuổi`);
    //   } else {
    //     console.log(`Chó số ${i + 1} vẫn  là chó con ${dog} tuổi`);
    //   }
    // });
    dogs.map((dog, i) => {
      console.log(
        `Chó số ${i + 1} ${
          dog >= 3 ? "là người lớn" : "vẫn là chó con"
        } ${dog} tuổi`
      );
    });
  };
  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  /*Julia và Kate's đang học về loài chó. Lần này họ muốn tính tuổi trung bình của chó 
  theo tuổi của người.*/
  /*Viết 1 hàm gọi là 'calcAverageHumanAge', nhận vào 1 danh sách tuổi của các chú 
  chó ('ages'), và hãy làm theo thứ tự sau
  1. Tính tuổi của chó theo tuổi của con người theo công thức sau: nếu tuổi của chó 
  <= 2, tuổi của người = tuổi của chó * 2. Nếu tuổi của chó > 2, tuổi người = 16 + 
  tuổi của chó * 4.*/
  function calcAverageHumanAge(params) {
    params.map((age) => {
      console.log(
        `Tuổi của chó theo tuổi của con người ${
          age <= 2 ? age * 2 : 16 + age * 4
        }`
      );
    });
  }
  calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  /*2. Loại trừ tất cả những chú chó có tuổi nhỏ hơn so với 1 người 18 tuổi (lấy ra tất 
  cả những chú chó trên 18 tuổi)*/
  function dogsOver18(dogs) {
    return dogs
      .map((dogsAge) => {
        return dogsAge <= 2 ? dogsAge * 2 : 16 + dogsAge * 4;
      })
      .filter((dogsAge) => dogsAge > 18);
  }
  console.log(dogsOver18([5, 2, 4, 1, 15, 8, 3]));
  /*3. Tính tuổi trung bình của các chú chó trưởng thành ra tuổi người*/
  function avgDogYear(dogs) {
    return (
      dogs
        .map((dogsAge) => {
          return dogsAge <= 2 ? dogsAge * 2 : 16 + dogsAge * 4;
        })
        .reduce((previous, current) => {
          return (previous += current);
        }) / dogs.length
    );
  }
  console.log(avgDogYear([5, 2, 4, 1, 15, 8, 3]));
  /*4. Chạy hàm với các dữ liệu mẫu dưới đây:
  TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
  TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]*/
  const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];
  /*Julia và Kate đang học về loài chó, và lần này họ đang học xem sẽ ra sao nếu chó 
  ăn quá nhiều hoặc quá ít.
  Ăn quá nhiều đồng nghĩa với phần ăn của chó lớn hơn mức khẩu phần khuyến 
  nghị và ngược lại nếu ăn quá ít
  Khẩu phần ăn hợp lý là lớn hơn hoặc nhỏ hơn không vượt quá 10% khẩu phần ăn 
  khuyến nghị
  1. Lặp mảng gồm các object là thông tin của những chú chó, và với mỗi chú chó, 
  thêm 1 thuộc tính mới vào object là khẩu phẩn ăn hợp lý (recommended). KHÔNG 
  TẠO THÊM MẢNG MỚI, chỉ đơn giản là lặp mảng. Công thức: recommendedFood 
  = weight ** 0.75 * 28. (kết quả là khổi lượng thức ăn đượ tính theo gram, và cân 
  nặng của chú chó được tính theo kg)*/
  // dogs.map((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28))); Math.trunc()  loại bỏ phần thập phân dữ lại số nguyên
  dogs.map((dog) => (dog.recFood = parseInt(dog.weight ** 0.75 * 28)));
  console.log(dogs);
  /*2. Tìm ra chú chó của Sarah và in ra console xem chú chó đó ăn quá nhiều hay quá 
  ít. Lưu ý: Lưu ý 1 vài chú chó có nhiều hơn 1 chủ, vì vậy bạn phải tìm ra Sarah 
  trong mảng 'owner' */
  const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
  console.log(
    `Chú chó Sarah ăn ${
      dogSarah.curFood > dogSarah.recFood ? "quá nhiều" : "quá ít"
    }`
  );
  /*3. Tạo ra mảng chứa tất cả chủ của những chú chó ăn quá nhiều 
  ('ownersEatTooMuch') và 1 mảng chứa tất cả chủ của những chú chó ăn quá ít 
  ('ownersEatTooLittle').*/
  const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recFood)
    .flatMap((dog) => dog.owners);
  console.log(ownersEatTooMuch);
  const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recFood)
    .flatMap((dog) => dog.owners);
  console.log(ownersEatTooLittle);
  /*4. In ra 1 chuỗi tương ứng với mỗi mảng đã tạo ở Yêu cầu 3, Ví dụ: "Matilda and 
  Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
  too little!"*/
  console.log(`${ownersEatTooMuch.join("and")} dogs eat too much`);
  console.log(`${ownersEatTooLittle.join("and")} dogs eat 
  too little!`);
  /*5. In ra xem có chú chó nào có khẩu phần ăn chính xác với khẩu phần ăn khuyến 
  nghị (output yêu cầu là 'true' hoặc 'false')*/
  console.log(dogs.some((dog) => dog.curFood == dog.recFood));
  /*6. In ra xem có chú chó nào có khẩu phần ăn ở mức hợp lý (không >10% hoặc 
  <10% mức đề nghị)(output yêu cầu là 'true' hoặc 'false')*/
  console.log(
    dogs.some(
      (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
    )
  );
  /*7. In ra tất cả các chú chó có khẩu phần ăn hợp lý (sử dụng lại điều kiện đã tìm 
  được ở y.c 6 để in ra mảng gồm các phần tử thỏa mãn)*/
  const isEatingDog = (dog) =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
  console.log(dogs.filter(isEatingDog));
  /*8. Tạo ra 1 mảng chưa các chú chó mới và sắp xếp theo khẩu phần ăn đề nghị
  theo thứ tự tăng dần (hãy nhớ rằng khẩu phần ăn của mỗi chú chó nằm trong 
  mảng mỗi object thuộc mảng)*/
  const shortEatDogs = dogs.sort((a, b) => a.recFood - b.recFood);
  console.log(shortEatDogs);
  /*HINT 1: Có thể sử dụng những công cụ khác nhau để xử lý bài toán, bạn có thể
  tổng hợp lại bài học để chọn ra 1 trong số các tất các cách làm mà bạn hiểu �
  HINT 2: Khẩu phần ăn không quá 10% hoặc ít hơn 10% khẩu phần đề nghị có thể
  hiểu như sau: current > (recommended * 0.90) && current < (recommended * 
  1.10). Cơ bản thì khẩu phần ăn hiện tại nằm trong khoảng 90% và 110% của khẩu 
  phần ăn đề nghị
  
  --- Hết*/
  //====================================================================== Lab4 ============================================================================================
  /*LAB4.1: (SECTION	11: WORKING	WITH	ARRAY > IMPLEMETING	LOGIN)
  Tiếp tục với Bankist app. Xử lý sự kiện Login
  Hướng dẫn thực hiện: Xem video (Implemeting login) hướng dẫn thực hành trên 
  Udemy*/
  const accounts = [
    {
      owner: "Jonas Schmedtmann",
      username: "jst",
      movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
      interestRate: 1.2,
      pin: 1111,
    },
    {
      owner: "Jessica Davis",
      username: "jd",
      movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
      interestRate: 1.5,
      pin: 2222,
    },
    {
      owner: "Steven Thomas Williams",
      username: "stw",
      movements: [200, -200, 340, -300, -20, 50, 400, -460],
      interestRate: 0.7,
      pin: 3333,
    },
    {
      owner: "Sarah Smith",
      username: "ss",
      movements: [430, 1000, 700, 50, 90],
      interestRate: 1,
      pin: 4444,
    },
  ];
  const btnLogin = document.querySelector(".btnLogin");
  const containerApp = document.querySelector("#containerApp");
  const inputLoginUsername = document.querySelector("#inputLoginUsername");
  const inputLoginPin = document.querySelector("#inputLoginPin");
  const labelWelcome = document.querySelector("#labelWelcome");
  let currentAccount;
  function updateUI({ movements }) {
    let leftContent = document.querySelector("#leftContent");
    movements.forEach((mov, i) => {
      leftContent.innerHTML += ` <div
      class="item flex items-center justify-between h-12 border-b-neutral-400 border-b-2 p-3"
    >
      <div class="text-item flex items-center">
        <span
          class="bg-gradient-to-r from-${mov > 0 ? "green" : "red"}-400 to-${
        mov > 0 ? "green" : "red"
      }-500 px-3 py-[3px] text-white rounded-3xl"
        >
          ${i + 1} Deposit
        </span>
        <p class="ml-4 text-slate-500 text-slate-500 font-medium">
          3 Days Ago
        </p>
      </div>
      <h3 class="text-slate-700 font-bold">${mov}$</h3>
    </div>`;
    });
  }
  btnLogin.addEventListener("click", function (e) {
    // Prevent form from submitting
    e.preventDefault();
    currentAccount = accounts.find(
      (acc) => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
      // Display UI and message
      labelWelcome.textContent = `Welcome back, ${
        currentAccount.owner.split(" ")[0]
      }`;
      containerApp.style.opacity = 100;
      // Clear input fields
      inputLoginUsername.value = inputLoginPin.value = "";
      inputLoginPin.blur();
      // Update UI
      updateUI(currentAccount);
    }
  });
  /*LAB4.2: (SECTION	11: WORKING	WITH	ARRAY > IMPLEMETING	TRANSFERS)
  Tiếp tục với Bankist app. Xử lý sự kiện Transfers
  Hướng dẫn thực hiện: Xem video (Implemeting transfers) hướng dẫn thực hành 
  trên Udemy*/
  const btnTransfer = document.querySelector("#btnTransfer");
  btnTransfer.addEventListener("click", function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find(
      (acc) => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = "";
    if (
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount &&
      receiverAcc?.username !== currentAccount.username
    ) {
      // Doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      // Update UI
      updateUI(currentAccount);
    }
  });
  /*LAB4.3: (SECTION	11: WORKING	WITH	ARRAY > ARRAY	METHOD	PRACTICE)
  Thực hiện code theo ví dụ sau */
  //1.
  const bankDepositSum = accounts
    .flatMap((acc) => acc.movements)
    .filter((mov) => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);
  console.log(bankDepositSum);
  // 2.
  // const numDeposits1000 = accounts
  // .flatMap(acc => acc.movements)
  // .filter(mov => mov >= 1000).length;
  const numDeposits1000 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
  console.log(numDeposits1000);
  // Prefixed ++ oeprator
  let a = 10;
  console.log(++a);
  console.log(a);
  // 3.
  const { deposits, withdrawals } = accounts
    .flatMap((acc) => acc.movements)
    .reduce(
      (sums, cur) => {
        // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
        sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
        return sums;
      },
      { deposits: 0, withdrawals: 0 }
    );
  console.log(deposits, withdrawals);
  // 4.
  // this is a nice title -> This Is a Nice Title
  const convertTitleCase = function (title) {
    const capitzalize = (str) => str[0].toUpperCase() + str.slice(1);
    const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];
    const titleCase = title
      .toLowerCase()
      .split(" ")
      .map((word) => (exceptions.includes(word) ? word : capitzalize(word)))
      .join(" ");
    return capitzalize(titleCase);
  };
  console.log(convertTitleCase("this is a nice title"));
  console.log(convertTitleCase("this is a LONG title but not too long"));
  console.log(convertTitleCase("and here is another title with an EXAMPLE"));