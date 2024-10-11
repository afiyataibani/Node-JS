const bookModel = require("../models/bookSchema");

module.exports.homePage = (req, res) => {
    return res.render('home');
}

module.exports.aboutPage = async(req, res) => {
    try {
        let data = await bookModel.find({});
        return res.render('about', {data})
    } catch (error) {
        console.error(error);
    }
}

module.exports.createData = async (req, res) => {
    try {
        await bookModel.create(req.body);
        // console.log(req.body);
        return res.redirect('/')
    } catch (error) {
        console.log(error);
    }
}

module.exports.getBookData = async (req, res) => {
    try {
        let data = await bookModel.find({});
        return res.json(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports.editPage = async (req, res) => {
    try {
        let id = req.params.id;
        let data = await bookModel.findById(id);
        return res.render('edit', { data });
    } catch (error) {
        console.log(error);
        return res.render('edit');
    }
}

module.exports.updateBookData = async (req, res) => {
    try {
        let { id } = req.params;
        await bookModel.findByIdAndUpdate(id, req.body);
        return res.redirect('/about');
    } catch (error) {
        console.log(error);
        return res.redirect('/about');
    }
}

module.exports.deleteBookData = async (req, res) => {
    try {
        let {id} = req.params;
        await bookModel.findByIdAndDelete(id);
        // return res.json("Data Deleted");
        return res.redirect('back');
    } catch (error) {
       console.log(error); 
       return res.redirect('back');
    }
}