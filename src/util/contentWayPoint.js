import Waypoint from 'waypoints/src/waypoint';

const contentWayPoint = new Waypoint({
    element: document.getElementsByClassName('.animate-box'),
    handler: function (direction) {
        let i = 0;
        if( direction === 'down' && !this.element.classList.contains('animated-fast') ) {
            i++;

            this.element.classList.add('item-animate');
            setTimeout(function() {

                document.querySelectorAll('body .animate-box.item-animate').forEach((k) => {
                    setTimeout( function () {
                        let effect = this.dataset.animateEffect;
                        if ( effect === 'fadeIn') {
                            this.classList.add('fadeIn animated-fast');
                        } else if ( effect === 'fadeInLeft') {
                            this.classList.add('fadeInLeft animated-fast');
                        } else if ( effect === 'fadeInRight') {
                            this.classList.add('fadeInRight animated-fast');
                        } else {
                            this.classList.add('fadeInUp animated-fast');
                        }

                        this.classList.remove('item-animate');
                    },  k * 100, 'easeInOutExpo' );
                });
                
            }, 50);
            
        }
    },
    offset: '85%'
});

export default contentWayPoint;