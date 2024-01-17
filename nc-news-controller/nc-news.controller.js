const CustomError = require('../utils/customError')
const { fetchAllTopics, fetchAllApi, fetchArticleById, fetchArticles, fetchComments} = require('../nc-news-model/nc-news.model')




module.exports.getTopics = (req, res) => {
    fetchAllTopics()
    .then((result) => {
        res.status(200).send({topics: result})
    })
}

module.exports.getApi = (req, res) => {
    fetchAllApi().then((result) => {
        res.status(200).send({description: result})
    })
}

module.exports.getArticleById = (req, res, next) => {
    const article_id= req.params.article_id * 1
    fetchArticleById(article_id)
    .then((result) => {
        res.status(200).send({articles: result})
    })
    .catch((err) => {
        next(err)   
    })
}

module.exports.getArticles = (req, res) => {
    fetchArticles()
    .then((result) => {
        res.status(200).send({article: result})
    })
}

module.exports.getComments = (req, res, next) => {
    const {article_id} = req.params
    fetchComments(article_id)
    .then((result) => {
        res.status(200).send({comments: result})
    })
    .catch((err) => {
        next(err)
    })
}