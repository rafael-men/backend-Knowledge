const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * *', async function() {
        const UserCount = await app.db('users').count('id').first()
        const CategoriesCount = await app.db('categories').count('id').first()
        const ArticlesCount = await app.db('articles').count('id').first()

        const { Stat } = app.api.stat

        const lastStat = await Stat.findOne({},{},
            {sort: {'createdAt': -1}})

        const stat = new Stat({
            users:UserCount.count,
            categories:CategoriesCount.count,
            articles:ArticlesCount.count,
            createdAt:new Date()
        })
        const ChangeUsers = !lastStat || stat.users !== lastStat.users
        const ChangeCategories = !lastStat || stat.categories !== lastStat.categories
        const ChangeArticles = !lastStat || stat.articles !== lastStat.articles

        if(ChangeUsers || ChangeCategories || ChangeArticles) {
            stat.save().then(() => console.log('[Stats] Estatísticas Atualizadas'))
        }
    })
}