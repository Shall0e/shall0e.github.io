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
        return ('https://shall0e.github.io/main?r='+strenc(JSON.stringify(tempObj),btoa(linkTime))+'&d='+btoa(linkTime))
    } else {
        showPopup('error','Main URL must be valid.')
    }
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
document.addEventListener("DOMContentLoaded", async function() {
    
    // identify.js, April 2nd 2024, @shall0e
    eval(await fetch("https://raw.githubusercontent.com/Shall0e/identifyDOTjs/main/identify.js").then(e=>e.text()))
    // https://github.com/Shall0e/identifyDOTjs

    fingerprint = await getFingerprint();
    if (!localStorage.getItem('userdata')) {
        userdata = {
            'auth': fingerprint,
            'date': Date.now(),
            'token': 20
        }
        showPopup('default', 'Authenticated as '+fingerprint.substring(0,32));
        localStorage.setItem('userdata',encodeString(JSON.stringify(userdata),navigator.storage.estimate()));
    }
});

setInterval(function(){
    if (localStorage.getItem('userdata')) {
        userdata = JSON.parse(decodeString(localStorage.getItem('userdata'),navigator.storage.estimate()))
        userdata.auth = fingerprint
        userdata.date = Date.now()
        localStorage.setItem('userdata',encodeString(JSON.stringify(userdata),navigator.storage.estimate()));
    } else {
        localStorage.setItem('userdata',encodeString(JSON.stringify(userdata),navigator.storage.estimate()));
    }
},100)