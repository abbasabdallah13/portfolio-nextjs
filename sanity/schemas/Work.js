export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields:[
        {
            name:'projectType',
            title: 'Project Type',
            type: 'string'
        },
        {
            name:'title',
            title: 'Title',
            type: 'string'
        },
        {
            name:'imgurl',
            title:'ImgURL',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'siteLink',
            title: 'Site Link',
            type:'string'
        },
        {
            name: 'giturl',
            title: 'GitURL',
            type:'string'
        },
        {
            name: 'description',
            title: 'Project Description or Notes to Share',
            type: 'string'
        },{
            name:'skillsUsed',
            title:'Skills Used',
            type:'array',
            of:[
                {
                type:'reference',
                to:{type:'skills'}
                }
            ]
        }

    ]
}