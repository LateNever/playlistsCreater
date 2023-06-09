const allTracks = [
  {
    id: '1001',
    writer: '2Маши',
    songName: 'First track, first gig 1',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0,
    highTrackNum: 0,
    lowGigNum: 0,
    highGigNum: 0.33,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1002',
    writer: '2Маши',
    songName: 'First track, mid gig 2',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0,
    highTrackNum: 0,
    lowGigNum: 0.33,
    highGigNum: 0.66,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1003',
    writer: '2Маши',
    songName: 'First track, last gig 3',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0,
    highTrackNum: 0,
    lowGigNum: 0.66,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1004',
    writer: '2Маши',
    songName: 'First half track 1',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0.01,
    highTrackNum: 0.5,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1005',
    writer: '2Маши',
    songName: 'First half track 2',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0.01,
    highTrackNum: 0.5,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1006',
    writer: '2Маши',
    songName: 'First half track 3',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0.01,
    highTrackNum: 0.5,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1007',
    writer: '2Маши',
    songName: 'Second half track 1',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0.5,
    highTrackNum: 0.99,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1008',
    writer: '2Маши',
    songName: 'Second half track 2',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0.5,
    highTrackNum: 0.99,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1009',
    writer: '2Маши',
    songName: 'Second half track 3',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 0.5,
    highTrackNum: 0.99,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1010',
    writer: '2Маши',
    songName: 'Last track 1',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 1,
    highTrackNum: 1,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1011',
    writer: '2Маши',
    songName: 'Last track 2',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 1,
    highTrackNum: 1,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  {
    id: '1012',
    writer: '2Маши',
    songName: 'Last track 3',
    bars: ['zarnizza', 'bullwar'],
    lowTrackNum: 1,
    highTrackNum: 1,
    lowGigNum: 0,
    highGigNum: 1,
    // gigNumbers: [1, 2, 3],
    isActive: false,
  },
  // {
  //   id: '1001',
  //   writer: '2Маши',
  //   songName: 'Босая',
  //   bars: ['zarnizza', 'bullwar'],
  //   lowTrackNum: 0,
  //   highTrackNum: 0.3,
  //   gigNumbers: [1, 2, 3],
  // },
  // {
  //   id: '1002',
  //   writer: '2Маши',
  //   songName: 'Мама, я танцую',
  //   bars: ['harats', 'zarnizza', 'bullwar'],
  //   lowTrackNum: 0,
  //   highTrackNum: 0.99,
  //   gigNumbers: [1, 2, 3],
  // },
  // {
  //   id: '1003',
  //   writer: 'А-Мега',
  //   songName: 'Лететь',
  //   bars: ['harats', 'zarnizza', 'bullwar'],
  //   lowTrackNum: 1,
  //   highTrackNum: 1,
  //   gigNumbers: [1, 2, 3],
  // },
  // {
  //   id: '1004',
  //   writer: 'Агата Кристи',
  //   songName: 'Как на войне',
  //   bars: ['harats', 'zarnizza', 'bullwar'],
  //   lowTrackNum: 0,
  //   highTrackNum: 0.99,
  //   gigNumbers: [1, 2, 3],
  // },
  // {
  //   id: '1005',
  //   writer: 'Андрей Губин',
  //   songName: 'Девушки как звезды',
  //   bars: ['harats', 'zarnizza', 'bullwar'],
  //   lowTrackNum: 0,
  //   highTrackNum: 0.7,
  //   gigNumbers: [1, 2, 3],
  // },
  // {
  //   id: '1006',
  //   writer: 'Андрей Губин',
  //   songName: 'Ночь',
  //   bars: ['harats', 'zarnizza', 'bullwar'],
  //   lowTrackNum: 0,
  //   highTrackNum: 0.99,
  //   gigNumbers: [1, 2, 3],
  // },
  //   {
  //     id: '1007',
  //     writer: 'Баста',
  //     songName: 'Сансара',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1008',
  //     writer: 'Браво',
  //     songName: 'Я - то, что надо',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1009',
  //     writer: 'Блестящие',
  //     songName: 'За четыре моря',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  // {
  //   id: '1010',
  //   writer: 'Бумбокс',
  //   songName: 'Вахтерам (Кавер)',
  //   bars: ['harats', 'zarnizza', 'bullwar'],
  //   lowTrackNum: 1,
  //   highTrackNum: 1,
  //   gigNumbers: [1, 2, 3],
  // },
  //   {
  //     id: '1011',
  //     writer: 'Валерий Леонтьев',
  //     songName: 'Дельтаплан',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1012',
  //     writer: 'Валерий Меладзе',
  //     songName: 'Текила любовь',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1013',
  //     writer: 'ВИА Веселые ребята',
  //     songName: 'Люди встречаются',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1014',
  //     writer: 'Владимир Кузьмин',
  //     songName: 'Эй красотка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  // {
  //   id: '1015',
  //   writer: 'Город 312',
  //   songName: 'Останусь',
  //   bars: ['harats', 'zarnizza', 'bullwar'],
  //   lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //   gigNumbers: [1, 2, 3],
  // },
  //   {
  //     id: '1016',
  //     writer: 'Гости из будущего',
  //     songName: 'Беги от меня',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   // {
  //   //   id: '1017',
  //   //   writer: 'Даня Милохин Мумий Тролль',
  //   //   songName: 'Башня',
  //   //   bars: ['harats', 'zarnizza', 'bullwar'],
  //   //   lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //   //   gigNumbers: [1, 2, 3],
  //   // },
  //   {
  //     id: '1018',
  //     writer: 'Демо',
  //     songName: 'Солнышко',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1019',
  //     writer: 'Дима Билан',
  //     songName: 'Молния',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1020',
  //     writer: 'Женя Белоусов',
  //     songName: 'Деченка-девченочка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1021',
  //     writer: 'Жуки',
  //     songName: 'Танкист',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1022',
  //     writer: 'Жуки',
  //     songName: 'Батарейка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1023',
  //     writer: 'Звери',
  //     songName: 'Танцуй',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1024',
  //     writer: 'Звери',
  //     songName: 'Районы-кварталы',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1025',
  //     writer: 'Земляне',
  //     songName: 'Трава у дома',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1026',
  //     writer: 'Земфира',
  //     songName: 'Почему',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1027',
  //     writer: 'Иван Дорн',
  //     songName: 'Стыцемен (Кавер)',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1028',
  //     writer: 'Иванушки International',
  //     songName: 'Тополиный пух',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1029',
  //     writer: 'Ирина Аллегрова',
  //     songName: 'Привет Андрей',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1030',
  //     writer: 'Ирина Аллегрова',
  //     songName: 'Угонщица',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1031',
  //     writer: 'Ленинград',
  //     songName: 'Экспонат (Лабутены)',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1032',
  //     writer: 'Ленинград',
  //     songName: 'Рыба',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1033',
  //     writer: 'Ленинград',
  //     songName: 'WWW',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1034',
  //     writer: 'Леприконсы',
  //     songName: 'Хали-гали, паратрупер',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1035',
  //     writer: 'Лолита',
  //     songName: 'На Титанике',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1036',
  //     writer: 'Люся Чеботина',
  //     songName: 'Солнце Монако',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1037',
  //     writer: 'Ляпис Трубецкой',
  //     songName: 'Ау',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1038',
  //     writer: 'Макс Барских',
  //     songName: 'Туманы',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1039',
  //     writer: 'Маша и медведи',
  //     songName: 'Любочка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1040',
  //     writer: 'Машина Времени',
  //     songName: 'Поворот',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1041',
  //     writer: 'Мираж',
  //     songName: 'Музыка нас связала',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1042',
  //     writer: 'Михей и Джуманджи',
  //     songName: 'Сука Любовь',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1043',
  //     writer: 'Мот & Zivert',
  //     songName: 'Паруса',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1044',
  //     writer: 'Моя Мишель (Гости из будущего)',
  //     songName: 'Зима в сердце',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1045',
  //     writer: 'Моя Мишель (Ветлицкая)',
  //     songName: 'Посмотри в глаза',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1046',
  //     writer: 'Мумий Тролль',
  //     songName: 'Медведица',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1047',
  //     writer: 'На-На',
  //     songName: 'Фаина',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1048',
  //     writer: 'Отпетые мошенники',
  //     songName: 'Люби меня люби',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1049',
  //     writer: 'Полина Гагрина',
  //     songName: 'Кукушка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1050',
  //     writer: 'Полина Гагрина',
  //     songName: 'Спектакль окончен',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1051',
  //     writer: 'Руки Вверх!',
  //     songName: '18 мне уже',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1052',
  //     writer: 'Руки Вверх!',
  //     songName: 'Алешка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1053',
  //     writer: 'Руки Вверх!',
  //     songName: 'Крошка моя',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1054',
  //     writer: 'Руки Вверх!/Cream Soda',
  //     songName: 'Он тебя целует/плачу на техно',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1055',
  //     writer: 'Света Светикова',
  //     songName: 'Гадалка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1056',
  //     writer: 'Синяя птица',
  //     songName: 'Клён',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1057',
  //     writer: 'София Ротару',
  //     songName: 'Хуторянка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1058',
  //     writer: 'Сплин',
  //     songName: 'Орбит без сахара',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1059',
  //     writer: 'Тату',
  //     songName: 'Я сошла с ума',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1060',
  //     writer: 'Хабиб',
  //     songName: 'Ягода малинка',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1061',
  //     writer: 'Чичерина',
  //     songName: 'Ту-лу-ла',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1062',
  //     writer: 'Чичерина',
  //     songName: 'Жара',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1063',
  //     writer: 'Шура',
  //     songName: 'Ты не верь слезам',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1064',
  //     writer: 'Юрий Антонов',
  //     songName: 'Летящей походкой',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1065',
  //     writer: 'Юрий Антонов',
  //     songName: 'Мечта сбывается',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1066',
  //     writer: 'Anna Asti',
  //     songName: 'По барам',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1067',
  //     writer: 'Artik & Asti',
  //     songName: 'Грустный дэнс',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1068',
  //     writer: 'Artik & Asti',
  //     songName: 'Девочка танцуй',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1069',
  //     writer: 'Dabro',
  //     songName: 'На часах ноль-ноль',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1070',
  //     writer: 'Dabro',
  //     songName: 'Юность',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1071',
  //     writer: 'LOBODA',
  //     songName: 'SuperSTAR',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1072',
  //     writer: 'LOBODA',
  //     songName: 'Твои глаза',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1073',
  //     writer: 'REFLEX',
  //     songName: 'Non Stop',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1074',
  //     writer: 'SEREBRO',
  //     songName: 'Между нами любовь',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1075',
  //     writer: 'Total',
  //     songName: 'Бьет по глазам',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1076',
  //     writer: 'Zdob si Zdub',
  //     songName: 'Видели ночь',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1077',
  //     writer: 'Zivert',
  //     songName: 'По барабану',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1078',
  //     writer: 'Zivert',
  //     songName: 'Beverly Hills',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1079',
  //     writer: 'Zivert',
  //     songName: 'Life',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1080',
  //     writer: 'ABBA',
  //     songName: 'Happy New Year',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1081',
  //     writer: 'AC/DC',
  //     songName: 'Highway to Hell',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1082',
  //     writer: 'Adele',
  //     songName: 'Roling in the deep',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1083',
  //     writer: 'Alice Merton',
  //     songName: 'No Roots',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1084',
  //     writer: 'Bill Haley',
  //     songName: 'Rock Around the Clock',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1085',
  //     writer: 'Blur',
  //     songName: 'Song 2',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1086',
  //     writer: 'Bob Dylan',
  //     songName: "Knockin' On Heaven's Door",
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1087',
  //     writer: 'Bon Jovi',
  //     songName: "It's My Life",
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1088',
  //     writer: 'Boney M.',
  //     songName: 'Sunny',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1089',
  //     writer: 'Chuck Berry',
  //     songName: 'Johnny Be Good',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1090',
  //     writer: 'Duffy',
  //     songName: 'Mercy',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1091',
  //     writer: 'Eurythmics',
  //     songName: 'Sweet Dreams',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1092',
  //     writer: 'Galibri & Mavik',
  //     songName: 'Федерико Феллини',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1093',
  //     writer: 'Gayazovs Brothers',
  //     songName: 'Малиновая лада',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1094',
  //     writer: 'Gloria Gaynor',
  //     songName: 'I Will Survive',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1095',
  //     writer: 'Kelly Сlarkson',
  //     songName: 'Because Of You',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1096',
  //     writer: 'Joe Cocker',
  //     songName: 'You Can Leave Your Hat On',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1097',
  //     writer: 'Jony',
  //     songName: 'Комета',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1098',
  //     writer: 'Lady Gaga',
  //     songName: 'Always Remember Us This Way',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1099',
  //     writer: 'Linkin Park',
  //     songName: 'Numb',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1100',
  //     writer: 'Maroon 5',
  //     songName: 'Moves Like Jagger',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1101',
  //     writer: 'Maroon 5',
  //     songName: 'This love',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1102',
  //     writer: 'Michel Telo',
  //     songName: 'Ai Se Eu Te Pego! (Nossa)',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1103',
  //     writer: 'Mr Presiden't',
  //     songName: 'Coco Jambo',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1104',
  //     writer: 'Nirvana',
  //     songName: 'Smells like teen spirit',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1105',
  //     writer: 'Ray Charles',
  //     songName: 'Hit the Road Jack',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1106',
  //     writer: 'Roy Orbison',
  //     songName: 'Pretty Woman',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1107',
  //     writer: 'Shocking Blue',
  //     songName: 'Venus',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1108',
  //     writer: 'Sia',
  //     songName: 'Chandelier',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1109',
  //     writer: 'The Cranberries',
  //     songName: 'Zombie',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1110',
  //     writer: 'Tina Turner',
  //     songName: 'Simply the best',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1111',
  //     writer: 'Tones and i',
  //     songName: 'Dance Monkey',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: [1, 2, 3, 4],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1112',
  //     writer: 'Whitesnake',
  //     songName: 'Is This Love',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
  //   {
  //     id: '1113',
  //     writer: 'Whitney Houston',
  //     songName: 'I Will Always Love You',
  //     bars: ['harats', 'zarnizza', 'bullwar'],
  //     lowTrackNum: ['lastTrack'],
  // highTrackNum: 0.99,
  //     gigNumbers: [1, 2, 3],
  //   },
]

export default allTracks
