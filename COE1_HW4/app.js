// question number 1

function reverseNumber(num) {
    let sign = 1;
    if (num < 0) {
        let NEGATIVE_SIGN = -1;
        sign = NEGATIVE_SIGN;
        num = num * sign;
    }
    let rev = 0;
    let ten = 10;
    while (num !== 0) {
        let rem = num % ten;
        rev = rev * ten + rem;
        num = num / ten | 0;
    }
    console.log(rev * sign);
}




// question number  2

function forEach(arr, func) {
    for (let i = 0; i < arr.length; ++i) {
        func(arr[i]);
    }
}




// question number  3

function map(arr, func) {
    let ans = [];
    forEach(arr, function (el) {
        ans.push(func(el));
    });
    return ans;
}




// question number  4

function filter(arr, func) {
    let ans = [];
    forEach(arr, function (el) {
        let flag = func(el);
        if (flag === true) {
            ans.push(el);
        }
    }
    );
    return ans;
}





// question number  5



const data = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
];

function getAdultAppleLovers(data) {
    let age = 18;
    let people = filter(data, function (el) {
        return el.age > age && el.favoriteFruit === 'apple';
    });
    let ans = map(people, function (el) {
        return el.name;
    });
    return ans;
}






// question number  6

function getKeys(obj) {
    let ans = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            ans.push(key);
        }
    }
    return ans;
}





// question number  7

function getValues(obj) {
    let values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
}


