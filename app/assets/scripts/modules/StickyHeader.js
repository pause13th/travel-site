import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.header = $('.header');
        this.headerTriggerElement = $('.large-hero__title');
        this.createHeaderWaypoint();

        this.pageSection = $('.section');
        this.headerLinks = $('.nav a');
        this.createPageSectionWaypoint();
        this.addSmoothScrolling();
    }

    addSmoothScrolling(){
    	this.headerLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if (direction == "down") {
                    that.header.addClass('header--dark')
                } else {
                    that.header.removeClass('header--dark')
                }
            }
        });
    }

    createPageSectionWaypoint() {
        var that = this;

        this.pageSection.each(function() {
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {

                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction) {

                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-matching-link");
                        that.headerLinks.removeClass('is-current-link');
                        $(matchingHeaderLink).addClass('is-current-link');
                    }
                },
                offset: "-40%"
            });
        });
    }

}

export default StickyHeader;