exports.addUser = (req,res,next)=>{
    let tieuDe = "add User new "

    let users = [
        {fullName: "Hà Mạnh Dũng", hoten: "dũng", email: "dunghmph18450@fpt.edu.vn", gr: "VN", statu: true},
        {fullName: "Hà Mạnh Dũng", hoten: "dũng", email: "dunghmph18450@fpt.edu.vn", gr: "VN", statu: true},
        {fullName: "Hà Mạnh Dũng", hoten: "hi", email: "dunghmph18450@fpt.edu.vn", gr: "VN", statu: true}
        

    ]
    res.render('useradd/Fromadduser.ejs',{title:tieuDe, User : users})
}