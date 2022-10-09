const state = { count: 0 };

const btn = document.getElementById('increment');
btn.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  counter.innerHTML = ++state.count;
});
const bts = document.getElementById('decrement');
bts.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  if(counter.innerHTML >= 1){
    counter.innerHTML = --state.count;
  }
});
const btm = document.getElementById('reset');
btm.addEventListener('click', () => {
  const counter = document.getElementById('counter');
  counter.innerHTML = state.count = 0;
});


function clickBtn3() {
    const div2 = document.getElementById("div2");
    // 要素の追加
      const input1 = document.createElement("input");
      const input2 = document.createElement("br");
      input1.setAttribute("type", "text");
      input1.setAttribute("maxlength", "10");
      input1.setAttribute("size", "30");
      input1.setAttribute("value", "部門名を入力してください");
      div2.appendChild(input1);
      div2.appendChild(input2);
    
  }
  function clickBtn4() {
    const div2 = document.getElementById("div2");
    if (div2.hasChildNodes()) {
      div2.removeChild(div2.lastChild);
      div2.removeChild(div2.lastChild);
    }
  }

  function clickBtn5() {
    const div3 = document.getElementById("div3");
    // 要素の追加
      const input1 = document.createElement("input");
      const input2 = document.createElement("br");
      input1.setAttribute("type", "text");
      input1.setAttribute("maxlength", "10");
      input1.setAttribute("size", "30");
      input1.setAttribute("value", "学校名を入力してください");
      div3.appendChild(input1);
      div3.appendChild(input2);
    
  }
  function clickBtn6() {
    const div3 = document.getElementById("div3");
    if (div3.hasChildNodes()) {
      div3.removeChild(div3.lastChild);
      div3.removeChild(div3.lastChild);
    }
  }
  function clickBtn7() {
    const div4 = document.getElementById("div4");
    // 要素の追加
      const input1 = document.createElement("input");
      const input2 = document.createElement("br");
      input1.setAttribute("type", "text");
      input1.setAttribute("maxlength", "10");
      input1.setAttribute("size", "30");
      input1.setAttribute("value", "チーム名を入力してください");
      div4.appendChild(input1);
      div4.appendChild(input2);
  }
  function clickBtn8() {
    const div4 = document.getElementById("div4");
    if (div4.hasChildNodes()) {
      div4.removeChild(div4.lastChild);
      div4.removeChild(div4.lastChild);
    }
  }