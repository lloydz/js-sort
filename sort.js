/*!
 * js-sort
 * 
 * lloydz
 * https://github.com/lloydz/js-sort.git
 * Date: 2016-10-31
 */
(function() {
    window.jsSort = {
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

        selection: function(arr) {
            console.log('selection');
        }
    }
}());
