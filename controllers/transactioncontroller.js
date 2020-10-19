const Transaction = require('../models/Transaction')


//@desc Get all transactions
//@route get  /api/v1/transactions
//@access public
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}

//@desc Add transaction
//@route post  /api/v1/transactions
//@access public
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
    }
}

//@desc Delete transaction
//@route post  /api/v1/transactions:id
//@access public
exports.deleteTransaction = async (req, res, next) => {
    try {

        const transaction = await Transaction.findById(req.params.id)

        await transaction.remove();

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction Found'
            })
        }

        return res.status(200).json({
            success: true,
            data: {}
        })
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'server error'
        })
    }

}