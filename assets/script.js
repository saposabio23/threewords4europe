/////////// IPHONE HEIGHT ///////////

function mobileWindow() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log("VH on mobiles", vh);
}

window.addEventListener("resize", mobileWindow, false);
window.addEventListener("orientationchange", mobileWindow, false);


/////////// INTRO ///////////

var $logo = document.querySelector('#logo-top');

var $start = document.querySelector('#start');
var $go = document.querySelector('#go');
var $texto = document.querySelector('#texto');
var $intro = document.querySelector('.intro');
var $content = document.querySelector('.content');
var $index = document.querySelector('.index');
var $box = document.querySelector('.box');

function onStart() {
    $index.classList.toggle("opa");
    $content.classList.toggle("opa");
    $texto.classList.toggle("disable");
    $start.classList.toggle("disable");
}
$start.addEventListener("click", onStart, false);

function onGo() {
    $index.classList.remove("opa");
    $content.classList.remove("opa");
    $texto.classList.remove("disable");
    $start.classList.remove("disable");
}
$go.addEventListener("click", onGo, false);


/*//////////////// DATA FETCH /////////////*/
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });


/*//////////////// DATA APPEND /////////////*/
function appendData(data) {
    var $content = document.querySelector(".content");
    var $indexContent = document.querySelector(".indexContent");
    var $updated = document.querySelector('.updated');



    for (var i = 0; i < data.translations.length; i++) {
        var translations = data.translations[i];
        console.log(translations.flag);

        /////// INDEX LIST

        var indexBlock = document.createElement("a");
        indexBlock.className = 'indexBlock';
        indexBlock.href = '#' + translations.code;

        var indexFlag = document.createElement("span");
        indexFlag.id = 'indexFlag';
        indexFlag.innerHTML = translations.flag;
        indexBlock.appendChild(indexFlag);

        var indexFlag = document.createElement("span");
        indexFlag.className = 'indexName';
        indexFlag.innerHTML = translations.country;
        indexBlock.appendChild(indexFlag);

        $indexContent.appendChild(indexBlock);

        if (translations.contributor == 'xxx') {
            indexBlock.className = 'indexBlock disable';
        };


        /////// BIG BLOCK

        var block = document.createElement("div");
        block.className = 'block';
        block.id = translations.code;

        if (translations.contributor == 'xxx') {
            block.className = 'block hideName';
        };



        /////// HEADER

        var blockName = document.createElement("div");
        blockName.className = 'block-name';

        var flag = document.createElement("span");
        flag.id = 'flag';
        flag.innerHTML = translations.flag;
        blockName.appendChild(flag);

        var country = document.createElement("span");
        country.id = 'country';
        country.innerHTML = translations.country;
        blockName.appendChild(country);

        var contributor = document.createElement("span");
        contributor.id = 'contributor';
        contributor.innerHTML = 'by ' + translations.contributor;
        blockName.appendChild(contributor);

        block.appendChild(blockName);



        /////// HELLO TRANSLATION

        var helloBlokEntry = document.createElement("div");
        helloBlokEntry.className = 'block-entry';

        var helloWord = document.createElement("span");
        helloWord.id = 'word';
        helloWord.innerHTML = 'Hello';
        helloBlokEntry.appendChild(helloWord);

        var helloTranslation = document.createElement("span");
        helloTranslation.id = 'translate';
        helloTranslation.innerHTML = translations.hello;
        helloBlokEntry.appendChild(helloTranslation);

        var helloAudio = document.createElement("span");
        helloAudio.id = translations.code + '-hello';
        helloAudio.className = 'audio';
        var helloImg = document.createElement("img");
        helloImg.src = "assets/images/volume.svg";
        helloAudio.appendChild(helloImg);
        helloBlokEntry.appendChild(helloAudio);

        block.appendChild(helloBlokEntry);



        /////// THANKS TRANSLATION

        var thanksBlokEntry = document.createElement("div");
        thanksBlokEntry.className = 'block-entry';

        var thanksWord = document.createElement("span");
        thanksWord.id = 'word';
        thanksWord.innerHTML = 'Thanks';
        thanksBlokEntry.appendChild(thanksWord);

        var thanksTranslation = document.createElement("span");
        thanksTranslation.id = 'translate';
        thanksTranslation.innerHTML = translations.thanks;
        thanksBlokEntry.appendChild(thanksTranslation);

        var thanksAudio = document.createElement("span");
        thanksAudio.id = translations.code + '-thanks';
        thanksAudio.className = 'audio';
        var thanksImg = document.createElement("img");
        thanksImg.src = "assets/images/volume.svg";
        thanksAudio.appendChild(thanksImg);
        thanksBlokEntry.appendChild(thanksAudio);

        block.appendChild(thanksBlokEntry);


        /////// CHEERS TRANSLATION

        var cheersBlokEntry = document.createElement("div");
        cheersBlokEntry.className = 'block-entry';

        var cheersWord = document.createElement("span");
        cheersWord.id = 'word';
        cheersWord.innerHTML = 'Cheers';
        cheersBlokEntry.appendChild(cheersWord);

        var cheersTranslation = document.createElement("span");
        cheersTranslation.id = 'translate';
        cheersTranslation.innerHTML = translations.cheers;
        cheersBlokEntry.appendChild(cheersTranslation);

        var cheersAudio = document.createElement("span");
        cheersAudio.id = translations.code + '-cheers';
        cheersAudio.className = 'audio';
        var cheersImg = document.createElement("img");
        cheersImg.src = "assets/images/volume.svg";
        cheersAudio.appendChild(cheersImg);
        cheersBlokEntry.appendChild(cheersAudio);

        block.appendChild(cheersBlokEntry);


        /////// APPEND ALL

        $updated.before(block)
    }

    var audioButton = document.querySelectorAll('.audio');
    for (var i = 0; i < audioButton.length; i++) {
        audioButton[i].addEventListener('click', function (e) {
            console.log(e.target.getAttribute('id'));
            var path = "../audio/";
            var name = e.target.getAttribute('id');
            var audio = new Audio(path + name + ".mp3");
            audio.play();

            e.target.classList.add("audioPlay");
            setTimeout(function () {
                e.target.classList.remove("audioPlay");
            }, 1000);
        });
    }

    /////////// INDEX ///////////

    var $list = document.querySelector('#list');
    var $flags = document.querySelector('#flags');
    var $indexName = document.querySelectorAll('.indexName');
    var $indexContent = document.querySelector('.indexContent');
    var $indexBlock = document.querySelectorAll('.indexBlock');

    function showList() {
        for (let i = 0, max = $indexName.length; i < max; i++) {
            $indexName[i].classList.remove("hideName");
            $indexContent.classList.add("indexList");
            $list.classList.add("selected");
            $flags.classList.remove("selected");
        }
        for (let i = 0, max = $indexBlock.length; i < max; i++) {
            $indexBlock[i].classList.remove("addLine");
            $indexBlock[i].classList.remove("indexBlockFlag");
        }
    }
    $list.addEventListener("click", showList, false);

    function showFlags() {
        for (let i = 0, max = $indexName.length; i < max; i++) {
            $indexName[i].classList.add("hideName");
            $indexContent.classList.remove("indexList");
            $list.classList.remove("selected");
            $flags.classList.add("selected");
        }
        for (let i = 0, max = $indexBlock.length; i < max; i++) {
            $indexBlock[i].classList.add("addLine");
            $indexBlock[i].classList.add("indexBlockFlag");
        }
    }
    $flags.addEventListener("click", showFlags, false);

}


// document.querySelectorAll("a[href*='#']").forEach(function(current) {

//     // Original JavaScript code by Chirp Internet: www.chirpinternet.eu
//     // Please acknowledge use of this code by including this header.

//     if(current.origin + current.pathname != self.location.href) {
//       return;
//     }

//     (function(anchorPoint) {
//       if(anchorPoint) {
//         current.addEventListener("click", function(e) {
//           anchorPoint.scrollIntoView({behavior: "smooth"});
//           e.preventDefault();
//         }, false);
//       }
//     })(document.querySelector(current.hash));

//   });

