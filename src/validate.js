export default class validate {
    constructor() {
        this.result = {
            code: 0,
            msg: 'success'
        }
        this.map = {}
    }

    setResult(code) {
        this.result.code = code;
        this.result.msg = this.map[code];
    }

    certificateNumber(number) {
        let result = {
            code: 0,
            msg: '',
            date: null
        };

        let vcity = {
            11: "北京",
            12: "天津",
            13: "河北",
            14: "山西",
            15: "内蒙古",
            21: "辽宁",
            22: "吉林",
            23: "黑龙江",
            31: "上海",
            32: "江苏",
            33: "浙江",
            34: "安徽",
            35: "福建",
            36: "江西",
            37: "山东",
            41: "河南",
            42: "湖北",
            43: "湖南",
            44: "广东",
            45: "广西",
            46: "海南",
            50: "重庆",
            51: "四川",
            52: "贵州",
            53: "云南",
            54: "西藏",
            61: "陕西",
            62: "甘肃",
            63: "青海",
            64: "宁夏",
            65: "新疆",
            71: "台湾",
            81: "香港",
            82: "澳门",
            91: "国外"
        };

        this.map = {
            '-1': '证件号不能为空',
            '-2': '身份证号码只能是15位或者18位，15位只能是数字，18位只能是数字或者大写字母X',
            '-3': '前两位号码省份校验出错，请输入正确的身份证号码',
            '-4': '身份证中的出生日期不正确，请重新输入',
            '-5': '身份证校验位不正确，请重新输入'
        };

        if (number == '') {
            this.setResult(-1);
            return this.result;
        }

        if (!/(^\d{15}$)|(^\d{17}(\d|X)$)/.test(number)) {
            this.setResult(-2);
            return this.result;
        }

        if (!vcity[number.toString().substring(0, 2)]) {
            this.setResult(-3);
            return this.result;
        }

        return this.result;
    }

    birthDay(str) {

        this.map = {
            '-1': '出生日期不能为空',
            '-2': '请输入有效的出生日期',
            '-3': '出生日期超出范围'
        }

        if (str == '') {
            this.setResult(-1);
            return this.result;
        }

        if (/^\d{4}(-|\/)\d{2}(-|\/)\d{2}$/gi.test(str) == false) {
            this.setResult(-2);
            return this.result;
        }

        let dateArr = str.match(/^(\d{4})(-|\/)(\d{2})(-|\/)(\d{2})$/);
        let year = parseInt(dateArr[1], 10);
        let month = parseInt(dateArr[3], 10);
        let day = parseInt(dateArr[5], 10);

        if (year < 1900 || year > 3000 || month < 1 || month > 12) {
            setResult(-3);
            return this.result;
        }

        let getDate = function(month) {
            if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
                return 31;
            } else if (month == 4 || month == 6 || month == 9 || month == 11) {
                return 30;
            } else if (month == 2) {
                return ((year % 4 == 0) && (year % 100 != 0 || year % 400 == 0)) ? 29 : 28;
            }
            return 0;
        }

        if (day < 1 || day > getDate(month)) {
            setResult(-3);
            return result;
        }


        return this.result;

    }

    passWord(str) {
        this.map = {
            '-1': '密码必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间。',
        }
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/g.test(str)) {
            setResult(-1);
            return this.result;
        }
    }
}