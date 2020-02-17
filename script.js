var app = new Vue({
    el: '#app',
    data: {
        anime: 'presets',
        presetsEasing: 'linear',
        bezier: [
            0, 0, 0, 0
        ],
        spring: [0, 0, 0, 0],
        elasticType: 'easeInElastic',
        elasticVal: [1, 0.1],
        steps: 1,
        duration: 1000,
        presets: [
            'linear', 'swing', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad',
            'easeInCubic', 'easeOutCubic', 'easeInOutCubic',
            'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint',
            'easeInSine', 'easeOutSine', 'easeInOutSine',
            'easeInExpo', 'easeOutExpo', 'easeInOutExpo',
            'easeInCirc', 'easeOutCirc', 'easeInOutCirc',
            'easeInBack', 'easeOutBack', 'easeInOutBack',
            'easeInBounce', 'easeOutBounce', 'easeInOutBounce'
        ],
        elastics: [
            'easeInElastic', 'easeOutElastic', 'easeInOutElastic'
        ]
    },
    computed: {
        easing() {
            var vm = this;
            if (vm.anime == 'presets') {
                var easing = vm.presetsEasing;
            } else if (vm.anime == 'bezier') {
                var easing = 'cubicBezier(' + vm.bezier.join(',') + ')';
            } else if (vm.anime == 'spring') {
                var easing = 'spring(' + vm.spring.join(',') + ')';
            } else if (vm.anime == 'elastic') {
                var easing = vm.elasticType + '(' + vm.elasticVal.join(',') + ')';

            } else if (vm.anime == 'steps') {
                var easing = 'steps(' + vm.steps + ')';
            }
            console.log(easing);
            return easing;
        },
        code() {
            var vm = this;
            return "anime({\n\ttargets: \'.item-v\', \n\ttranslateY: [0, 300], \n\tdirection: \'alternate\', \n\tloop: true, \n\teasing: '" + vm.easing + "', \n\tduration: " + vm.duration + "\n});";
        }
    },
    mounted() {
        var vm = this;
        vm.animeExec();
        window.addEventListener('resize', function () {
            vm.animeExec();
        });
    },
    methods: {
        animeExec() {
            var vm = this;
            vm.itemV = anime({
                targets: '.item-v',
                translateY: [0, 300],
                direction: 'alternate',
                loop: true,
                easing: vm.easing,
                duration: vm.duration
            });
            vm.itemh = anime({
                targets: '.item-h',
                translateX: function (el) {
                    var x = el.parentNode.clientWidth - 82;
                    return [0, x];
                },
                direction: 'alternate',
                loop: true,
                easing: vm.easing,
                duration: vm.duration

            });
        },
        update() {
            var vm = this;
            vm.animeExec();
        },
        presetsSelect() {
            var vm = this;
        }
    }
})