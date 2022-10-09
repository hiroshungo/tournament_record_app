let create_check_boxes = document.getElementsByClassName("content_list")
//const create_reception = document.getElementById("reception-name")
//各チェックボックスが選択されたら呼び出される関数
function displaySelectedCreate(){
  //選択された果物の文字列を入れるための配列
  let displayed_create = []
  //表示箇所を取得
  let favorites_create = document.getElementById("extracted_words")
  //チェックボックスごとに、選択されているかどうかで文字列用の配列に出し入れを行う
  for(let i = 0; i < create_check_boxes.length; i++){
    if(create_check_boxes[i].checked){
      displayed_create.push(create_check_boxes[i].nextElementSibling.textContent) 
      //displayed_create.push(create_reception)
    } else {
      let removing_create = create_check_boxes[i].nextElementSibling.textContent
      displayed_create = displayed_create.filter(item => (item.match(/${removing_create}/)) == null);
    }
  } 
  //表示箇所に選択されている果物を表示
  favorites_create.textContent = displayed_create

  
}