const express = require("express")
const { createNotes, UpdateNotes, GetAllNotes, DeleteNotes } = require("../controllers/Product")
const router = express.Router()


router.route("/create").post(createNotes)
router.route("/Update/:id").put(UpdateNotes)
router.route("/getAllNotes").get(GetAllNotes)

router.route("/delete/:id").delete(DeleteNotes)

module.exports = router