import param from './param.js';

export default class cookie {
    constructor() {

    }

    /* 
    @param sDomain 域名
    @param oWin 窗口对象
    @return {window}
    */
    findWindow(sDomain, oWin) {
        if (!oWin) {
            if (window.location.hostname.indexOf(sDomain) >= 0) {
                return window;
            }
            return arguments.callee.apply(this, [sDomain, top]);
        }
        try {
            if (oWin.location.hostname.indexOf(sDomain) >= 0) {
                return oWin;
            }
        } catch (e) {}
        for (let i = 0; i < oWin.frames.length; ++i) {
            let oFind = arguments.callee.apply(this, [sDomain, oWin.frames[i]]);
            if (oFind) {
                return oFind;
            }
        }
        return null;
    }

    /* 
	@param sName cookie名
    @param sValue cookie值
    @param nExpireSec cookie时限
	@param sDomain 域名
	@param sPath cookie的路径
    @return {window}
    */
    set(sName, sValue, nExpireSec, sDomain, sPath) {
        sPath = sPath || "/";
        let sCookie = sName + "=" + escape(sValue) + ";";

        if ((document.cookie.length + sCookie.length) >= 4096) {
            return false;
        }

        if (nExpireSec) {
            let nowDate = new Date();
            nowDate.setTime(nowDate.getTime() + parseInt(nExpireSec) * 1000);
            sCookie += "expires=" + nowDate.toUTCString() + ";";
        }
        if (sDomain) {
            sCookie += "domain=" + sDomain + ";";
        }
        if (sPath) {
            sCookie += "path=" + sPath + ";";
        }
        let oWin = this.findWindow(sDomain);
        if (!oWin) {
            return false;
        }
        try {
            oWin.document.cookie = sCookie;
        } catch (e) {
            return false;
        }
        return true;
    }

    /* 
	@param sName cookie名
    @param sDomain cookie的域名
    @return {window}
    */
    get(sName, sDomain) {
        sDomain = sDomain;
        let oWin = sDomain ? (this.findWindow(sDomain) || window) : window;
        return param.getParam(oWin.document.cookie, sName, "; ", "=");
    }

}