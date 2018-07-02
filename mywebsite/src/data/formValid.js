exports.registerMobile={
    Phone:{
        require :'Chúng tôi cần biết Số điện thoại của bạn' ,
        invalid :'Vui lòng nhập chính xác địa số điện thoại',
        exist   : 'Số điện thoại đã được đăng ký',
    },
    Password:{
        require:'Vui lòng nhập mật khẩu' ,
        minlength  : "Mật khẩu phải có tối thiểu 8 ký tự"
    }
}
exports.loginMobile={
    Phone:{
        require :'Chúng tôi cần biết Số điện thoại của bạn' ,
        invalid :'Vui lòng nhập chính xác địa số điện thoại',
        exist   : 'Số điện thoại đã được đăng ký',
    },
    Password:{
        require:'Vui lòng nhập mật khẩu' ,
        minlength  : "Mật khẩu phải có tối thiểu 8 ký tự"
    }
}
exports.registerDesktop={
    Password: { 
         required   : "Vui lòng nhập mật khẩu",
         minlength  : "Mật khẩu phải có tối thiểu 8 ký tự"
     },
     dob: {
         required: "Chúng tôi cần biết ngày sinh của bạn",
         invalid : "Vui lòng nhập ngày sinh chính xác"
     },
     Name: {
         required : "Chúng tôi cần biết tên bạn",
         invalid : "Chỉ chữ cái và gạch nối là được phép"
     },
     Address: {
          invalid :"Vui lòng điền vị trí chính xác",
          required: "Chúng tôi cần biết thành phố bạn ở",
     },
    Goal: {
        required: "Vui lòng chọn"
    },
    Phone: {
        required : "Vui lòng nhập số điện thoại" ,
        invalid  : "Vui lòng nhập chính xác số điện thoại",
        exist    : "Số điện thoại đã được đăng ký",
    },
    Gender: {
        required: "Chúng tôi cần biết giới tính của bạn"
    }
     
}
exports.loginDesktop={
    Username: {
        required: 'Vui lòng nhập địa chỉ số điện thoại hợp lệ'
    },
    Password: {
        required: 'Vui lòng nhập mật khẩu'
    }
}