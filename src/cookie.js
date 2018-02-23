import param from './param.js';

export default class cookie {
    constructor() {

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
        if (!document) {
            return false;
        }
        try {
            document.document.cookie = sCookie;
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
    get(sName) {
        return param.getParam(window.document.cookie, sName, "; ", "=");
    }

}