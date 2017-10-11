import css from '../css/dialog.css'

export default class dialog {

    constructor(option) {
        this.title = option.title || "温馨提示";
        this.button = option.button || [{
            value: '确定',
            type: 'confirm',
            callback: function() {
                return false;
            }
        }]
        this.content = option.content;
        this.html = '';
        this.init();
    }

    initTemp() {

        let _this = this;

        let buttonTemp = '';

        if (_this.button) {
            for (let i = 0; i < _this.button.length; i++) {
                if (_this.button[i].type == 'cancle') {
                    buttonTemp += '<input class="button cancleButton m_l_20" type="button" value=' + _this.button[i].value + '>'
                } else {
                    buttonTemp += '<input class="button confirmButton m_l_20" type="button" value=' + _this.button[i].value + '>'
                }
            }
        }
        let buttonDom = document.createElement('div');
        buttonDom.className = 'buttons';
        buttonDom.innerHTML = buttonTemp;
        let _tmp = document.createElement('div');
        _tmp.className = 'dialogWrapper'
        _tmp.innerHTML = '<div class="dialog"><div class="title"><span>' + this.title + '</span><i class="close">×</i></div><div class="content">' + this.content + '</div></div>'
        _tmp.querySelector('.dialog').appendChild(buttonDom);
        _this.html = _tmp
        document.body.appendChild(_tmp)
    }

    initEvent() {
        let _this = this;
        let close = _this.html.querySelector('.dialog .close')
        let button = _this.html.querySelectorAll('.dialog .button')
        close.addEventListener("click", function() {
            _this.destrory();
        })
        for (let i = 0; i < button.length; i++) {
            button[i].addEventListener("click", function() {
                let flag = _this.button[i].callback && _this.button[i].callback();
                if (!flag) {
                    _this.destrory();
                }
            })
        }

    }

    init() {
        this.initTemp();
        this.initEvent();
    }

    destrory() {
        this.html.parentNode.removeChild(this.html);
    }

}