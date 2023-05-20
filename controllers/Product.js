const Notes = require("../models/Product")

exports.createNotes = async (req, res) => {
    try {
        const notes = await Notes.create(req.body)

        res.status(200).json({
            success: true,
            notes,
            message: "created succesfully"
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }

}

exports.UpdateNotes = async (req, res) => {
    try {
        let notes = await Notes.findById(req.params.id)

        if (!notes) {
            res.status(400).json({
                success: false,
                message: "Notes are not found"
            })
        }

        notes = await Notes.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })
        res.status(200).json({
            success: true,
            message: "Updated Successfully",
            notes
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.GetAllNotes = async (req, res) => {
    try {
        const notes = await Notes.find()

        res.status(200).json({
            success: true,
            notes
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.DeleteNotes = async (req, res) => {
    try {
    
        let notes = await Notes.findById(req.params.id)


        if (!notes) {
            return res.status(404).json({
                success: false,
                message: "Order not Found!"
            });
        }
        await Notes.deleteOne({ _id: req.params.id });
        res.status(200).json({
            success: true,
            message: "deleted successfully"
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}