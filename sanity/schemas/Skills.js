export default {
    name: 'skills',
    title: 'Skills',
    type: 'document',
    fields: [
        {
            name: 'imgurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot:true
            }
        },
        {
            name: 'bubbleImg',
            title: 'bubbleImg',
            type: 'image',
            options: {
                hotspot:true
            }
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        }

    ]
}