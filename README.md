# JS Social Sharer

Avoid loading several APIs for social sharing that can slow down your website.

Only with a small amount of JavaScript, **JS Social Sharer** handle a hyperlink tag to create a sharing possibility that don't require a powerful API from the social networks.

## Facebook, Twitter, Google Plus

These social networking have channels for content sharing without the need to include JavaScript API.

See:

* Facebook Sharer    
`https://www.facebook.com/sharer/sharer.php?u=[URL]`

* Twitter - Tweet Web Intent    
`https://twitter.com/intent/tweet?url=[URL]`

* Google Share    
`https://plus.google.com/share?url=[URL]`

These urls will be used :)

## Usage

```html
<a href="[URL]" data-sharer="facebook">FB Share</a>
<a href="[URL]" data-sharer="twitter">Tweet</a>
<a href="[URL]" data-sharer="google-plus">GPlus Share</a>

<script src="/js/js-social-sharer.js"></script>
```

## Try it

[https://thpoiani.github.io/js-social-sharer](https://thpoiani.github.io/js-social-sharer)
