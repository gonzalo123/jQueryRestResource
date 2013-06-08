var Resource = (function (jQuery) {
    function Resource(url) {
        this.url = url;
    }

    Resource.prototype.query = function (parameters) {
        return jQuery.getJSON(this.url, parameters || {});
    };

    Resource.prototype.get = function (id, parameters) {
        return jQuery.getJSON(this.url + '/' + id, parameters || {});
    };

    Resource.prototype.remove = function (id, parameters) {
        return jQuery.ajax({
            url:this.url + '/' + id,
            xhrFields:JSON.stringify(parameters || {}),
            type:'DELETE',
            dataType:'json'
        });
    };

    Resource.prototype.update = function (id, parameters) {
        return jQuery.post(this.url + '/' + id, JSON.stringify(parameters || {}), 'json');
    };

    Resource.prototype.create = function (parameters) {
        return jQuery.post(this.url, JSON.stringify(parameters || {}), 'json');
    };

    return Resource;
})(jQuery);