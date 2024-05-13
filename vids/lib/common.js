window.base={
    
    g_restUrl:'https://domo.io/wap/v1/', // 生产环境


    setCookie:function(c_name,value){
        var expiredays = new Date().getTime()+7*24*60*60*1000;  //令牌过期时间，毫秒 （7天）
        var exdate=new Date();
        exdate.setDate(exdate.getDate()+expiredays);
        document.cookie=c_name+ "=" +(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
    },

    getCookie:function(c_name){
        if (document.cookie.length>0) {
            c_start=document.cookie.indexOf(c_name + "=");
            if (c_start!=-1) {
                c_start=c_start + c_name.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;

                return unescape(document.cookie.substring(c_start,c_end));
            }
        }
        return "";
    },



    /**
     * 过期时间比较
     * return str
     */
    compare1:function(date1){
        var date1 = date1.replace(/-/g,'/');
        var oDate1 = new Date(date1);
        var date2 = new Date().toLocaleDateString();
        var oDate2 = new Date(date2);

        if(oDate1.getTime() > oDate2.getTime()){
            var overTime = ( ( oDate1.getTime() - oDate2.getTime() ) / 86400000) ;
            return '还有'+overTime+'天到期';
        } else if (oDate1.getTime() < oDate2.getTime()){
            return '<a href="vip.html">开通VIP</a>';
        } else {
            return '今天到期';
        }
    },

};

function checkLogin(phone, vcode){
    if(phone !== '07712345678') return false;
    if(vcode !== '****') return false;
    return true;
}
