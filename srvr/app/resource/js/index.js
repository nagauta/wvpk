(() => {
  // dev/hello.js
  function hello() {
    alert("\u3059\u3063\u3054\u3044");
  }

  // dev/bye.js
  (() => {
    function yeah() {
      alert("oh yeah");
    }
    yeah();
  })();

  // dev/index.js
  hello();
})();
