function fetchData(id) {
    return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Data for ID: ${id}`);
    }, 1000); 
  });
}

  function fetchAllDataPromise(ids) {
    return Promise.all(ids.map((id) => fetchData(id)));
}

  const ids = [1, 2, 3];
  fetchAllDataPromise(ids)
    .then((results) => {
      console.log("Promise-based results:", results);
    })
    .catch((error) => {
      console.error("Error in promise-based solution:", error);
    });
  
  async function fetchAllDataAsync(ids) {
    const results = [];
    for (const id of ids) {
      const data = await fetchData(id);
    results.push(data);
  }
  return results;
}

  (async () => {
    try {
      const results = await fetchAllDataAsync(ids);
      console.log("Async-await results:", results);
    } catch (error) {
      console.error("Error in async-await solution:", error);
    }
  })();
  
async function fetchAllDataParallel(ids) {
    if (!ids || ids.length === 0) {
      throw new Error("IDs array is empty or undefined");
    }
    const promises = ids.map((id) => fetchData(id));
    return Promise.all(promises);
  }
  
  (async () => {
    try {
      if (ids && ids.length > 0) {
        const results = await fetchAllDataParallel(ids);
        console.log("Parallel execution results:", results);
      } else {
        console.error("Error: IDs array is invalid");
      }
    } catch (error) {
      console.error("Error in parallel execution:", error);
    }
  })();
