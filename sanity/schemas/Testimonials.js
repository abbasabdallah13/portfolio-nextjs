export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: 
                {
                    hotspot: true
                }
        },
    ]
}