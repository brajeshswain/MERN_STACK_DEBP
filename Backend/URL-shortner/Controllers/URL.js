const  shortid  = require("shortid");
const URL = require('../Models/url');

async function handlenewshorturl(req, res) {
    const body = req.body;
    if (!body.URL) return res.status(400).json({ status: "failed", message: "url is required" });
    const shortId = shortid();
    await URL.create({ 
        redirectURL: body.Url, 
        shortId: shortId, 
        visitHistory: [], 
    });
    return res.status(201).json({ status: "success", shortId: shortId });
}
module.exports = { handlenewshorturl }