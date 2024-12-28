function fetchData(id, signal) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve(`Дані для ID: ${id}`);
    }, 1000);

    signal.addEventListener("abort", () => {
      clearTimeout(timeout);
      reject(new Error(`Завантаження перервано для ID: ${id}`));
    });
  });
}

function fetchAllDataPromise(ids, controller) {
  const promises = ids.map((id) => fetchData(id, controller.signal));
  return Promise.all(promises);
}

const ids = [1, 2, 3];
const controller = new AbortController();

fetchAllDataPromise(ids, controller)
  .then((results) => {
    console.log("Результати на основі Promise:", results);
  })
  .catch((error) => {
    console.error("Помилка у рішенні на основі Promise:", error.message);
  });

setTimeout(() => {
  controller.abort();
}, 500);

async function fetchAllDataAsync(ids, controller) {
  const results = [];
  for (const id of ids) {
    try {
      const data = await fetchData(id, controller.signal);
      results.push(data);
    } catch (error) {
      console.error(`Помилка під час завантаження даних для ID: ${id}`, error);
    }
    }
  }
  return results;
}

(async () => {
  try {
    const controllerAsync = new AbortController();
    const results = await fetchAllDataAsync(ids, controllerAsync);
    console.log("Результати async-await:", results);
  } catch (error) {
    console.error("Помилка у рішенні async-await:", error.message);
  }
})();

async function fetchAllDataParallel(ids, controller) {
  if (!ids || ids.length === 0) {
  throw new Error("Масив ID порожній або не визначений");
}
    console.error("Масив ID порожній");
  }
  const promises = ids.map((id) => fetchData(id, controller.signal));
  return Promise.all(promises);
}

(async () => {
  try {
    const controllerParallel = new AbortController();
    const results = await fetchAllDataParallel(ids, controllerParallel);
    console.log("Результати паралельного виконання:", results);

    controllerParallel.abort();
  } catch (error) {
    console.error("Помилка у паралельному виконанні:", error.message);
  }
})();

