import Product from "../models/product.js";

export const createProduct = async (req, res) => {

    try {
        const body = req.body;
        const data = await Product.create(body);
        return res.status(200).json({
            status: true,
            message: 'Data created',
            data: data
        })

    }
    catch (e) {
        console.log('catch error', e);
        return res.status(500).json({
            status: false,
            message: 'Internal server error'
        })
    }
}


export const listAllProducts = async (req, res) => {

    try {
        const data = await Product.findAll();
        return res.status(200).json({
            status: true,
            message: 'Data fetched',
            data: data
        })

    }
    catch (e) {
        console.log('catch error', e);
        return res.status(500).json({
            status: false,
            message: 'Internal server error'
        })
    }
}

export const getProductById = async (req, res) => {

    try {
        const productId = req.params.id;
        const data = await Product.findByPk(productId);
        return res.status(200).json({
            status: true,
            message: 'Data fetched',
            data: data
        })

    }
    catch (e) {
        console.log('catch error', e);
        return res.status(500).json({
            status: false,
            message: 'Internal server error'
        })
    }
}

export const updateProductById = async (req, res) => {

    try {
        const productId = req.params.id;
        const body = req.body;

        const data = await Product.update(
            {
                ProductName: body.ProductName,
                ProductCode: body.ProductCode        
            },
            {
                where: {
                    id: productId,
                },
                
            } 
           
        );

        return res.status(200).json({
            status: true,
            message: 'Data fetched',
            data: data
        })

    }
    catch (e) {
        console.log('catch error', e);
        return res.status(500).json({
            status: false,
            message: 'Internal server error'
        })
    }
}

export const deleteProductById = async (req, res) => {

    try {
        const productId = req.params.id;
        const data = await Product.destroy({
            where: {
                id: productId
            }

        });
        return res.status(200).json({
            status: true,
            message: 'Data removed successfully',
            data: data
        })

    }
    catch (e) {
        console.log('catch error', e);
        return res.status(500).json({
            status: false,
            message: 'Internal server error'
        })
    }
}