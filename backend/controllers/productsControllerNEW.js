const dbQueries = require('../db/dbQueries')

//TODO: fix req.desctiption to req.products[0] or req.product

exports.addOneProduct = async function addOneProduct(req, res, next) {
    try {
        //TODO: fix checking in every route
        let { description, available } = req.body
        if (!!description && !!available) {
            let data = await dbQueries.addOneProduct({description: description, available: available})
            if (data.status === 'success') {
                res.status(200).json({status: 'success', error: ''})
                //next()
            } else {
                throw new Error('Something wrong in addOneProduct query')
            }
        } else {
            process.nextTick(() => {
                throw new Error(`No description or available in request addOneProduct:
                    req.description === ${description}
                    req.available === ${available}`)
            })
        }
    } catch(err) {
        //console.log(err)
        //next(err)
    }
}

exports.getOneProduct = async function getOneProduct(req, res, next) {
    try {
        let id = req.params.id
        if (!!id) {
            let data = await dbQueries.getOneProduct({id: req.id})
            if (data.status === 'success') {
                res.status(200).json({status: 'success', error: '', product: data.result})
                //next()
            } else {
                throw new Error('Something wrong in getOneProduct query')
            }
        } else {
            process.nextTick(() => {
                throw new Error(`No id in request getOneProduct:
                    req.id === ${req.id}`)
            })
        }
    } catch(err) {
        //console.log(err) 
        //next(err)
    }
}

exports.getAllProducts = async function getAllProducts(req, res, next) {
    try {
        let data = await dbQueries.getAllProducts()
        if (data.status === 'success') {
            res.status(200).json({status: 'success', error: '', product: data.result})
            //next()
        } else {
            throw new Error('Something wrong in getAllProducts query')
        }
    } catch(err) {
        //console.log(err) 
        //next(err)
    }
}