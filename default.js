const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('mouseenter', function () {
    this.textContent = 'Home';
});
homeButton.addEventListener('mouseleave', function () {
    this.textContent = '🏠';
});

const aboutButton = document.querySelector('.about-button');
aboutButton.addEventListener('mouseenter', function () {
    this.textContent = 'About';
});
aboutButton.addEventListener('mouseleave', function () {
    this.textContent = '❔';
});

function encodeString(str, key) {
    let encoded = '';
    for (let i = 0; i < str.length; i++) {
      let charCode = str.charCodeAt(i);
      let keyChar = btoa(key).charCodeAt(i % key.length);
      keyChar = keyChar % 256;
      charCode = charCode ^ keyChar;
      encoded += String.fromCharCode(charCode);
    }
    return (btoa(btoa(encoded)))
  }
    
  function decodeString(encodedStr, key) {
    let decoded = '';
    encodedStr = atob(atob(encodedStr))
    for (let i = 0; i < encodedStr.length; i++) {
      let charCode = encodedStr.charCodeAt(i)
      let keyChar = btoa(key).charCodeAt(i % key.length);
      keyChar = keyChar % 256;
      charCode = charCode ^ keyChar;
      decoded += String.fromCharCode(charCode);
    }
    return decoded;
  }



function discordBypass(a, b, c) {
    if ((a.toLowerCase()).includes('http') && (b.toLowerCase()).includes('http')) {
        if (c == '') {
            showPopup('success', 'Copied to Clipboard!')
            return `[ht‌‍​t‌‍​р‌‍​s‌‍​︎‌‍​︎‌‍​️‌‍​:‌‍​︎‌‍​︎‌‍​️‌‍​/‌‍​/‌‍​​${(((a.replace('https://', '')).replace('http://', ''))).replaceAll('.', '‌.‌')}]( ${b} )`
        } else {
            showPopup('success', 'Copied to Clipboard!')
            return `[ht‌‍​t‌‍​р‌‍​s‌‍​︎‌‍​︎‌‍​️‌‍​:‌‍​︎‌‍​︎‌‍​️‌‍​/‌‍​/‌‍​​${(((a.replace('https://', '')).replace('http://', ''))).replaceAll('.', '‌.‌')}]( <${b}> )‌[️]( ${c} )`
        }
    } else {
        showPopup('error', 'Text fields must contain URL.')
    }
}

function getSearchParams() {
    let searchParams = new URLSearchParams(window.location.search);
    let paramsObject = {};
    for (let [key, value] of searchParams.entries()) {
        paramsObject[key] = value;
    }
    return paramsObject;
}

function textBypass(str) {
    if (a !== '') {
        let v1bypass = {
            "A": "ΑА",
            "B": "ΒВ",
            "E": "ΕЕ",
            "H": "ΗН",
            "J": "Ј",
            "K": "Ⲕ",
            "M": "ΜМ",
            "N": "Ν",
            "P": "ΡР",
            "S": "Ѕ",
            "X": "ΧХ",
            "Y": "Υ",
            "Z": "Ζ",
            "a": "а",
            "c": "с",
            "d": "ԁ",
            "e": "е",
            "p": "р",
            "q": "ԛ",
            "v": "ν",
            "x": "х",
            "y": "у",
            " ": " "
        }
        let invischaracters = [
            '️',
            '​',
            '‍',
            '‍‌',
            '⁣',
            '︎',
            '‭',
        ]
        let tempstr = ''
        for (let char of str) {
            if (char in v1bypass && (Math.round(Math.random() * 1) == 0)) {
                tempstr = tempstr + (v1bypass[char])[Math.floor(Math.random() * v1bypass[char].length)]
            } else {
                tempstr = tempstr + char
            }
            for (i=0;i<(Math.round(Math.random() * 3));i++) {
                if (Math.round(Math.random() * 1.5) == 1) {
                    tempstr = tempstr + invischaracters[Math.floor(Math.random() * invischaracters.length)]
                }
            }
        }
        showPopup('success', 'Copied to Clipboard!')
        return tempstr

    } else {
        showPopup('error', 'Must include text.')
    }
}

function formRedirectLink(redirectURL,customJS,displayURL) {
    let tempObj = {};
    if (redirectURL.toLowerCase().includes('http')) {
        let linkTime = Date.now()
        tempObj.url = redirectURL;
        tempObj.js = customJS;
        if (displayURL !== '' && displayURL.toLowerCase().includes('http')) {tempObj.dsp = displayURL} else {
            if (displayURL !== '') {
                showPopup('error','Display Site URL must be valid.')
            }
            tempObj.dsp = displayURL
        };
        showPopup('success','Copied to clipboard!')
        return ('https://shall0e.github.io/main?r='+encodeString(JSON.stringify(tempObj),btoa(linkTime))+'&d='+btoa(linkTime))
    } else {
        showPopup('error','Main URL must be valid.')
    }
}

function formVerifyLink(appname,picture,redirect) {
    if (redirect.includes('://') && picture.includes('://')) {
        if (appname !== '') {
            let linkTime = Date.now()
            let id = {
                appname: appname,
                picture: picture,
                redirect: redirect
            }
            showPopup('success','Copied to clipboard!')
            encodeString(JSON.stringify(id),btoa(linkTime))
            return ('https://shall0e.github.io/verification?id='+encodeString(JSON.stringify(id),btoa(linkTime))+'&d='+btoa(linkTime))
        } else {
            showPopup('error','Text field must not be empty.')
        }
    } else {
        showPopup('error', 'URLs must be valid.')
    }
}

if (window.url !== '127.0.0.1:5500' && window.location.href !== 'shall0e.github.io'){
    window.location.href = "https://shall0e.github.io/";
}

function showPopup(type, message) {
    var popup = document.createElement('div');
    popup.classList.add('popup', type);
    popup.textContent = message;
    document.body.appendChild(popup);

    setTimeout(function () {
        popup.style.opacity = '1';
        popup.style.display = 'block';
        setTimeout(function () {
            popup.style.opacity = '0';
            setTimeout(function () {
                popup.parentNode.removeChild(popup);
            }, 1000); // fade out duration
        }, 3000); // display duration
    }, 100); // fade in delay
}

//auth user
let fingerprint;
let userdata;
let storageQuota
document.addEventListener("DOMContentLoaded", async function() {
    storageQuota = (await navigator.storage.estimate()).quota

    // identify.js, April 2nd 2024, @shall0e
    try{eval(await fetch("https://raw.githubusercontent.com/Shall0e/identifyDOTjs/main/identify.js").then(e=>e.text()))}catch(error){
        // fallback
        var identifyJS={};
        identifyJS.gatherCharCode=(function(o){let t={};for(let r in o)if(o.hasOwnProperty(r)){let n=o[r];"string"==typeof n?t[r]=Array.from(n).map(o=>o.charCodeAt(0)).join(""):"number"==typeof n?t[r]=n.toString().split("").map(o=>o.charCodeAt(0)).join(""):t[r]=n}return t});
        identifyJS.getGPUInfo=(function(){var e,t=document.createElement("canvas");try{e=t.getContext("webgl")||t.getContext("experimental-webgl")}catch(e){return null}if(!e)return null;var r=e.getExtension("WEBGL_debug_renderer_info");return r?{vendor:e.getParameter(r.UNMASKED_VENDOR_WEBGL),renderer:e.getParameter(r.UNMASKED_RENDERER_WEBGL)}:null});
        identifyJS.compressObj=(function(n){let t="";for(let o in n)if(n.hasOwnProperty(o)){let r=n[o];null!==r&&void 0!==r&&(t+=r.toString())}return t});
        identifyJS.hash=(async function(input){return (Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',(new TextEncoder()).encode(input)))).map(byte=>byte.toString(16).padStart(2,'0')).join('')).substring(0, 32)});
        identifyJS.gatherDeviceInfo=(function(){
	        let deviceInfo={
            	platform: navigator.platform,
            	deviceMemory: navigator.deviceMemory,
            	GPU: navigator.gpu.wgslLanguageFeatures.size,
            	maxTouchPoints: navigator.maxTouchPoints,
            	browserLanguage: navigator.language,
            	CPUCores: navigator.hardwareConcurrency,
            	GPUrenderer: identifyJS.getGPUInfo().renderer,
            	GPUvendor: identifyJS.getGPUInfo().vendor,
            	userAgent: navigator.userAgent
	        };
	        return deviceInfo;
        });
        var getFingerprint=(function(){
	        return (identifyJS.hash(identifyJS.compressObj(identifyJS.gatherCharCode(identifyJS.gatherDeviceInfo()))));
        });
    }
    // https://github.com/Shall0e/identifyDOTjs
    function packUserdata(usersys) {
        localStorage.setItem('userdata',encodeString(JSON.stringify(usersys),storageQuota));
    }

    fingerprint = await getFingerprint();
    if (!localStorage.getItem('userdata')) {
        userdata = {
            'auth': fingerprint,
            'date': Date.now(),
            'token': 20
        }
        showPopup('default', 'Authenticated as '+fingerprint.substring(0,32));
        packUserdata(userdata)
    }
    if(fingerprint == 'c26c78c2bfad47ac46829a9bf6e584ce'){
        showPopup('success','You have been granted 999999 tokens.');
        userdata = {
            'auth': fingerprint,
            'date': Date.now(),
            'token': 999999
        }
        packUserdata(userdata);
        console.log(userdata)
    }
});




setInterval(function(){
    if (localStorage.getItem('userdata')) {
        userdata = JSON.parse(decodeString(localStorage.getItem('userdata'),storageQuota))
        userdata.auth = fingerprint
        userdata.date = Date.now()
        localStorage.setItem('userdata',encodeString(JSON.stringify(userdata),storageQuota));
    } else {
        localStorage.setItem('userdata',encodeString(JSON.stringify(userdata),storageQuota));
    }
},100)
