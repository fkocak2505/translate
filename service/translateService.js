const AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-1' });
AWS.config.apiVersions = { s3: '2006-03-01' };

var translate = new AWS.Translate();
const fResponse = require("../common/functionResponse");

//=======================================
const translateService = (result, fnCallback) => {

    var fResp = new functionResponse("translate", [result, fnCallback]);

    var translateParam = result.req.body;

    var params = {
        Text: translateParam.input,
        SourceLanguageCode: translateParam.sourceLanguageCode,
        TargetLanguageCode: translateParam.targetLanguageCode,
    };

    translate.translateText(params, function(err, data) {
        if (err)
            fResp.setErr(err)
        else
            fResp.setData(data)
        fnCallback(fResp)
    });

}

//================================================================
module.exports = {
    translateService
};