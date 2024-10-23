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
            title: 'Description',
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
        },{
            name: 'frontend',
            title: 'Frontend',
            type: 'array',
            of: [{ type: 'string' }]
        },{
            name: 'backend',
            title: 'Backend',
            type: 'array',
            of: [{ type: 'string' }]
        },{
            name: 'database',
            title: 'Database',
            type: 'array',
            of: [{ type: 'string' }]
        },{
            name: 'deployment',
            title: 'Deployment',
            type: 'string'
        },{
            name: 'features',
            title: 'Features',
            type: 'array',
            of: [{ type: 'string' }]
        }

    ]
}