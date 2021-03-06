window.varCraft = window.varCraft || {};
window.varCraft = window.varCraft || {};
window.varCraft.xhr = window.varCraft.xhr || {};

window.varCraft.xhr = (function(namespace){
    return {
        getAsync: function(url, callback){
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.onload = callback;

            xhr.open('GET', url, true);
            xhr.send();
        },
        getSync: function(url, callback){
            var xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.onload = callback;

            xhr.open('GET', url, false);
            xhr.send();
        }
    };

})(window.varCraft);