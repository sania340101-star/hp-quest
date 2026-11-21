// Quest setup. Plain JSON after "window.QUEST =", gen_audio.py reads it too: after editing texts run
//   py -3 gen_audio.py
// Each step is one task sheet: its name, the answer written on it (= the next sheet's name, several spellings allowed;
// "parts" = a sheet with several answers on the parents' answer list, one field each, all must be right),
// then the riddle of the place where the next sheet is hidden. "start" is the riddle for the first sheet;
// the last step's place is where the gift is.
// Hiding places: 1 pillow, 2 sock drawer, 3 fridge, 4 bathroom mirror, 5 pot, 6 bookshelf, 7 flower pot,
// 8 washing machine, 9 door mat, 10 hallway closet, gift: suitcase.
// "prologue" = the comic before the oath, one picture (prologue/*.jpg) and one narrated text per page;
// "final_img" is shown above the final text. "fx" / "final_fx" = effects on the picture: glow, fog (x, y, w, h),
// flame, sparkle, firework (x, y, spread, count), snow (count); x/y in % of the picture.
window.QUEST = {
  "oath": ["торжественно клянусь что замышляю только шалость", "клянусь что замышляю только шалость"],
  "prologue": [
    {"img": "prologue/p1.jpg", "text": "Канун Нового года в Хогвартсе. В Большом зале сияют ёлки, с потолка падает волшебный снег, а под главной ёлкой лежит подарок школе — три Дара Смерти.", "fx": [{"type": "glow", "x": 70, "y": 48, "w": 40, "h": 70, "color": "#ffd36e", "opacity": 0.35}, {"type": "sparkle", "x": 70, "y": 50, "spread": 12, "count": 22, "color": "#ffd36e"}, {"type": "flame", "x": 11, "y": 55, "spread": 1.5, "count": 3, "color": "#ffb040"}, {"type": "flame", "x": 25, "y": 62, "spread": 1.5, "count": 3, "color": "#ffb040"}, {"type": "flame", "x": 92, "y": 59, "spread": 1.5, "count": 3, "color": "#ffb040"}, {"type": "snow", "count": 40}]},
    {"img": "prologue/p2.jpg", "text": "Ровно в полночь, когда все смотрели на салют над озером, из темноты вылетел дементор. Он схватил Дары Смерти и унёс их в ночь.", "fx": [{"type": "firework", "x": 19, "y": 13, "spread": 9, "count": 18, "color": ["#ff9de0", "#fff3c0"]}, {"type": "firework", "x": 46, "y": 18, "spread": 10, "count": 22, "color": ["#ffe08a", "#ffffff"]}, {"type": "firework", "x": 66, "y": 10, "spread": 8, "count": 16, "color": ["#ff9de0", "#c8b0ff"]}, {"type": "fog", "x": 72, "y": 62, "w": 40, "h": 55, "color": "#05060c"}, {"type": "fog", "x": 35, "y": 82, "w": 70, "h": 25, "color": "#9fb6d8"}, {"type": "snow", "count": 25}]},
    {"img": "prologue/p3.jpg", "text": "Дементор спрятал Дары в мире магглов — в этом самом доме. Без них новогоднее волшебство гаснет: огни на ёлках тускнеют, а снег перестаёт падать.", "fx": [{"type": "glow", "x": 22, "y": 52, "w": 28, "h": 60, "color": "#ffd36e", "opacity": 0.3}, {"type": "sparkle", "x": 22, "y": 52, "spread": 8, "count": 10, "color": "#ffd36e"}, {"type": "glow", "x": 88, "y": 49, "w": 18, "h": 22, "color": "#ffc070", "opacity": 0.4}, {"type": "glow", "x": 37, "y": 39, "w": 6, "h": 6, "color": "#fff2a0", "opacity": 0.7}, {"type": "fog", "x": 38, "y": 60, "w": 35, "h": 70, "color": "#05060c"}, {"type": "snow", "count": 20}]},
    {"img": "prologue/p4.jpg", "text": "Дамблдор отправил сову с письмом и Картой Мародёров. Только великая волшебница Кэтти может найти Дары до вечера и вернуть Новый год.", "fx": [{"type": "glow", "x": 70, "y": 52, "w": 30, "h": 35, "color": "#ffc060", "opacity": 0.45}, {"type": "flame", "x": 70, "y": 53, "spread": 1, "count": 4, "color": "#ffb040"}, {"type": "flame", "x": 7, "y": 25, "spread": 1, "count": 3, "color": "#ffb040"}, {"type": "sparkle", "x": 40, "y": 85, "spread": 14, "count": 10, "color": "#fff3c0"}, {"type": "snow", "count": 30}]}
  ],
  "final_img": "prologue/p5.jpg",
  "intro": "Дары Смерти украдены! Только Карта Мародёров знает, где их искать. Произнеси клятву, и карта откроется.",
  "start": "Первый след ведёт туда,\nгде каждую ночь ты отправляешься в страну снов.\nЗагляни под то, на чём лежит твоя голова.",
  "steps": [
    {"name": "Дырявый котёл", "answer": ["Косой переулок"], "place": "Добби стал свободным, когда получил меня в подарок.\nИщи там, где живут мои братья — по двое, парами.", "hint": "Ящик с носками"},
    {"name": "Косой переулок", "answer": ["Хогвартс-экспресс", "Хогвардс экспресс"], "parts": [{"label": "Ряд 1", "answer": ["Сова Букля"]}, {"label": "Ряды 2-3", "answer": ["Волшебная палочка"]}, {"label": "Ряды 4-5", "answer": ["Ежедневный пророк"]}], "place": "Здесь вечная зима, как в Азкабане,\nно вместо дементоров — молоко и сыр.\nИщи на дверце.", "hint": "Холодильник"},
    {"name": "Хогвартс-экспресс", "answer": ["Хогвартс", "Хогвардс", "47"], "place": "Зеркало Еиналеж показывает самое заветное желание.\nА это зеркало каждое утро видит, как ты чистишь зубы.", "hint": "Зеркало в ванной"},
    {"name": "Хогвартс", "answer": ["Комната", "Выручай-комната"], "parts": [{"label": "Орёл", "answer": ["Когтевран"]}, {"label": "Змея", "answer": ["Слизерин"]}, {"label": "Барсук", "answer": ["Пуффендуй"]}, {"label": "Лев", "answer": ["Гриффиндор"]}], "place": "Снейп варил бы в нём зелья,\nа дома в нём варят суп.", "hint": "Кастрюля на кухне"},
    {"name": "Комната", "answer": ["Карта", "Карта Мародёров"], "place": "Среди многих историй спряталась одна —\nпро мальчика со шрамом в виде молнии.", "hint": "Книжная полка, книга про Гарри Поттера"},
    {"name": "Карта", "answer": ["Запретная секция"], "place": "Профессор Стебль поливала бы меня на уроке травологии.\nЗагляни под мой горшок.", "hint": "Цветок в горшке"},
    {"name": "Запретная секция", "answer": ["Запретный лес"], "place": "За круглым окном крутится вихрь,\nкак в каминной сети, только вместо пепла — пена.", "hint": "Стиральная машина"},
    {"name": "Запретный лес", "answer": ["Лютный переулок"], "place": "Каждый, кто входит в этот замок,\nвытирает об меня ноги.", "hint": "Коврик у входной двери"},
    {"name": "Лютный переулок", "answer": ["Нападение", "Алохомора"], "place": "Десять лет Гарри жил в чулане под лестницей.\nНайди в доме свой чулан.", "hint": "Шкаф или кладовка в прихожей"},
    {"name": "Нападение", "answer": ["Экспекто Патронум", "Экспекто Патронус", "Expecto Patronum"], "place": "Дары Смерти сложены туда,\nс чем каждый первокурсник едет в Хогвартс с вокзала Кингс-Кросс.", "hint": "Чемодан"}
  ],
  "final": "Шалость удалась! Все десять заданий пройдены, Дары Смерти снова в надёжных руках, и новогодняя ёлка Хогвартса сияет ярче прежнего. С Новым годом, Кэтти!",
  "final_fx": [{"type": "glow", "x": 75, "y": 8, "w": 14, "h": 18, "color": "#fff2a0", "opacity": 0.7}, {"type": "glow", "x": 74, "y": 55, "w": 42, "h": 85, "color": "#ffd36e", "opacity": 0.35}, {"type": "sparkle", "x": 74, "y": 55, "spread": 14, "count": 26, "color": "#ffd36e"}, {"type": "sparkle", "x": 25, "y": 40, "spread": 18, "count": 14, "color": "#fff3c0"}, {"type": "snow", "count": 25}]
};
