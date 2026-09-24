const User = require("../Models/user");


async function handleGetALLUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}
async function handleGetUserById(req, res) {
    const id = (req.params.id);
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ status: "failed", message: "user not found" })
    }
    return res.json(user);
}   

async function PatchUser(req, res) {
    const id = (req.params.id)
        const user = await User.findByIdAndUpdate(id,{lastName: "Swain"}, { new: true });
        console.log(req.body+"updated");
        return res.json({ status: "success", user: user })
}
async function PutUser(req, res) {
    const id = (req.params.id)
        const body = req.body;
        if (
            !body ||
            !body.firstName ||
            !body.lastName ||
            !body.email ||
            !body.gender ||
            !body.job_title
        ) {
            return res.status(400).json({
                msg: "all fields are required"
            })
        }
        const updateuser = await User.findByIdAndUpdate(id, {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            gender: body.gender,
            job_title: body.job_title
        }, { new: true })
        if (!updateuser) {
            return res.status(404).json({ status: "failed", message: "user not found" })
        }
        return res.json({ status: "success", user: updateuser })
    }
    async function DeleteUser(req, res) {
        const id = (req.params.id)
        const deleteuser = await User.findByIdAndDelete(id)
    }
    async function PostUser(req, res) {
        const body = req.body;
    // users.push({ ...body, id: users.length + 1 })
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    //     return res.json({ status: "success" })
    // }) 
    if (
        !body ||
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.gender ||
        !body.job_title
    ) {
        return res.status(400).json({ status: "failed", message: "all fields are required" })
    }
    const result = await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title
    })
    console.log("result", result)
    return res.status(201).json({ status: "success", user: result });
    }
    
module.exports = { handleGetALLUsers, handleGetUserById ,PatchUser,DeleteUser,PutUser,PostUser} ;