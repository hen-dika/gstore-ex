module.exports = {
  index: async(req, res) => {
    try {
      res.render('index', {
        title: 'GStore'
      })
    } catch (error) {
      console.log(error)
    }
  }
}