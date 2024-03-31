import {HomePage} from './HomePage'
const{LoginPage} =require('./LoginPage')
exports.POMManager=
class POMManager{
    constructor(page)
    { 
        this.page=page
        this.homepage= new HomePage(this.page);
        this.loginPage= new LoginPage(this.page);

    }

    getHomePage()
    {
        return this.homepage;
    }
    getLoginPage()
    {
        return this.loginPage;
    }

    

    
}
//module.exports = {POMManager}