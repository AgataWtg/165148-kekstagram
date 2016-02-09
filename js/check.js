function getMessage(a, b){
  if (typeof a === 'boolean'){
  return (a === true) ? 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров' : 'Переданное GIF-изображение не анимировано';
}
  else if (typeof a === 'number'){
        return 'Переданное SVG-изображение содержит ' + a + ' объектов и ' + (b * 4) + ' атрибутов';
      }


  else if (Array.isArray(b) && Array.isArray(a)){
    var square = 0;
    var arr = [];
    for(var i = 0; i < a.length; i++) {
      arr.push(a[i] * b[i]);
      square += arr[i];
    }
    return 'Общая площадь артефактов сжатия: ' + square + ' пикселей';
  }

  else if (Array.isArray(a)){
      var sum = 0;
      for(var i = 0; i < a.length; i++){
      sum += a[i];
  }
       return 'Количество красных точек во всех строчках изображения: ' + sum;
}
}
