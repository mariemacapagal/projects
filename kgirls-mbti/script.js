const colors = {
    botticelli: "#c4e0e0", //esfj, isfj, estj, istj 
    spectra: "#2f5859",
    givry: "#f6ebbb", //istp, isfp, estp, esfp
    raw_umber: "#685a11",
    moon_mist: "#ced6c5", //enfp, enfj, infp, infj
    green_kelp: "#2f3d22",
    pale_slate: "#cec2c8", //intj, intp, entj, entp
    emperor: "#524c4f"
}
const main_types = Object.keys(colors)

function generateListItems(artist) {
    let items = "";
    for (let i = 0; i < artist.length; i++) {
        items += `
        <div class="card ${artist[i][1]} animate__animated animate__zoomIn animate__faster	600ms">
            <img src="${artist[i][3]}">
            <div class="info">
                <span class="mbti ${artist[i][1]}">
                ${artist[i][1]}
                </span>
                <h3 class="name">${artist[i][0]}</h3>
                <small class="group">${artist[i][2]}</small>
            </div>
        </div>
        `;
    }
    return items;
}

document.querySelector("main").innerHTML = `
<div class="container">${generateListItems(artists)}</div>
`;
