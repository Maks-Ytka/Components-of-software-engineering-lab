# Components-of-software-engineering-lab
1-5 lab
# [Lab 1](https://github.com/Maks-Ytka/Components-of-software-engineering-lab/blob/main/Lab%201)
У цій лабораторній роботі я використав функцію asyncFilter, яка дозволяє асинхронно фільтрувати елементи масиву. Ця функція використовує map для одночасного виклику колбеку на кожному елементі, а потім зберігає ті елементи, які задовольняють умову, визначену у колбеку. Асинхронний підхід обрано для демонстрації роботи з функціями, які можуть включати затримки або виконуватися у фоновому режимі.

Окрім цього, було додано функцію debounce, яка затримує виконання повторних викликів, якщо між ними проходить занадто короткий проміжок часу. Це зручно для оптимізації обчислень, коли функція викликається дуже часто, наприклад, під час обробки подій. Додатково забезпечується перевірка коректності аргументів, щоб уникнути помилок виконання.

Приклад 1

У цьому прикладі масив чисел фільтрується таким чином, щоб залишити тільки ті числа, які більші за 10. Для цього використовується функція greaterThan10, яка перевіряє цю умову. Після виконання результатом є новий масив, який містить лише числа, що відповідають критеію.

Приклад 2

Другий ппиклад демонструє, як використовувати функцію isEvenWithDelay для фільтрації масиву, залишаючи лише парні числа. Ця функція також додає штучну затримку в 100 мс для кожного елементу, щоб симулювати асинхронну операцію. Додатково, використання функції debounce із затримкою у 200 мс дозволяє уникати надмірної частоти викликів функції під час виконання. Якщо функція виконується частіше, ніж дозволяє затримка, вона буде викликана із заданим інтервалом, що демонструє ефективне управління частотою обчислень.
# [Lab 2](https://github.com/Maks-Ytka/Components-of-software-engineering-lab/blob/main/Lab2.js)
У цій лабораторній роботі я реалізував кілька функцій для роботи з асинхронними операціями, використовуючи підходи на основі промісів та async/await. Це було зроблено для демонстрації різних способів обробки асинхронних викликів, а також для забезпечення гнучкості в їх використанні.
Для обробки асинхронних операцій були реалізовані три підходи:

Проміси (Promise):
Використана функція fetchAllDataPromise, яка одночасно обробляє всі запити через Promise.all. Це дозволяє швидко отримати результати.

async/await:
Реалізована функція fetchAllDataAsync, яка обробляє запити послідовно. Це підходить для завдань, де важливий порядок виконання.

Паралельне виконання:
Функція fetchAllDataParallel дозволяє паралельно виконувати запити, що економить час у випадках, коли порядок не важливий.
# [Lab 3](https://github.com/Maks-Ytka/Components-of-software-engineering-lab/blob/main/Lab3.js)
У цій лабораторній роботі я реалізував асинхронну обробку даних із можливістю скасування запитів за допомогою AbortController. Основна мета — отримати дані для кількох ідентифікаторів (id) паралельно або послідовно, а також забезпечити можливість зупинки запитів.

Функція fetchData використовується для отримання даних асинхронно. Вона симулює затримку у 1 секунду і підтримує скасування запиту через AbortController. Чому так? Це дозволяє легко зупинити виконання, якщо дані більше не потрібні.

Функція fetchAllDataPromise використовує Promise.all для паралельного виконання запитів. Запити виконуються для всіх id, і результати збираються в масив. Чому так? Це простий і ефективний спосіб обробки незалежних запитів.

Функція fetchAllDataAsync виконує запити послідовно за допомогою async/await. Кожен запит додається до результатів після завершення. Чому так? Підходить для випадків, коли порядок виконання має значення.

Функція fetchAllDataParallel cхожа на fetchAllDataPromise, але включає перевірку вхідних даних на порожній масив. Чому так? Це зручно для виявлення помилок у даних до початку виконання.

У всіх функціях AbortController дозволяє скасовувати запити. Це оптимізує ресурси і звільняє програму від зайвої роботи.
# [Lab 4](https://github.com/Maks-Ytka/Components-of-software-engineering-lab/blob/main/Lab4.js)
Я реалізував задачу підрахунку слів у великому текстовому файлі за допомогою модулів fs і readline.

Чому fs і readline? fs.createReadStream дозволяє читати файл частинами, що знижує використання пам'яті. readline.createInterface забезпечує пострічне читання, дозволяючи обробляти кожен рядок файлу окремо.
Асинхронність:
Використання async/await дозволяє обробляти рядки ефективно та не блокувати виконання програми.
Реалізація:
Програма читає файл пострічно, розбиває рядки на слова за допомогою регулярного виразу, підраховує кількість слів у кожному рядку і додає до загальної кількості.
Чому так? Це рішення ефективне для роботи з великими файлами, бо економить пам’ять і дозволяє обробляти файли будь-якого розміру.
# [Lab 5](https://github.com/Maks-Ytka/Components-of-software-engineering-lab/blob/main/Lab5.js)
У цьому завданні було реалізовано клас ReactiveEntity, який дозволяє сутностям взаємодіяти одна з одною через обмін повідомленнями. Для цього використовується вбудований у Node.js механізм подій EventEmitter.
Основна функціональність:
Клас ReactiveEntity
Кожна сутність має ім'я (name), яке передається під час створення.
- Метод sendMessage(target, message) дозволяє надсилати повідомлення іншій сутності. Повідомлення реєструється у вигляді події "message", яку отримує цільова сутність.
- Метод receiveMessage(from, message) обробляє отримане повідомлення, виводячи в консоль, від кого і яке саме повідомлення було отримано.
- Метод registerMessageHandler() відповідає за прив'язку обробника подій "message" до сутності, що дозволяє їй автоматично реагувати на отримання повідомлення.
-Вивід:
У демонстраційній частині створено три сутності: Entity A Entity B Entity C
Кожна з них реєструє свій обробник подій. Після цього сутності обмінюються повідомленнями:
Entity A надсилає повідомлення до Entity B.
Entity B відповідає Entity A.
Entity C ініціює повідомлення до Entity A.
Entity A завершує діалог, надсилаючи відповідь Entity C.
Весь процес супроводжується логами в консолі, які показують, хто кому надсилає повідомлення, а також зміст повідомлень.
