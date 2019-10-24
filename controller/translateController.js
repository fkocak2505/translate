const translateService = require("../service/translateService");

//=======================================
const translateController = (result) => {
	translateService.translateService(result, (fResp) => {
		if(fResp.err !== undefined){
			result.res.json({success: false, error: fResp.err});
			result.res.status(200).end();
		}else{
			result.res.json({success: true, result: fResp.data, message: "Translate success"})
			result.res.status(200).end()
		}
	});
}

//=======================================
module.exports = {
    translateController
};