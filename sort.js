/* js-sort
 * javascript实现各种排序算法
 * 
 * lloydz
 * https://github.com/lloydz/js-sort.git
 * Date: 2016-10-31
 */
(function() {
    window.jsSort = {
        // 冒泡排序
        bubble: function(arr) {
            if (!Array.isArray(arr)) {
                return arr;
            }

            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i - 1; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                }
            }

            return arr;
        },

        // 选择排序
        selection: function(arr) {
            if (!Array.isArray(arr)) {
                return arr;
            }

            var length = arr.length;

            for (let i = 0; i < length; i++) {
                let min = arr[i],
                    minIndex = i;

                for (let j = i; j < length - 1; j++) {
                    if (arr[j] < min) {
                        min = arr[j];
                        minIndex = j;
                    }
                }

                if (minIndex != i) {
                    let tmp = arr[i];
                    arr[i] = min;
                    arr[minIndex] = tmp;
                }
            }

            return arr;
        },

        // 快速排序
        quick: function(arr, left, right) {
            if (!Array.isArray(arr)) {
                return arr;
            }

            var length = arr.length;

            if (length == 1) {
                return arr;
            }

            // 左右哨兵
            left = left || 0;
            right = right || length - 1;

            // 基准下标和值
            var baseIndex = left;
            var base = arr[baseIndex];

            while (left < right) {
                if (arr[right] < base) {
                    if (arr[left] > base) {
                        let tmp = arr[left];
                        arr[left] = arr[right];
                        arr[right] = tmp;
                    } else {
                        left++;
                    }
                } else {
                    right--;
                }
            }

            arr[baseIndex] = arr[left];
            arr[left] = base;

            this.quick(arr, 0, left - 1);
            this.quick(arr, left + 1, right);

            return arr;
        }
    }
}());
