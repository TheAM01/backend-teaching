function get1(endpoint, callbackFn) {
    // do something with endpoint

    // after everything is done
    callbackFn(req, res)
}

get1("/", (req, res) => {
    req.console.log();
    res.send(smth)
    
})

function cbf(req, res) {
    // req ke sath,uch kro
    // res ke sath smth
}