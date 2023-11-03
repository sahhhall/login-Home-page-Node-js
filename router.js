var express = require("express");
var router = express.Router();
var session = require("express-session");

var credential =
{
    email: "brucewayne@gmail.com",
    password: "bale"
};




// Login user
router.post('/login', (req, res) => {
    if (req.body.email === credential.email && req.body.password === credential.password) {
        req.session.user = req.body.email; // Store the user's email in the session
        res.redirect('/route/dashboard');
        // res.end("Login success.....")
    } else {
        if(req.body.email != credential.email){
        res.render('base', { message: "Enter a valid mail" });}
        else if(req.body.password != credential.password){
            res.render('base', { message: "Enter a valid password" });
        }

    }
});

// router.post('/login',(req,res)=>{

//     const{email,password}=req.body;
//     const user=credential.find(cred=> cred.email===email && cred.password===password);
//     if(user){
//         req.session.user = req.body.email; // Store the user's email in the session
//         res.redirect('/route/dashboard');
//     } else {
//                 if(req.body.email != credential.find(cred=> cred.email===email)){
//                  res.render('base', { message: "Enter a valid mail" });}
//                 else if(req.body.password != credential.find(cred=> cred.password===password)){
//                      res.render('base', { message: "Enter a valid password" });
//                  }

// }});


// route for dashboad 
router.get("/dashboard",(req,res)=>{
    if(req.session.user){
        let products=[{
            name:"iPhone 15",
            
            descrption:"From ₹79900.00* Available from 3 November",
            src:"data:image/jpeg;base64,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"
        },{
            name:"Galaxy S23 Ultra",
          
            descrption:"From ₹99900.00 Available from 13 November",
            src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNfizsGGGGOAi5CmLh5ykEQs_F61IGAjyIw&usqp=CAU"},{
                name:"MacBook Pro",
                descrption:"From ₹169900.00 Available from 7 November",
                src:"https://www.apple.com/v/macbook-pro-14-and-16/a/images/overview/hero/intro__ewz1ro7xs14y_large.jpg"},
                {
                    name:"iPhone 15",
                    
                    descrption:"From ₹119900.00 Available from 7 November",
                    
                    src:"data:image/jpeg;base64,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"
                },{
                    name:"Galaxy S23 Ultra",
                  
                    descrption:"From ₹99900.00 Available from 13 November",
                    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNfizsGGGGOAi5CmLh5ykEQs_F61IGAjyIw&usqp=CAU"},{
                        name:"MacBook Pro",
                        descrption:"From ₹169900.00 Available from 7 November",
                        src:"https://www.apple.com/v/macbook-pro-14-and-16/a/images/overview/hero/intro__ewz1ro7xs14y_large.jpg"},
    ];
        res.render('dashboard',{user :req.session.user,products})
    }else{
        res.render("base")
    }
})
// route for logout

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
        res.send('Error');
      } else {
      
        res.render('base', { title: 'Express', logout: 'Logout Successfully' });
      }
    });

  });

 

module.exports = router;
