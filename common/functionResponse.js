//================================================================
functionResponse = function(functionName, params) {
    this.functionName = functionName;
    this.params = params;
}

functionResponse.prototype.setErr = function(err) {
    this.err = err;
}

functionResponse.prototype.setData = function(data) {
    this.data = data;
}