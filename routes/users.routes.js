const router = require("express").Router();
const usersControllers = require('../controllers/users.controllers')

router.get("/", usersControllers.readUser)
router.post("/", usersControllers.createUser)
router.put("/:id", usersControllers.updateUser)
router.delete("/:id", usersControllers.deleteUser)

module.exports = router;
