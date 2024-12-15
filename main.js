let dropdwon = document.querySelectorAll(".country select");

function updateChanged(element) {
    let currCode = element.value;
    countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}


for (select of dropdwon) {
    for (d in currValue) {
        let option = document.createElement("option");
        option.innerHTML = d
        option.value = d
        select.append(option);

        if (select.name === "from" && option.value === "USD") {
            option.setAttribute('selected', '')
        } else if (select.name === "to" && option.value === "INR") {
            option.setAttribute('selected', '')
        }
    }

    select.addEventListener("change", (e) => {
        updateChanged(e.target);
    });
}


function exchangeRate() {
    let num = document.getElementById("num").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let finalAns = document.getElementById('finalAns')

    if (num == '') {
        alert('Enter the Amount')
    }

    let fromValue, toValue
    for (c in currValue) {
        if (from === c) {
            fromValue = currValue[c]
        } else if (to === c) {
            toValue = currValue[c]
        }
    }

    console.log(fromValue, toValue)
    if (fromValue < toValue) {
        ans = toValue * num
        finalAns.innerHTML = ans +' ' + to
    } else if (fromValue > toValue) {
        ans = num / fromValue
        finalAns.innerHTML =ans +' ' + to
    } else {
        finalAns.innerHTML = num +' ' + to
    }

    // for(d of dropdwon) {
    //     // console.log(d.value)
    //     console.log(d)
    //     for(c in currValue) {
    //         let currency = c
    //         let cRate = currValue[c]

    //         if(currency === d.value) {
    //             console.log(cRate)
    //         }
    //     }
    // }
}