const express = require("express")

const router = express.Router();
const { handleGetALLUsers } = require("../controllers/user")
const { handleGetUserById } = require("../controllers/user")
const { PatchUser } = require("../controllers/user")
const { PutUser } = require("../controllers/user")
const { DeleteUser } = require("../controllers/user")
const { PostUser } = require("../controllers/user")

router
    .route("/")
    .get(handleGetALLUsers)
    .post(PostUser)

/
router
    .route("/:id")
    .get(handleGetUserById)
    .patch(PatchUser)
    .put(PutUser)
    .delete(DeleteUser)





module.exports = router;
