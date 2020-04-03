fetch('https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc')
    .then(data => data.json())
    .then((githubData)=>{
        var topThree = {
            "items": [
                githubData.items[0],
                githubData.items[1],
                githubData.items[2]
            ]
        }

        fetch('./widget-item.hbs').then(template => template.text())
            .then((template)=>{
                let compiledTemp = Handlebars.compile(template)
                document.querySelector('.github-widget').innerHTML += compiledTemp(topThree)
            })

    }).catch((error)=>{
        document.querySelector('.github-widget').innerHTML += '<p>Oh dear. We can\'t get data from Github at the moment :(</p>'
    })