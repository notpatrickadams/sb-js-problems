// Tests for TSS problems.

// Collect elements from DOM and assign listener.
const list = document.getElementById("javascript-practice-uo");
const display = document.getElementById("test-results");
list.addEventListener('click', handleClick);

/** Run and display all tests */
function testAll() {
  display.textContent = "";
  display.append(testRepeat());
  display.append(testRemoveFromString());
  display.append(testReverse());
  display.append(testMin());
  display.append(testSlice());
  display.append(testKeys());
  display.append(testValues());
  display.append(testSwapKeysAndValues());
  display.append(testPluck());
  display.append(testMultiples());
  display.append(testTwoHighest());
  display.append(testMinMaxKeyInObject());
  display.append(testStringFromObject());
  display.append(testCountNumbers());
};

/** Helper Function for checking deep equality of arrays.
 * There is no easy way to check deep equality with javascript arrays.
 * '==' and '===' will never work because javascript will be comparing them as two different pieces of data
 * in memory. It isn't actually checking the contenct.
 * In order to check the equality of arrays you have to find a way to not only check for the presence
 * of the values, but their order as well.
 */
function arraysEqual(a, b) {
  if (!Array.isArray(a) || !Array.isArray(b)) return;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

/** Listen for clicks
 * Using event delegation use conditionals to track what was clicked,
 * then run appropriate tests.
 */
function handleClick(evt) {
  display.textContent = "";
  const trg = evt.target.id;
  if (trg === "repeat") display.append(testRepeat());
  if (trg === "removeFromString") display.append(testRemoveFromString());
  if (trg === "reverse") display.append(testReverse());
  if (trg === "min") display.append(testMin());
  if (trg === "slice") display.append(testSlice());
  if (trg === "keys") display.append(testKeys());
  if (trg === "values") display.append(testValues());
  if (trg === "swapKeyAndValue") display.append(testSwapKeysAndValues());
  if (trg === "multiples") display.append(testMultiples());
  if (trg === "pluck") display.append(testPluck());
  if (trg === "twoHighest") display.append(testTwoHighest());
  if (trg === "minMaxKeyInObject") display.append(testMinMaxKeyInObject());
  if (trg === "stringFromObject") display.append(testStringFromObject());
  if (trg === "countNumbers") display.append(testCountNumbers());
};


/** Tests for repeat */
function testRepeat() {
  // Prepare frame for results
  let frame = document.createElement("ul");
  frame.classList.add("result-frame");

  // First test
  let r1 = repeat("Matt", 3);
  if (r1 === "MattMattMatt") {
    let pass1 = document.createElement("li");
    pass1.classList.add("pass");
    pass1.innerHTML = 'repeat("Matt", 3) pass.';
    frame.append(pass1);
  }
  else {
    let fail1 = document.createElement("li");
    fail1.classList.add("fail");
    fail1.innerHTML = 'repeat("Matt", 3) fail:';
    let fail2 = document.createElement("li");
    fail2.classList.add("fail");
    fail2.innerHTML = `Expected "MattMattMatt", received: ${r1}.`
    frame.append(fail1);
    frame.append(fail2);
  }

  // Second test
  let r2 = repeat("Elie", 2);
  if (r2 === "ElieElie") {
    let pass2 = document.createElement("li");
    pass2.classList.add("pass");
    pass2.innerHTML = 'repeat("Elie", 2) pass.';
    frame.append(pass2);
  }
  else {
    let fail3 = document.createElement("li");
    fail3.classList.add("fail");
    fail3.innerHTML = 'repeat("Elie", 2) fail:';
    let fail4 = document.createElement("li");
    fail4.classList.add("fail");
    fail4.innerHTML = `Expected "ElieElie", received: ${r2}.`
    frame.append(fail3);
    frame.append(fail4);
  }

  // Third test
  let r3 = repeat("Michael", 0);
  if (r3 === "") {
    let pass3 = document.createElement("li");
    pass3.classList.add("pass");
    pass3.innerHTML = 'repeat("Michael", 0) pass.';
    frame.append(pass3);
  }
  else {
    let fail5 = document.createElement("li");
    fail5.classList.add("fail");
    fail5.innerHTML = 'repeat("Michael", 0) fail:';
    let fail6 = document.createElement("li");
    fail6.classList.add("fail");
    fail6.innerHTML = `Expected "", received: ${r3}.`
    frame.append(fail5);
    frame.append(fail6);
  }

  return frame;
};


/** Tests for removeFromString */
function testRemoveFromString() {
  // Prepare frame for results
  let frame = document.createElement("ul");
  frame.classList.add("result-frame");

  // Test 1
  let rfs1 = removeFromString("Adam", 2, 2);
    if (rfs1 === "Ad") {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'removeFromString("Adam", 2, 2) pass.';
    frame.append(pass1);
  }
  else {
    let fail1 = document.createElement("li");
    fail1.classList.add("fail");
    fail1.innerHTML = 'emoveFromString("Adam", 2, 2) fail:';
    let fail2 = document.createElement("li");
    fail2.classList.add("fail");
    fail2.innerHTML = `Expected "Ad", received: ${rfs1}.`
    frame.append(fail1);
    frame.append(fail2);
  }

  // Test 2
  let rfs2 = removeFromString("Adam", 0, 1);
  if (rfs2 === "dam") {
    let pass2 = document.createElement("li");
    pass2.classList.add("pass");
    pass2.innerHTML = 'removeFromString("Adam", 0, 1) pass.';
    frame.append(pass2);
  }
  else {
    let fail3 = document.createElement("li");
    fail3.classList.add("fail");
    fail3.innerHTML = 'removeFromString("Adam", 0, 1) fail:';
    let fail4 = document.createElement("li");
    fail4.classList.add("fail");
    fail4.innerHTML = `Expected "dam", received: ${rfs2}.`
    frame.append(fail3);
    frame.append(fail4);
  }

  // Test 3
  let rfs3 = removeFromString("Following", 0, 6);
  if (rfs3 === "ing") {
    let pass3 = document.createElement("li");
    pass3.classList.add("pass");
    pass3.innerHTML = 'removeFromString("Following", 0, 6) pass.';
    frame.append(pass3);
  }
  else {
    let fail5 = document.createElement("li");
    fail5.classList.add("fail");
    fail5.innerHTML = 'removeFromString("Following", 0, 6) fail:';
    let fail6 = document.createElement("li");
    fail6.classList.add("fail");
    fail6.innerHTML = `Expected "ing", received: ${rfs3}.`
    frame.append(fail5);
    frame.append(fail6);
  }

  return frame;
};


/** Tests for reverse */
function testReverse() {
  // Prepare frame for results
  let frame = document.createElement("ul");
  frame.classList.add("result-frame");

  // Test 1
  let arr1 = reverse([1,2,4,4,1,2]);
  if (arraysEqual(reverse([1,2,4,4,1,2]), [2,1,4,4,2,1])) {
    let pass1 = document.createElement("li");
    pass1.classList.add("pass");
    pass1.innerHTML = 'reverse([1,2,4,4,1,2]) pass.';
    frame.append(pass1);
  }
  else {
    let fail1 = document.createElement("li");
    fail1.classList.add("fail");
    fail1.innerHTML = 'reverse([1,2,4,4,1,2]) fail:';
    let fail2 = document.createElement("li");
    fail2.classList.add("fail");
    fail2.innerHTML = `Expected [2,1,4,4,2,1], received: ${arr1}.`
    frame.append(fail1);
    frame.append(fail2);
  }

  // Test 2
  let arr2 = reverse([5,15,12,1,3]);
  if (arraysEqual(arr2, [3,1,12,15,5])) {
    let pass2 = document.createElement("li");
    pass2.classList.add("pass");
    pass2.innerHTML = 'reverse([5,15,12,1,3]) pass.';
    frame.append(pass2);
  }
  else {
    let fail3 = document.createElement("li");
    fail3.classList.add("fail");
    fail3.innerHTML = 'reverse([5,15,12,1,3]) fail:';
    let fail4 = document.createElement("li");
    fail4.classList.add("fail");
    fail4.innerHTML = `Expected [3,1,12,15,5], received: ${arr2}.`
    frame.append(fail3);
    frame.append(fail4);
  }

  // Test 3
  let arr3 = reverse([]);
  if (arraysEqual(arr3, [])) {
    let pass3 = document.createElement("li");
    pass3.classList.add("pass");
    pass3.innerHTML = 'reverse([]) pass.';
    frame.append(pass3);
  }
  else {
    let fail5 = document.createElement("li");
    fail5.classList.add("fail");
    fail5.innerHTML = 'reverse([]) fail:';
    let fail6 = document.createElement("li");
    fail6.classList.add("fail");
    fail6.innerHTML = `Expected [], received: ${arr3}.`
    frame.append(fail5);
    frame.append(fail6);
  }

  return frame;
}


/** Tests for vowelsOnly */
function testMin() {
  // Prepare frame for results
  let frame = document.createElement("ul");
  frame.classList.add("result-frame");

  // Test 1
  let vow1 = min([6,1,2,0,4,5]);
  if (vow1 === 0) {
    let pass1 = document.createElement("li");
    pass1.classList.add("pass");
    pass1.innerHTML = 'min("[6,1,2,3,4,5]" pass.';
    frame.append(pass1);
  }
  else {
    let fail1 = document.createElement("li");
    fail1.classList.add("fail");
    fail1.innerHTML = 'min("[6,1,2,3,4,5]" fail:';
    let fail2 = document.createElement("li");
    fail2.classList.add("fail");
    fail2.innerHTML = `Expected '1', received: ${vow1}.`
    frame.append(fail1);
    frame.append(fail2);
  }
    // Test 2
    let arr2 = min([5,15,12,1,3]);
    if (arr2 === 1) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'min([5,15,12,1,3]) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'min([5,15,12,1,3]) fail:';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `min([5,15,12,1,3]) received: ${arr2}.`
      frame.append(fail3);
      frame.append(fail4);
    }

  return frame;
};


/** Tests for  slice */
function testSlice() {
    // Prepare frame for results
    let frame = document.createElement("ul");
     frame.classList.add("result-frame");

     //First Test
    let arr1 = slice([1,2,4,4,1,2], 0, 2);
    if (arraysEqual(arr1, [1,2])) {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'slice([1,2,4,4,1,2]) pass.';
      frame.append(pass1);
    }
    else {
      let fail1 = document.createElement("li");
      fail1.classList.add("fail");
      fail1.innerHTML = 'slice([1,2,4,4,1,2]) fail:';
      let fail2 = document.createElement("li");
      fail2.classList.add("fail");
      fail2.innerHTML = `Expected [1,2] received: ${arr1}.`
      frame.append(fail1);
      frame.append(fail2);
    }
  
    // Test 2
    let arr2 = slice([5,15,12,1,3], 1 , 10);
    if (arraysEqual(arr2, [15,12,1,3])) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'slice([5,15,12,1,3], 1 , 10) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'slice([5,15,12,1,3], 1 , 10) fail:';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected [15,12,1,3], received: ${arr2}.`
      frame.append(fail3);
      frame.append(fail4);
    }
    return frame;
  };
  


/** Tests for isPangram */
function testValues() {
  // Prepare frame for results

    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");

    //First Test
    const obj1 = {
    title: "Titanic",
    year: 1997,
    rating: "PG-13",
    revenue: 659363944,
    director: "James Cameron"
  };  
  let arr1 = keys(obj1);
  if (arraysEqual(arr1, ["Titanic", 1997, "PG-13", 659363944, "James Cameron"],)) {
    let pass1 = document.createElement("li");
    pass1.classList.add("pass");
    pass1.innerHTML = 'keys({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) pass.';
    frame.append(pass1);
  }
  else {
    let fail1 = document.createElement("li");
    fail1.classList.add("fail");
    fail1.innerHTML = 'keys({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) fail.';
    let fail2 = document.createElement("li");
    fail2.classList.add("fail");
    fail2.innerHTML = `Expected ["Titanic", 1997, "PG-13", 659363944, "James Cameron"] received: ${arr1}.`
    frame.append(fail1);
    frame.append(fail2);
  }

  // Test 2
  let arr2 = keys({});
  if (arraysEqual(arr2, [])) {
    let pass2 = document.createElement("li");
    pass2.classList.add("pass");
    pass2.innerHTML = 'keys([{}]) pass.';
    frame.append(pass2);
  }
  else {
    let fail3 = document.createElement("li");
    fail3.classList.add("fail");
    fail3.innerHTML = 'keys({}) fail:';
    let fail4 = document.createElement("li");
    fail4.classList.add("fail");
    fail4.innerHTML = `Expected [], received: ${arr2}.`
    frame.append(fail3);
    frame.append(fail4);
  }
  return frame;
};

function testKeys() {
    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");

    const obj1 = {
      title: "Titanic",
      year: 1997,
      rating: "PG-13",
      revenue: 659363944,
      director: "James Cameron"
    };  
    let arr1 = keys(obj1);
    //not sure how to write this test

    if (arraysEqual(arr1, ["title", "year", "rating", "revenue", "director"],)) {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'keys({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) pass.';
      frame.append(pass1);
    }
    else {
      let fail1 = document.createElement("li");
      fail1.classList.add("fail");
      fail1.innerHTML = 'keys({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) fail.';
      let fail2 = document.createElement("li");
      fail2.classList.add("fail");
      fail2.innerHTML = `Expected ["title", "year", "rating", "revenue", "director"] received: ${arr1}.`
      frame.append(fail1);
      frame.append(fail2);
    }
  
    // Test 2
    let arr2 = keys({});
    if (arraysEqual(arr2, [])) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'keys([{}]) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'keys({}) fail:';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected [], received: ${arr2}.`
      frame.append(fail3);
      frame.append(fail4);
    }
    return frame;
  };

  
  function testValues() {
    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");

    const obj1 = {
      title: "Titanic",
      year: 1997,
      rating: "PG-13",
      revenue: 659363944,
      director: "James Cameron"
    };  
    let arr1 = values(obj1);
    //not sure how to write this test
    if (arraysEqual(arr1, Object.values(obj1))) {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'values({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) pass.';
      frame.append(pass1);
    }
    else {
      let fail1 = document.createElement("li");
      fail1.classList.add("fail");
      fail1.innerHTML = 'values({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) fail.';
      let fail2 = document.createElement("li");
      fail2.classList.add("fail");
      fail2.innerHTML = `Expected ["Titanic", 1997, "PG-13", 659363944, "James Cameron"] received: ${arr1}.`
      frame.append(fail1);
      frame.append(fail2);
    }
  
    // Test 2
    let arr2 = values({});
    if (arraysEqual(arr2, [])) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'values([{}]) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'values({}) fail:';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected [], received: ${arr2}.`
      frame.append(fail3);
      frame.append(fail4);
    }
    return frame;
  };

  function testSwapKeysAndValues() {
    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");

    const obj1 = {
      title: "Titanic",
      year: 1997,
      rating: "PG-13",
      revenue: 659363944,
      director: "James Cameron"
    }

    const obj2 = {
      Titanic: "title",
      year: 1997,
      rating: "PG-13",
      revenue: 659363944,
      director: "James Cameron"
    }

    const resObj = swapKeyAndValue(obj1, "title");
    if(resObj === null || resObj === undefined){ 
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'swapKeyAndValue({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) fail.';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected { Titanic: "title", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"} received: ${"N/A"}.`
      frame.append(fail3);
      frame.append(fail4);
      return;
    }
    else if (Object.entries(resObj).toString() === Object.entries(obj2).toString()) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'swapKeyAndValue({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'swapKeyAndValue({ title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}) fail.';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected { Titanic: "title", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"} received: ${Object.entries(resObj).toString()}.`
      frame.append(fail3);
      frame.append(fail4);
    }
  
    return frame;
  };

  function testMultiples(){
    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");


    let arr1 = multiples(3,4);
    if (arraysEqual(arr1, [3,6,9,12]))  {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'multiples(3,4) pass.';
      frame.append(pass1);
    }
    else {
      let fail1 = document.createElement("li");
      fail1.classList.add("fail");
      fail1.innerHTML = 'multiples(3,4) fail.';
      let fail2 = document.createElement("li");
      fail2.classList.add("fail");
      fail2.innerHTML = `Expected [3,6,9,12] received: ${arr1}.`
      frame.append(fail1);
      frame.append(fail2);
    }

    // Test 2
    let arr2 = multiples([2,5]);
    if (arraysEqual(arr2, [2,4,6,8,10])) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'values([{}]) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'multiples([2,5]) fail:';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected [2,4,6,8,10], received: ${arr2}.`
      frame.append(fail3);
      frame.append(fail4);
    }
  
    return frame;
  };


  function testPluck() {
    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");

    const obj1 = {
      title: "Titanic",
      year: 1997,
      rating: "PG-13",
      revenue: 659363944,
      director: "James Cameron"
    };  
    const obj2 = {
      title: "Pulp Fiction",
      year: 1994,
      rating: "R",
      revenue: 948504495,
      director: "Quentin Tarantino"
    };  
    const obj3 = {
      title: "Cleo From 5 to 7",
      year: 1962,
      rating: "PG",
      revenue: 300499504,
      director: "Agnes Varda"
    };  
    const obj4 = {
      title: "Filler"
    };  


    let arr1 = pluck([obj1], "director");
    if (arraysEqual(arr1, ["James Cameron", "Quentin Tarantino", "Anges Varda", -1])) {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'pluck({title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}, {title: "Pulp Fiction", year: 1994, rating: "R", revenue: 948504495, director: "Quentin Tarantino" }; {title: "Cleo From 5 to 7", year: 1962, rating: "PG", revenue: 300499504, director: "Agnes Varda" }; {title: "Filler"};  , "director");) pass.';
      frame.append(pass1);
    }
    else {
      let fail1 = document.createElement("li");
      fail1.classList.add("fail");
      fail1.innerHTML = 'values(title: "Titanic", year: 1997, rating: "PG-13", revenue: 659363944, director: "James Cameron"}, {title: "Pulp Fiction", year: 1994, rating: "R", revenue: 948504495, director: "Quentin Tarantino" }; {title: "Cleo From 5 to 7", year: 1962, rating: "PG", revenue: 300499504, director: "Agnes Varda" }; {title: "Filler"};  , "director");)) fail.';
      let fail2 = document.createElement("li");
      fail2.classList.add("fail");
      fail2.innerHTML = `Expected ["James Cameron", "Quentin Tarantino", "Anges Varda", -1] received: ${arr1}.`
      frame.append(fail1);
      frame.append(fail2);
    }
  
    // Test 2
    let arr2 = pluck([{ "name": "Iggy" }, { "name": "Bowie"}, { "name": "Eno" }], "name");
    if (arraysEqual(arr2, ["Iggy", "Bowie", "Eno"])) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'pluck({ "name": "Iggy" }, { "name": "Bowie"}, { "name": "Eno" }, "name") pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'pluck({ "name": "Iggy" }, { "name": "Bowie"}, { "name": "Eno" }, "name") fail:';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected ["Iggy", "Bowie", "Eno"], received: ${arr2}.`
      frame.append(fail3);
      frame.append(fail4);
    }
    return frame;
  };

  function testTwoHighest() {
    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");

    let arr1 = twoHighest([10, 2, 3, 15, 9]);
    if (arraysEqual(arr1, [10, 15])) {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'twoHighest([10, 2, 3, 15, 9]) pass.';
      frame.append(pass1);
    }
    else {
      let fail1 = document.createElement("li");
      fail1.classList.add("fail");
      fail1.innerHTML = 'twoHighest([10, 2, 3, 15, 9]) fail.';
      let fail2 = document.createElement("li");
      fail2.classList.add("fail");
      fail2.innerHTML = `Expected [10,15] received: ${arr1}.`
      frame.append(fail1);
      frame.append(fail2);
    }
  
    // Test 2
    let arr2 = twoHighest([1, 7, 10, 5, 20, 25, 4]);
    if (arraysEqual(arr2, [20, 25])) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'twoHighest([1, 7, 10, 5, 20, 25, 4]) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'twoHighest([1, 7, 10, 5, 20, 25, 4]) fail:';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected [20, 25], received: ${arr2}.`
      frame.append(fail3);
      frame.append(fail4);
    }
    return frame;
  };


  function testMinMaxKeyInObject() {
    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");

    const obj1 = {
      10: "a",
      2: "b",
      3: "c",
      40: "d",
    };  

    let arr1 = minMaxKeyInObject(obj1);
    if (arraysEqual(arr1, [2,40])) {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'minMaxKeyInObject({10: "a", 2: "b", 3: "c", 40: "d"});) pass.';
      frame.append(pass1);
    }
    else {
      let fail1 = document.createElement("li");
      fail1.classList.add("fail");
      fail1.innerHTML = 'minMaxKeyInObject({10: "a", 2: "b", 3: "c", 40: "d"});) fail.';
      let fail2 = document.createElement("li");
      fail2.classList.add("fail");
      fail2.innerHTML = `Expected [2, 40] received: ${arr1}.`
      frame.append(fail1);
      frame.append(fail2);
    }

    const obj2 = {
      1: "a",
      100: "b",
      0: "c",
      200: "d",
      300: "e"
    };  
  
    // Test 2
    let arr2 = minMaxKeyInObject(obj2);
    if (arraysEqual(arr2, [0,300])) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'minMaxKeyInObject({1: "a", 100: "b", 0: "c", 200: "d", 300: "e"});) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'minMaxKeyInObject({1: "a", 100: "b", 0: "c", 200: "d", 300: "e"});) fail.';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected [0, 300], received: ${arr2}.`
      frame.append(fail3);
      frame.append(fail4);
    }
    return frame;
  };

  function testStringFromObject() {
    // Prepare frame for results
    let frame = document.createElement("ul");
    frame.classList.add("result-frame");

    const obj1 = {
      a: "1",
      b: "2"
    }

    const obj2 = {
      10: "a",
      2: "b",
      3: "c",
      40: "d"
    };  

    let str1 = stringFromObject(obj1);
    if ((str1 === "a = 1, b = 2")) {
      let pass1 = document.createElement("li");
      pass1.classList.add("pass");
      pass1.innerHTML = 'stringFromObject({a: "1", b : "2"});) pass.';
      frame.append(pass1);
    }
    else {
      let fail1 = document.createElement("li");
      fail1.classList.add("fail");
      fail1.innerHTML = 'stringFromObject({a: "1", b : "2"});) fail.';
      let fail2 = document.createElement("li");
      fail2.classList.add("fail");
      fail2.innerHTML = `Expected "a = 1, b = 2" received: ${str1}.`
      frame.append(fail1);
      frame.append(fail2);
    }


    // Test 2
    let str2 = stringFromObject(obj2);
    if ((str2 === "2 = b, 3 = c, 10 = a, 40 = d")) {
      let pass2 = document.createElement("li");
      pass2.classList.add("pass");
      pass2.innerHTML = 'stringFromObject({10: 2 = b, 3 = c, 10 = a, 40 = d});) pass.';
      frame.append(pass2);
    }
    else {
      let fail3 = document.createElement("li");
      fail3.classList.add("fail");
      fail3.innerHTML = 'stringFromObject({10: "2 = b, 3 = c, 10 = a, 40 = d});) fail.';
      let fail4 = document.createElement("li");
      fail4.classList.add("fail");
      fail4.innerHTML = `Expected "2 = b, 3 = c, 10 = a, 40 = d" received: ${str2}.`
      frame.append(fail3);
      frame.append(fail4);
    }
    return frame;
  };

/** Tests for  slice */
function testCountNumbers() {
  // Prepare frame for results
   let frame = document.createElement("ul");
   frame.classList.add("result-frame");

   //First Test
  let rtn1 = countNumbers(["11", "hello", "gard3n", "20"]);
  if (rtn1 === 2) {
    let pass1 = document.createElement("li");
    pass1.classList.add("pass");
    pass1.innerHTML = 'countNumbers(["11", "hello", "gard3n", "20"]) pass.';
    frame.append(pass1);
  }
  else {
    let fail1 = document.createElement("li");
    fail1.classList.add("fail");
    fail1.innerHTML = 'countNumbers(["11", "hello", "gard3n", "20"]) fail:';
    let fail2 = document.createElement("li");
    fail2.classList.add("fail");
    fail2.innerHTML = `Expected 2 received: ${rtn1}.`
    frame.append(fail1);
    frame.append(fail2);
  }

  // Test 2
  let rtn2 = countNumbers([]);
  if (rtn2 === 0) {
    let pass2 = document.createElement("li");
    pass2.classList.add("pass");
    pass2.innerHTML = 'countNumbers([]) pass.';
    frame.append(pass2);
  }
  else {
    let fail3 = document.createElement("li");
    fail3.classList.add("fail");
    fail3.innerHTML = 'countNumbers([]) fail:';
    let fail4 = document.createElement("li");
    fail4.classList.add("fail");
    fail4.innerHTML = `Expected 0, received: ${rtn2}.`
    frame.append(fail3);
    frame.append(fail4);
  }
  return frame;
};

  
  



// Color constants for console.logs.
const errLog = "color: red";
const functLog = "color: blue";
const pass = "color: green";

testAll();