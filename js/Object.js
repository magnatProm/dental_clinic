// плашка с ярлыками
const label=[
    {
      "img":'img/icons/label-2.png',
        "header":'УДАЛЕНИЕ ЗУБОВ',
        "text":'Бережно и аккуратно',
        "price":800,
        "discount":"",
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ЧИСТКА ЗУБОВ',
        "text":'Гигиеническая чистка зубов',
        "price":200,
        "discount":56,
    },
    {
      "img":'img/icons/label-2.png',
        "header":'3D-ДИАГНОСТИКА',
        "text":'Томография челюсти',
        "price":200,
        "discount":23,
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ИМПЛАНТАЦИЯ',
        "text":'Вставить новый зуб просто',
        "price":200,
        "discount":"",
    },


    {
      "img":'img/icons/label-2.png',
        "header":'ОТБЕЛИВАНИЕ BEYOND',
        "text":'Аппарат холодного света',
        "price":20,
        "discount":34,
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ИСПРАВЛЕНИЕ ПРИКУСА',
        "text":'Брекеты Дэймон',
        "price":200,
        "discount":78,
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ДЕТСКАЯ СТОМАТОЛОГИЯ',
        "text":'Лечение без сверления!',
        "price":200,
        "discount":"",
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ПЛАЗМОЛИФТИНГ ДЛЯ ДЕСЕН',
        "text":'Уникальная технология',
        "price":200,
        "discount":5,
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ЛЕЧЕНИЕ ЗУБОВ ПОД НАРКОЗОМ',
        "text":'Общая анестезия',
        "price":200,
        "discount":"",
    },


    {
      "img":'img/icons/label-2.png',
        "header":'ЛАЗЕРНОЕ ОТБЕЛИВАНИЕ',
        "text":'Отбеливание с помощью SironaLaser',
        "price":200,
        "discount":"",
    },
    {
      "img":'img/icons/label-2.png',
        "header":'КОМПОНИРЫ',
        "text":'Красивые зубы за один день',
        "price":200,
        "discount":45,
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ПРОТЕЗИРОВАНИЕ',
        "text":'Коронки, виниры, съемные протезы',
        "price":200,
        "discount":"",
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ЛЕЧЕНИЕ ЗУБОВ',
        "text":'Кариес, пульпит, периодонтит, (терапия)',
        "price":200,
        "discount":"",
    },
    {
      "img":'img/icons/label-2.png',
        "header":'ЛЕЧЕНИЕ ЗУБОВ ПОД МИКРОСКОПОМ',
        "text":'Вооруженному глазу виднее',
        "price":200,
        "discount":"",
    },
    {
        "img":'img/icons/label-1.png',
          "header":'АКЦИИ И СКИДКИ',
          "text":'Выгодные предложения',
          "price":270,
          "discount":56,
      },
    ]
    // - плашка с ярлыками

     //  врачи
    const dossier_info={
   dossier1:{
       img:'img/slider/doctor.png',
       name:'петров педро',
       rank:'глав врачь ортопед',
       skill:'высшая категория',
       experience:{
          age:'22 года',
          diplomas:'дипломы',
          work:'работы',
       },
   },
   dossier2:{
     img:'img/slider/doctor.png',
     name:'Мне больше 50лет',
     rank:'',
     skill:'+5',
     experience:{
         age:'22 года',
         diplomas:null,
         work:80,
     },
   },
   dossier3:{
     img:'img/slider/doctor.png',
     name:'фил',
     rank:'Зубной техник',
     skill:'80',
     experience:{
         age:null,
         diplomas:'дипломы',
         work:null,
     },
   },
   dossier4:{
     img:'img/slider/doctor.png',
     name:'терапевт',
     rank:'Стоматолог-терапевт',
     skill:'',
     experience:{
         age:null,
         diplomas:'дипломы',
         work:4,
     },
   },
 }
   // - врачи

   // зубы работы
 const teeth_work=[
  {
    "img_before":'img/slider/itching-after.png',
    "img_after":'img/slider/itching-before.png',
      "header":'ТЕРАПЕВТИЧЕСКИЕ ВИНИРЫ',
      "text":'Мастер Анна Викторовна СВЯТОБОГОВА',
  },
  {
    "img_before":'img/slider/itching-after.png',
    "img_after":'img/slider/itching-before.png',
      "header":'ПРОТЕЗИРОВАНИЕ КЕРАМИЧЕСКИМИ ВИНИРАМИ НА ЕСТЕСТВЕННЫХ ЗУБАХ И КОРОНКАМИ НА ИМПЛАНТАХ',
      "text":'Мастер Анна Викторовна СВЯТОБОГОВА',
  },
  {
    "img_before":'img/slider/itching-after.png',
    "img_after":'img/slider/itching-before.png',
      "header":'ТЕРАПЕВТИЧЕСКИЕ ВИНИРЫ',
      "text":'Мастер Анна Викторовна СВЯТОБОГОВА',
  },
  {
    "img_before":'img/slider/itching-after.png',
    "img_after":'img/slider/itching-before.png',
      "header":'ПРОТЕЗИРОВАНИЕ КЕРАМИЧЕСКИМИ ВИНИРАМИ НА ЕСТЕСТВЕННЫХ ЗУБАХ И КОРОНКАМИ НА ИМПЛАНТАХ',
      "text":'Мастер Анна Викторовна СВЯТОБОГОВА',
  },
 ]
  // - зубы работы

  const modol_info = [
    {
      "img": 'img/slider/doctor.png',
      "header": '<span class="title">ЗАПОЛНИТЕ ФОРМУ</span>для ЗАПИСИ на прием',
      "form__block": '<div class="form__block"><p>Адрес клиники</p><fieldset class="fieldset"><label><input type="radio" name="origin"><span>пр-т Дзержинского 1/1</span></label><label><input type="radio" name="origin"><span>Ленина 12</span></label></fieldset></div>',
    },
    {
      "img": null,
      "header": 'зaкозать звонок',
      "form__block": '<div class="form__block form__block-max"><p>коментарий</p><fieldset class="fieldset"><textarea placeholder="введите коментарий" rows="5" cols="30" style="resize: vertical;" maxlength="500"></textarea></fieldset></div>',
    },
  ]