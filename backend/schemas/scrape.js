export default {
    name: 'scrape',
    title: 'Scrape',
    type: 'document',
    fields: [
      // {
      //   name: 'title',
      //   title: 'Title',
      //   type: 'string',
      // },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'userId',
        title: 'UserId',
        type: 'string',
      },
      {
        name: 'postedBy',
        title: 'PostedBy',
        type: 'postedBy',
      },
      {
        name: 'save',
        title: 'Save',
        type: 'array',
        of: [{ type: 'save' }],
      },
      {
        name: 'comments',
        title: 'Comments',
        type: 'array',
        of: [{ type: 'comment' }],
      },
      {
        name: 'postedOn',
        title: 'Posted On',
        type: 'string'
      },
    ],
  };