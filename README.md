Public website for Mitosis - generates https://aubaine-studio.github.io
=======

The website is rendered using Github pages and built using [Jekyll](https://jekyllrb.com/).


To run this locally :

* [Fork this](https://github.com/aubaine-studio/aubaine-studio.github.io) repo and clone to your file system
* [Install Jekyll](https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/)
* Run `bundle install`if you are running it for the first time in the cloned repo folder
* Launch the ap by running :
    * If you want the simple mode : `bundle exec jekyll serve`
    * It you want the livereload : `bundle exec jekyll serve --livereload`
    * It you want the livereload + test it on a device connected to the same network : `bundle exec jekyll serve --host=your_local_ip_address --livereload`.

* You will access the site at http://localhost:4000 or http://your_local_ip_address:4000 depending on the chosen option to run the app.