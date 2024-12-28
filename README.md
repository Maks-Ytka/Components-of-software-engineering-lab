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

У цій лабораторній роботі я використав функцію fetchData, яка симулює асинхронне завантаження даних. Для обробки асинхронних операцій були реалізовані три підходи:

Проміси (Promise):
Використана функція fetchAllDataPromise, яка одночасно обробляє всі запити через Promise.all. Це дозволяє швидко отримати результати.

async/await:
Реалізована функція fetchAllDataAsync, яка обробляє запити послідовно. Це підходить для завдань, де важливий порядок виконання.

Паралельне виконання:
Функція fetchAllDataParallel дозволяє паралельно виконувати запити, що економить час у випадках, коли порядок не важливий.
# [Lab 3](https://github.com/Maks-Ytka/Components-of-software-engineering-lab/blob/main/Lab3.js)
