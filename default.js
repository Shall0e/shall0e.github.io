function discordBypass(a, b, c, d) {
    if ((a.toLowerCase()).includes('http') && (b.toLowerCase()).includes('http')) {
        if (d == 1) {
            // V2
            if (c == '') {
                showPopup('success', 'Copied to Clipboard!')
                return `[httpsː*᜵᜵*${(((a.replace('https://', '')).replace('http://', '')).replaceAll('/', '‌*᜵*‌')).replaceAll('.', '‌.‌')} ](${b} )`
            } else {
                showPopup('success', 'Copied to Clipboard!')
                return `[httpsː*᜵᜵*${(((a.replace('https://', '')).replace('http://', '')).replaceAll('/', '‌*᜵*‌')).replaceAll('.', '‌.‌')} ](<${b}> )‌[᲼](${c} )‌`
            }
        } else if (d == 2) {
            // V3
            if (c == '') {
                showPopup('success', 'Copied to Clipboard!')
                return `[httpsː*||*${(((a.replace('https://', '')).replace('http://', '')).replaceAll('/', '‌*|*‌')).replaceAll('.', '‌.‌')} ](${b} )`
            } else {
                showPopup('success', 'Copied to Clipboard!')
                return `[httpsː*||*${(((a.replace('https://', '')).replace('http://', '')).replaceAll('/', '‌*|*‌')).replaceAll('.', '‌.‌')} ](<${b}> )‌[᲼](${c} )‌`
            }
        } else if (d == 3) {
            // V4
            if (c == '') {
                showPopup('success', 'Copied to Clipboard!')
                return `[h​t‌‍​t‌‍​р‌‍​s‌‍​:୵୵​${(((a.replace('https://', '')).replace('http://', '')).replaceAll('/', '​/​')).replaceAll('.', '‌.‌')} ](${b} )`
            } else {
                showPopup('success', 'Copied to Clipboard!')
                return `[h​t‌‍​t‌‍​р‌‍​s‌‍​:୵୵​${(((a.replace('https://', '')).replace('http://', '')).replaceAll('/', '​/​')).replaceAll('.', '‌.‌')} ](${b}> )‌[᲼](${c} )‌`
            }
        } else if (d == 4) {
            // V5
            if (c == '') {
                showPopup('success', 'Copied to Clipboard!')
                return `[ht‌‍​t‌‍​р‌‍​s‌‍​︎‌‍​︎‌‍​️‌‍​:‌‍​︎‌‍​︎‌‍​️‌‍​/‌‍​/‌‍​​${(((a.replace('https://', '')).replace('http://', ''))).replaceAll('.', '‌.‌')}]( ${b} )`
            } else {
                showPopup('success', 'Copied to Clipboard!')
                return `[ht‌‍​t‌‍​р‌‍​s‌‍​︎‌‍​︎‌‍​️‌‍​:‌‍​︎‌‍​︎‌‍​️‌‍​/‌‍​/‌‍​​${(((a.replace('https://', '')).replace('http://', ''))).replaceAll('.', '‌.‌')}]( <${b}> )‌[️]( ${c} )`
            }
        }
    } else {
        showPopup('error', 'Text fields must contain URL.')
    }
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
            "y": "у"
        }
        let tempstr = ''
        for (let char of str) {
            if (char in v1bypass) {
                tempstr = tempstr + (v1bypass[char])[Math.floor(Math.random() * v1bypass[char].length)] + "‌‍​"
            } else {
                tempstr = tempstr + char + '️︎'
            }
        }
        showPopup('success', 'Copied to Clipboard!')
        return tempstr

    } else {
        showPopup('error', 'Must include text.')
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

const homeButton = document.querySelector('.home-button');
homeButton.addEventListener('mouseenter', function () {
    this.textContent = 'Home';
});
homeButton.addEventListener('mouseleave', function () {
    this.textContent = '🏠';
});
