let word = document.getElementById('words');
var backing = ['阴','茎','是','好','的','是'];
var words = ['r','a','n','d','o','m']
function matrixwow() {
    for(b = 0; b < backing.slice(6); backing.slice(++b)) {
        word.innerHTML = backing;
    }
}
matrixwow();