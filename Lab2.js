function fetchData(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Data for ID: ${id}`);
      }, 10); 
    });
  }

  function fetchAllDataPromise(ids) {
    return Promise.all(ids.map((id) => fetchData(id))).catch(() => {});
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
      const data = fetchData(id);
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
    const promises = ids.map((id) => fetchData(id));
    return Promise.all(promises);
  }
  
  (async () => {
    try {
      const results = await fetchAllDataParallel(ids);
      console.log("Parallel execution results:", results);
    } catch (error) {
      console.error("Error in parallel execution:", error);
    }
  })();
