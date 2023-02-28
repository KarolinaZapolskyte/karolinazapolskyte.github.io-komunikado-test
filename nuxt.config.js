export default {
  srcDir: 'src',
  head: {
    title: 'Komunikado test',
    meta: [{
        hid: 'charset',
        charset: 'utf-8'
      },
      {
        hid: 'viewport',
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1'
      },
    ],
    link: [
      {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
      {rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'}
    ]
  }
}