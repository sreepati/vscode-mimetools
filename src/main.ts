export var Mime = {

    _k: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    e64: function (_v: any) { // base 64 encode
        let _r: string = '';
        let _c1, _c2, _c3, _e1, _e2, _e3, _e4;
        let i = 0, _l = _v.length;

        while (i < _l) {

            _c1 = _v.charCodeAt(i++);
            _c2 = _v.charCodeAt(i++);
            _c3 = _v.charCodeAt(i++);

            _e1 = _c1 >> 2;
            _e2 = ((_c1 & 3) << 4) | (_c2 >> 4);
            _e3 = ((_c2 & 15) << 2) | (_c3 >> 6);
            _e4 = _c3 & 63;

            if (isNaN(_c2)) {
                _e3 = _e4 = 64;
            } else if (isNaN(_c3)) {
                _e4 = 64;
            }

            _r = _r +
                this._k.charAt(_e1) + this._k.charAt(_e2) +
                this._k.charAt(_e3) + this._k.charAt(_e4);
        }

        return _r;
    },

    d64: function (_v: any) { // base 64 decode
        let _r:string = "";
        let _c1, _c2, _c3, _e1, _e2, _e3, _e4;
        let i = 0, _l = _v.length;

        _v = _v.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < _l) {

            _e1 = this._k.indexOf(_v.charAt(i++));
            _e2 = this._k.indexOf(_v.charAt(i++));
            _e3 = this._k.indexOf(_v.charAt(i++));
            _e4 = this._k.indexOf(_v.charAt(i++));

            _c1 = (_e1 << 2) | (_e2 >> 4);
            _c2 = ((_e2 & 15) << 4) | (_e3 >> 2);
            _c3 = ((_e3 & 3) << 6) | _e4;

            _r = _r + String.fromCharCode(_c1);

            if (_e3 !== 64) {
                _r = _r + String.fromCharCode(_c2);
            }
            if (_e4 !== 64) {
                _r = _r + String.fromCharCode(_c3);
            }

        }

        return _r;

    },

    utf8e: function (string: any) { // utf8 encode
        string = string.replace(/\r\n/g, "\n");
        let _r = "";

        for (let n = 0; n < string.length; n++) {

            let c = string.charCodeAt(n);

            if (c < 128) {
                _r += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                _r += String.fromCharCode((c >> 6) | 192);
                _r += String.fromCharCode((c & 63) | 128);
            }
            else {
                _r += String.fromCharCode((c >> 12) | 224);
                _r += String.fromCharCode(((c >> 6) & 63) | 128);
                _r += String.fromCharCode((c & 63) | 128);
            }

        }

        return _r;
    },

    utf8d: function (utftext: any) { // utf8 decode
        let _r = "", i = 0, c = 0, c2 = 0, c3 = 0;

        while (i < utftext.length) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                _r += String.fromCharCode(c);
                i++;
            }
            else if ((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i + 1);
                _r += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i + 1);
                c3 = utftext.charCodeAt(i + 2);
                _r += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return _r;
    },

    eurl: function (_v: any) { // url encode
        return encodeURI(_v);
    },

    durl: function (_v: any) { // url decode
        return decodeURI(_v);
    },

    eurlf: function (_v: any) { // full url encode
        return encodeURIComponent(_v);
    },

    lcase: function (_v: any) { // lower case
        return _v.toLowerCase();
    },

    ucase: function (_v: any) { // uppercase
        return _v.toUpperCase();
    },

    ccase: function (_v: any) { // capitalize case
        return _v.split(' ').map( (w:string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    },

    s2c: function (_v: any) {   // snake to camel case
        return _v.replace(/(\_\w)/g, function (m: any) { return m[1].toUpperCase(); });
    },

    random: function (_v: any) {
        // return window.crypto.getRandomValues(array);
        return _v;
    }

};
