# JS Social Sharer

Avoid loading several JavaScript APIs for social sharing that can slow down your website.

Only with a small amount of JavaScript, **JS Social Sharer** handle a hyperlink tag to create a sharing solution that don't require a powerful API from the social networks.

## Social Networks

Some social networks have a [Share Link Generator](http://www.sharelinkgenerator.com/) that enable the easily distribution of a share link.

See:

* Facebook Sharer    
`https://www.facebook.com/sharer/sharer.php?u=[URL]`

* Twitter - Tweet Web Intent    
`https://twitter.com/intent/tweet?url=[URL]`

* Google Share    
`https://plus.google.com/share?url=[URL]`

## Usage

1. [Download JS Social Sharer](https://github.com/thpoiani/js-social-sharer/blob/master/js-social-sharer.js)
2. Write your sharing links and include the script

```html
<a href="[URL]" data-sharer="facebook">FB Share</a>
<a href="[URL]" data-sharer="twitter">Tweet</a>
<a href="[URL]" data-sharer="google-plus">GPlus Share</a>

<!-- add the script before </body> -->
<script src="/js/js-social-sharer.js"></script>
```

## Try it

[http://thpoiani.github.io/js-social-sharer/](http://thpoiani.github.io/js-social-sharer/)
