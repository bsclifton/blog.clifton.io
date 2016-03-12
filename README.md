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

### Deploying

Create a secret.json file with the hosting info:
```js
{
  "production": {
    "host": "put-ssh-host-here",
    "username": "put-username-here",
    "password": "put-password-here",
    "port": "22"
  }
}
```

Next, edit the deploy_path in the Gruntfile.js to have the correct location for the WordPress themes directory:
```js
{
  environments: {
    options: {
      deploy_path: '/home/<%= secret.production.username %>/blog.clifton.io/wp-content/themes'
    }
  }
}

```

Then build and deploy with the following command:
``` sh
grunt deploy
```

Once the theme is deployed, you can activate it like so:

1. Log into the WordPress [Administration Panel](https://codex.wordpress.org/Administration_Panels) for your site.
2. Select the [Appearance](https://codex.wordpress.org/Administration_Panels#Appearance_-_Change_the_Look_of_your_Blog) panel, then [Themes](https://codex.wordpress.org/Administration_Panels#Themes).
3. Once you are on the themes page, click on the `Activate` button for the blog-clifton-io theme.


## License

Much of the work for this theme is derived from the [Simple Bootstrap](https://github.com/nicolas-van/wordpress-simple-bootstrap) theme, which was released [under the terms of the MIT license](https://github.com/nicolas-van/wordpress-simple-bootstrap/blob/75928a5da54b1d5edacaca60ddfcd5aa966068fe/readme.txt) (copyright 2015 Nicolas Vanhoren).

This forked theme is also released under the terms of the [MIT license](http://choosealicense.com/licenses/mit/).