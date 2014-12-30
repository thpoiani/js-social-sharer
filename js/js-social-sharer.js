(function(window, document, undefined) {
    'use strict';

    // Constants
    var FACEBOOK = {
            label  : 'facebook',
            href   : 'https://www.facebook.com/sharer/sharer.php?u=',
            width  : 626,
            height : 436
        },
        TWITTER = {
            label  : 'twitter',
            href   : 'https://twitter.com/intent/tweet?url=',
            width  : 550,
            height : 420
        },
        GOOGLEPLUS = {
            label  : 'google-plus',
            href   : 'https://plus.google.com/share?url=',
            width  : 600,
            height : 400
        };

    // SocialSharer Object
    var SocialSharer = (function() {
        var exports = {};

        exports.init = function() {
            var links = document.querySelectorAll('a[data-sharer]');

            if (!links) {
                return false;
            }

            for (var i = links.length - 1; i >= 0; i--) {
                var link = links[i];

                factory(link);
                addEvent(link, 'click', share);
            }
        };

        function factory(link) {
            var sharer = link.getAttribute('data-sharer');

            switch (sharer) {
                case FACEBOOK.label:
                    template(link, FACEBOOK);
                    break;
                case TWITTER.label:
                    template(link, TWITTER);
                    break;
                case GOOGLEPLUS.label:
                    template(link, GOOGLEPLUS);
                    break;
            }
        }

        function template(link, constant) {
            if (!link.getAttribute('data-href')) {
                link.setAttribute('data-href', constant.href + link.href);
            }

            if (!link.getAttribute('data-width')) {
                link.setAttribute('data-width', constant.width);
            }

            if (!link.getAttribute('data-height')) {
                link.setAttribute('data-height', constant.height);
            }
        }

        function addEvent(target, type, listener) {
            if (target.addEventListener) {
                target.addEventListener(type, listener);
            } else if (target.attachEvent) {
                target.attachEvent(type, listener);
            }
        }

        function share(event) {
            /* jshint validthis: true */

            var self = this,
                options = [
                'width=' + self.getAttribute('data-width'),
                'height=' + self.getAttribute('data-height'),
            ];

            event.preventDefault();

            window.open(self.getAttribute('data-href'), document.title, options.join(','));
        }

        return exports;
    })();

    SocialSharer.init();

})(window, document);

