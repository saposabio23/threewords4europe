var $list = document.querySelector('#list');
var $flags = document.querySelector('#flags');
var $indexName = document.querySelectorAll('.indexName');
var $indexContent = document.querySelector('.indexContent');
var $indexBlock = document.querySelectorAll('.indexBlock');


function showList() {
    for(let i = 0, max = $indexName.length; i < max; i++){
        $indexName[i].classList.remove("hideName");
        $indexContent.classList.add("indexList");
        $list.classList.add("selected");
        $flags.classList.remove("selected");
    }
    for(let i = 0, max = $indexBlock.length; i < max; i++){
        $indexBlock[i].classList.add("addLine");
    }
}
$list.addEventListener("click", showList, false);


function showFlags() {
    for(let i = 0, max = $indexName.length; i < max; i++){
        $indexName[i].classList.add("hideName");
        $indexContent.classList.remove("indexList");
        $list.classList.remove("selected");
        $flags.classList.add("selected");
    }
    for(let i = 0, max = $indexBlock.length; i < max; i++){
        $indexBlock[i].classList.remove("addLine");
    }
}

$flags.addEventListener("click", showFlags, false);

