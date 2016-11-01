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

                for (let j = i; j < length; j++) {
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

            left = (left != undefined) ? left : 0;
            right = (right != undefined) ? right : length - 1;

            if (left >= right) {
                return arr;
            }

            // 左右哨兵
            var i = left;
            var j = right;

            // 基准下标和值
            var baseIndex = i;
            var base = arr[baseIndex];

            while (i < j) {
                if (arr[j] < base) {
                    if (arr[i] > base) {
                        let tmp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = tmp;

                        j--;
                    } else {
                        i++;
                    }
                } else {
                    j--;
                }
            }

            arr[baseIndex] = arr[i];
            arr[i] = base;

            this.quick(arr, left, i - 1);
            this.quick(arr, i + 1, right);

            return arr;
        }
    }
}());
