## blog.clifton.io

WordPress theme customizations for https://blog.clifton.io/

### Building

To get started, you'll need to install grunt and bower:

```sh
npm install -g grunt-cli bower
```

You can then clone the repo and install npm and bower dependencies:

``` sh
git clone git@github.com:clifton-io/blog.clifton.io.git
cd blog.clifton.io
npm install && bower install
grunt
```

### Installing

After building the project, you can follow these steps (current as of WordPress 4.4.2):

1. Log into the WordPress [Administration Panel](https://codex.wordpress.org/Administration_Panels) for your site.
2. Select the [Appearance](https://codex.wordpress.org/Administration_Panels#Appearance_-_Change_the_Look_of_your_Blog) panel, then [Themes](https://codex.wordpress.org/Administration_Panels#Themes).
3. Once you are on the themes page, click on the `Add New` button at the top.
4. Click on the `Upload Theme` button at the top (next to the `Add New` header).
5. Choose the zip file that you built with grunt (`blog-clifton-io.zip`). Select the file and click `Install Now`.
6. Once your theme is installed, you will see a success message along with the link to activate and preview the theme.


## License

Much of the work for this theme is derived from the [Simple Bootstrap](https://github.com/nicolas-van/wordpress-simple-bootstrap) theme, which was released [under the terms of the MIT license](https://github.com/nicolas-van/wordpress-simple-bootstrap/blob/75928a5da54b1d5edacaca60ddfcd5aa966068fe/readme.txt) (copyright 2015 Nicolas Vanhoren).

This forked theme is also released under the terms of the [MIT license](http://choosealicense.com/licenses/mit/).