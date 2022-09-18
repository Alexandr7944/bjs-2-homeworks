function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...arr) {
    let hash = arr.join(',');
    let objectInCache = cache.find(item => item.hash === hash);

    if(objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...arr);
    cache.unshift({hash, result});

    if(cache.length > 5){
      cache.pop();
    }

    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper
}

function debounceDecoratorNew(func) {
  let timeoutId = false;
  function wrapper(...args) {
    wrapper.allCount++;
    if(timeoutId == false) {
      wrapper.count++;
      timeoutId = null;
      console.log('Результат первичный');
      return func(...args)
    }

    if(timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      wrapper.count++;
      console.log('Результат после таймаута');
      return func(...args);
    }, 2000)
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper
}