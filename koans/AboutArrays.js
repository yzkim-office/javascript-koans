describe("Arrays", function() {

  it("Array를 만듭니다.", function() {
    // FILL_ME_IN을 수정해주세요!
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe("object");
    expect(emptyArray.length).toBe(0);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("Array Literals로 만들기", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1,2,3]);
  });

  it("Array의 length", function () {
    // FILL_ME_IN을 수정해주세요!
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
  });

  it("Array의 slice", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    // end가 start 앞에 나오면 새로운 배열에 아무 요소도 복사되지 않습니다.
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("Array의 reference", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";
    }

    // 이 부분을 놓치지 마시고 잘 보세요!
    passedByReference(array);

    expect(array[1]).toBe("changed in function");

    // 이 부분을 놓치지 마시고 잘 보세요!
    var assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe("changed in assignedArray");

    // 이 부분을 놓치지 마시고 잘 보세요!
    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe("three");
  });

  it("push와 pop", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = [1, 2];
    array.push(3);

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();
    //배열에서 마지막 요소를 제거하여 반환(배열로 반환하지않음..)
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1,2]);
  });

  it("shift와 unshift", function () {
    // FILL_ME_IN을 수정해주세요!
    var array = [1, 2];

    array.unshift(3);
    //unshift 메서드는 배열의 시작 부분에 요소를 삽입하여 인수 목록에 표시되는 순서대로 표시합니다.
    expect(array).toEqual([3,1,2]);

    var shiftedValue = array.shift();
    //배열에서 첫 번째 요소를 제거하여 반환합니다.
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1,2]);
  });
});
