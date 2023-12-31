export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'caption',
            title: 'Caption',
            type: 'string'
        },
        {
            name: 'video',
            title: 'Video',
            type: 'file',
            options: {
                hotspot: true
            }
        },
        {
            name: 'postedBy',
            title: 'PostedBy',
            type: 'postedBy'
        },
        {
            name: 'userId',
            title: 'Userid',
            type: 'string'
        },
        {
            name: 'likes',
            title: 'Likes',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'user'}]
                },
            ],
        },
        {
            name: 'comments',
            title: 'Comments',
            type: 'array',
            of: [
                {
                    type: 'comment',
                },
            ],
        },
        {
            name: 'topic',
            title: 'Topic',
            type: 'string'
        }
    ]
}