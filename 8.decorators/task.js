function cachingDecoratorNew(func) {
  const cache = [];

  function wrapper(...arr) {
    let hash = arr.join(',');
    let objectInCache = cache.find((item) => {
      if(item.hash === hash) {
        return item;
      }
    })

    if(objectInCache) {
      console.log("Из кэша: " + objectInCache.result);
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...arr);
    cache.unshift({
      hash: hash,
      result: result
    });

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
    let result = func(...args);
    if(timeoutId == false) {
      timeoutId = null;
      console.log('Результат первичный ' + result);
      return result
    } else {
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        console.log('Результат после таймаута ' + result);
        return result;
      }, 2000)
    }
  }
  return wrapper
}

function debounceDecorator2(func) {
  let timeoutId = false;
  function wrapper(...args) {
    wrapper.count.allCount++;
    let result = func(...args);
    if(timeoutId == false) {
      timeoutId = null;
      console.log('Результат первичный ' + result);
      wrapper.count.resultCount++;
      return result
    } else {
      if(timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        timeoutId = null;
        console.log('Результат после таймаута ' + result);
        wrapper.count.resultCount++;
        return result;
      }, 2000)
    }
  }
  wrapper.count = {
    allCount: 0,
    resultCount: 0,
  };

  return wrapper
}