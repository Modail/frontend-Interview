//快排
function jsQuickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array.splice(pivotIndex, 1)[0]; //从数组中取出我们的"基准"元素
  const left = [],
    right = [];
  array.forEach((item) => {
    if (item <=pivot) {
      //left 存放比 pivot 小的元素 或等于pivot的元素 
      left.push(item);
    } else {
      //right 存放大于或等于 pivot 的元素
      right.push(item);
    }
  });
  //至此，我们将数组分成了left和right两个部分
  return jsQuickSort(left).concat(pivot, jsQuickSort(right)); //分而治之
}

//冒泡排序
function jsMpSort(array) {
  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length - 1; i++) {
    for (
      let j = 0;
      j < array.length - 1 - i;
      j++ //第二层遍历注意i个元素已经冒泡到最后，不需要再比较
    ) {
      if (array[j] > array[j + 1]) {
        array[j + 1] = array[j + 1] + array[j];
        array[j] = array[j + 1] - array[j];
        array[j + 1] = array[j + 1] - array[j];
      } //不使用中间变量交换数组中的两个数
    }
  }
  return array;
}

//堆排序
