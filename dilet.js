  const food_con = document.querySelector('#food-con')
  const drink_con = document.querySelector('#drink-con')
  const fruit_con = document.querySelector('#fruit-con')
  const sum_kcal = document.querySelector('#sum-kcal')
  const list_select = document.querySelector('#list-select')
  const food_btn = document.querySelector(".food-btn")
  const drink_btn = document.querySelector(".drink-btn")
  const fruit_btn = document.querySelector(".fruit-btn")
  const clear_btn = document.querySelector('.clearlist')
  const typefood = 'food'
  const typedrink = 'drink'
  const typefruit = 'fruit'
  

  food_btn.addEventListener('click',()=>{
       food_con.style.display = "flex"
       drink_con.style.display = "none"
       fruit_con.style.display = "none";

  })

  drink_btn.addEventListener('click',()=>{
    food_con.style.display = "none"
    drink_con.style.display = "flex"
    fruit_con.style.display = "none";
})
  
 fruit_btn.addEventListener('click',()=>{
  food_con.style.display = "none"
  drink_con.style.display = "none"
  fruit_con.style.display = "flex";
})



   
  function getdata(data){
     for (let i = 0 ; i < data.food.length;i++){
      const item_con = document.createElement("div");
      item_con.innerHTML=`<div class="item" onclick="seleteritem('${typefood}',${data.food[i].id},'${data.food[i].foodname}',${data.food[i].calorie})" >
      ${data.food[i].foodname} 
      <p>${data.food[i].unit} กิโลแคลอรี ${data.food[i].calorie}</p>
      </div> `
      food_con.appendChild(item_con)
      } 
      for (let i = 0 ; i < data.drink.length;i++){
        const item_con = document.createElement("div");
        item_con.innerHTML=`<div class="item" onclick="seleteritem('${typedrink}',${data.drink[i].id},'${data.drink[i].drinkname}',${data.drink[i].calorie})" >
       ${data.drink[i].drinkname}
        <p>${data.drink[i].unit} กิโลแคลอรี่ ${data.drink[i].calorie}</p>
        </div> `
        drink_con.appendChild(item_con)
        } 
      for (let i = 0 ; i < data.fruit.length;i++){
          const item_con = document.createElement("div");
          item_con.innerHTML=`<div class="item" onclick="seleteritem('${typefruit}',${data.fruit[i].id},'${data.fruit[i].fruitname}',${data.fruit[i].calorie})" >
          ${data.fruit[i].fruitname}
          <p>${data.fruit[i].unit} กิโลแคลอรี่ ${data.fruit[i].calorie}</p>
          </div> `
          fruit_con.appendChild(item_con)
          } 
  }

  let list = [];
  function seleteritem(type,id,name,cal){
  console.log(type,id,name,cal)
  let pass = true;
  for(let i = 0 ;i < list.length; i++)
  {
    if(list[i].id==id&&list[i].type==type){
      list[i].count++;
      pass = false;
    }
  }
  if(pass){
    list.push({
      type:type,
      id:id,
      name:name,
      calorie:cal,
      count:1
    })
  }
  console.log('list:',list)
    let Productitemlist = ''
    let sumkcal = 0
      for(let i = 0 ; i<list.length;i++){ 
        sumkcal +=list[i].calorie*list[i].count
      const itemlist=`<div class='itemlist'> ${list[i].name} (kcal): ${list[i].calorie*list[i].count}<p>[x${list[i].count}]</p></div>`
      Productitemlist+=itemlist;
      }
      list_select.innerHTML=Productitemlist
      sum_kcal.innerHTML=`แคลอรี่ : ${sumkcal}`
  }
  clear_btn.addEventListener('click',()=>{
    list = []
    list_select.innerHTML=''
    sum_kcal.innerHTML='แคลอรี่ : 0'
})
   fetch("data.json")
   .then((response) => response.json())
   .then((data) => getdata(data))
   .catch((error) =>console.log(error)) ;
   



    