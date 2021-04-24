// const express = require("express");
// const authMiddleware = require("../auth-Middleware/authMiddleware");
// const router = express.Router();
// const Users = require("../schemas/users");
// const multer = require("multer");

// router.use(multer().array());

// const upload = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });

// router.patch(
//   "/",

//   upload.array("profileImage"),
//   async (req, res) => {

//     const result = { status: "success" };

//     let formDatas = JSON.stringify(req.body)
//     console.log(formDatas)
//     console.log(req)

//     res.json(result);
//   }
// );

// router.get("/", authMiddleware, async(req, res)=>{
//     const user = res.locals.user

//     try{
//        let profile = await Users.find({nickname: user.nickname})
//         console.log(profile)
//         console.log("profile image test")
//        res.status(201).send({profile:profile})
//     }catch(err){
//         console.log(err)
//         result['status'] = 'fail'
//     }
// })

module.exports = router;
