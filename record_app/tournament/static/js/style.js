let create_check_boxes = document.getElementsByClassName("content_list")

function displaySelectedCreate(){
  let displayed_create = []
  let favorites_create = document.getElementById("extracted_words")
  for(let i = 0; i < create_check_boxes.length; i++){
    if(create_check_boxes[i].checked){
      displayed_create.push(create_check_boxes[i].nextElementSibling.textContent) 
      //displayed_create.push(create_reception)
    } else {
      let removing_create = create_check_boxes[i].nextElementSibling.textContent
      displayed_create = displayed_create.filter(item => (item.match(/${removing_create}/)) == null);
    }
  } 
  favorites_create.textContent = displayed_create
}


