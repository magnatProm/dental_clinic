const assistance_height=document.querySelector('.assistance__inner_1').offsetHeight;
document.querySelector('.assistance__inner_1:nth-child(2)').style.height=assistance_height+15+"px";

document.querySelector('.assistance__add').addEventListener('click', (event)=>{
    const block=document.querySelector('.assistance').classList;
    if(event.target.closest('span')){
        block.remove("assistance__price", "assistance__discount");
        if(event.target.innerHTML=="цены"){
            block.add('assistance__price')
        }
        if(event.target.innerHTML=="скидки %"){
            block.add('assistance__discount')
        }
    }
})
document.querySelector('.assistance__slider').addEventListener('click', (event)=>{
    const block=document.querySelector('.assistance').classList;
    if(event.target.closest('span')){
        block.remove("assistance__block_add");
        if(event.target.innerHTML=="все услуги"){
            block.add('assistance__block_add')
        }
    }
})

document.querySelector('input[type="tel"]').addEventListener('input', function(){
    // alert(this.value)

    const myText = this.value; // инициализируем переменную, содержащую строку

    const pattern = /\d+/g // cоответствует всем вхождениям одной или более цифр
    const pattern2 = /\d/g // cоответствует всем вхождениям одной цифры
    const pattern3 = /(\d{3})(\d{3})(\d{2})(\d{2})/g // cоответствует всем вхождениям одного или более символа, который не является цифрой в базовом латинском алфавите
    const pattern4 = /\D/g // cоответствует всем вхождениям одного символа, который не является цифрой в базовом латинском алфавите
    
    // производим поиск по заданной строке с использованием регулярного выражения 
    const arr = myText.match(pattern); 
    const arr2 = myText.match(pattern2);
    // const arr3 = myText.match(pattern3);
    // const arr4 = myText.match(pattern4);
    // const n=arr2.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/g, `${4} ($1) $2 $3 $4`);
    
    // выводим значение переменных
    console.log( arr ); // ["7", "89", "0"]
    console.log( arr2 ); // ["7", "8", "9", "0"]
    console.log( this.value.replace(/^(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 ($1) $2-$3-$4') );
    // console.log( n ); // ["7", "8", "9", "0"]
    // console.log( arr3 ); // ["s", "t", "ring"]
    // console.log( arr4 ); // ["s", "t", "r", "i", "n", "g"]


})

// document.querySelector('[data-doneness]').addEventListener('input', function(){

//     const svg='<svg width="16" height="21" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M19.8676 12.6C19.6089 12.2625 19.2939 11.97 19.0014 11.6775C18.2476 11.0025 17.3926 10.5188 16.6726 9.81C14.9964 8.1675 14.6251 5.45625 15.6939 3.375C14.6251 3.63375 13.6914 4.21875 12.8926 4.86C9.97887 7.2 8.83137 11.3288 10.2039 14.8725C10.2489 14.985 10.2939 15.0975 10.2939 15.2438C10.2939 15.4913 10.1251 15.7163 9.90012 15.8063C9.64137 15.9188 9.37137 15.8513 9.15762 15.6713C9.09338 15.6181 9.03992 15.5532 9.00012 15.48C7.72887 13.8713 7.52637 11.565 8.38137 9.72C6.50262 11.25 5.47887 13.8375 5.62512 16.2788C5.69262 16.8413 5.76012 17.4038 5.95137 17.9663C6.10887 18.6413 6.41262 19.3163 6.75012 19.9125C7.96512 21.8588 10.0689 23.2538 12.3301 23.535C14.7376 23.8388 17.3139 23.4 19.1589 21.735C21.2176 19.8675 21.9376 16.875 20.8801 14.31L20.7339 14.0175C20.4976 13.5 19.8676 12.6 19.8676 12.6ZM16.3126 19.6875C15.9976 19.9575 15.4801 20.25 15.0751 20.3625C13.8151 20.8125 12.5551 20.1825 11.8126 19.44C13.1514 19.125 13.9501 18.135 14.1864 17.1338C14.3776 16.2338 14.0176 15.4913 13.8714 14.625C13.7364 13.7925 13.7589 13.0838 14.0626 12.3075C14.2764 12.735 14.5014 13.1625 14.7714 13.5C15.6376 14.625 16.9989 15.12 17.2914 16.65C17.3364 16.8075 17.3589 16.965 17.3589 17.1338C17.3926 18.0563 16.9876 19.0688 16.3126 19.6875Z" fill="#F75500" style="transform: translate(-5px, -3px);"></path></svg>';
//     const svg_add=(65<+this.value) ? svg : (36<+this.value) ? svg+svg : svg+svg+svg;
//     const number=(33>+this.value) ? -8 : 0;
//     const doneness=document.querySelector('.doneness');
  
//       // ++++++
//       remove('none' , 'none' , 'none' , 'none' , 1)
//       // ++++++
  
//       document.querySelector('.pizza').style.cssText=`
//         background: hsl(36deg 100% ${this.value}%);
//         border: 15px solid hsl(36deg 100% ${this.value}%);
//   `;
  
//   doneness.innerHTML=svg_add;
//   doneness.style.right=(+this.value-15+number)+"%";
  
//   console.log(this.value)
//   })


// плашка с ярлыками
// label.reverse()
label.forEach(function (item) {
   document.querySelector('.js_object').insertAdjacentHTML("afterbegin",
      `
      <div class="assistance__block">
      <input type="radio" name="assistance">
      <img src="${item.img}" alt="img">
      <p>${item.header}</p>
      <ul class="ul">
          <li><a href="#" data-price="${item.price}" data-discount="${item.discount}">${item.text}</a></li>
      </ul>
  </div>
   `);
});
// - плашка с ярлыками

// слайдер врачи
for (let key in dossier_info){
    console.log(Object.keys(dossier_info)+" сколько их")
    console.log(dossier_info[key]['name'])

    let li="";
    for (let key2 of Object.values(dossier_info[key]['experience'])){
        console.log(key2)
        if(key2 != null){li+=`<li>${key2}</li>`}
    }

    document.querySelector('.slider').insertAdjacentHTML("afterbegin",
      `
      <div class="slider_dossier">
    <img src="${dossier_info[key]['img']}" alt="doctor">
    <ul class="ul">
        <li>${dossier_info[key]['name']}</li>
        <li>${dossier_info[key]['rank']}</li>
        <li>${dossier_info[key]['skill']}</li>
    </ul>
    <p>стаж</p>
    <ul class="ul flex_text">
    ${li}
    </ul>
    </div>
   `);

    // for (let key2 of Object.values(dossier_info[key]['experience'])){
    //     console.log(key2)
    //     // console.log(Object.values(key2))
    //     // console.log(Object.keys(key2))
    // }

}
// - слайдер врачи

// зубы
teeth_work.forEach(function (item) {
    document.querySelector('.work__mous').insertAdjacentHTML("afterbegin",
       `
       <div class="slider_work">
       <div class="slider_work__block">
           <div class="slider_work-left">
               <p>после</p>
           </div>
           <div class="slider_work-right">
               <p>до</p>
           </div>
       </div>
       <div class="slider_work__img">
          <img class="slider_work-left_img" src="${item.img_before}" alt="work">
          <img class="slider_work-right_img" src="${item.img_after}" alt="work">
       </div>
       <div class="text">
          <p>${item.header}</p>
          <p>${item.text}</p>
       </div>
    </div>
    `);
 });
// - зубы

document.querySelector('.work__mous').addEventListener('mouseover', (event)=>{
    const block=event.target.closest('.slider_work').classList;
    
        block.remove("open");
        
        if(event.target.closest('.slider_work-right')){
            block.add('open')
        }
})

document.addEventListener('click', (event)=>{
    const modal=document.querySelector('.modal').classList;

    if(event.target.closest('button[data-modal]')){
        modal.remove("hide")

        const number=(event.target.closest('button[data-modal]').innerHTML=="заказать звонок") ? 0 : 1;
        modol_info.forEach(function (item, arr) {
            if(arr==number){
        document.querySelector('.modal').insertAdjacentHTML("beforeend",
        `
        <div class="modal__dialog">
        ${(item.img==null)? "" : '<img src='+item.img+' alt="promo">'}
        <form class="form modal__content">
        <p class="form__title">${item.header}</p>
        <div class="form__block">
            <p>Как Вас зовут</p>
            <input class="form__input" name="email" type="email" placeholder="имя">
        </div>
        <div class="form__block">
                        <p>Номер телефона</p>
                        <input class="form__input" name="phone" type="tel" maxlength="7" placeholder="+7 (xxx)-xxx-xx-xx">
                    </div>
        ${item.form__block}
        <div class="form__block form__block-max">
                        <p>Защита от автоматического заполнения</p>
                        <div class="form__info">
                            <input type="checkbox" id="checkbox_box" name="checkbox_box">
                            <label for="checkbox_box">я не робот</label>
                        </div>
                    </div>
                    <button class="form__btn">оставить заявку</button>
                    <p>
                        Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href="#">политикой конфиденциальности.</a>
                    </p>
        </form>
    </div>
    `
      );
            }
    });
     }
})

document.querySelector('.modal').addEventListener('click', (event)=>{
    if(!event.target.closest('.modal__dialog')){
        document.querySelector('.modal').classList.add("hide")
        let modal_content_delete = document.querySelectorAll('.modal__dialog');
  modal_content_delete[0].parentNode.removeChild(modal_content_delete[0]);
    }
})

{/* <p class="form__title">${item.header}</p>
        <div class="form__block">
            <p>Как Вас зовут</p>
            <input class="form__input" name="email" type="email" placeholder="имя">
        </div>
        <div class="form__block">
                        <p>Номер телефона</p>
                        <input class="form__input" name="phone" type="tel" maxlength="7" placeholder="+7 (xxx)-xxx-xx-xx">
                    </div>
        ${item.form__block}
        <div class="form__block form__block-max">
                        <p>Защита от автоматического заполнения</p>
                        <div class="form__info">
                            <input type="checkbox" id="checkbox_box" name="checkbox_box">
                            <label for="checkbox_box">я не робот</label>
                        </div>
                    </div>
                    <button class="form__btn">оставить заявку</button>
                    <p>
                        Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c <a href="#">политикой конфиденциальности.</a>
                    </p> */}