import {IStepOption, TourAnchorMatMenuDirective, TourMatMenuModule, TourService} from 'ngx-ui-tour-md-menu';
import {Component, inject, OnInit} from '@angular/core';
import {default as defaultTemplate} from '!!raw-loader!./examples/default-template.txt';
import {DELAY_AFTER_NAVIGATION} from '../app.providers';
import {TuiButtonModule, TuiLinkModule, TuiNotificationModule} from '@taiga-ui/core';
import {TuiDocPageModule} from '@taiga-ui/addon-doc';
import {provideTourDirective, SHARED_COMPONENTS} from '../shared';

@Component({
    selector: 'app-md-menu',
    templateUrl: './md-menu.component.html',
    styleUrls: ['./md-menu.component.scss'],
    standalone: true,
    imports: [
        TuiDocPageModule,
        TuiLinkModule,
        TourMatMenuModule,
        TuiButtonModule,
        TuiNotificationModule,
        SHARED_COMPONENTS
    ],
    providers: [
        provideTourDirective(TourAnchorMatMenuDirective)
    ]
})
export class MdMenuComponent implements OnInit {

    readonly tourSteps: IStepOption[] = [{
        anchorId: 'start.tour',
        content: 'Welcome to the Ngx-UI-Tour tour!',
        title: 'Welcome',   
        beforeShow: () => {
            console.log("Step is about to show, so we can set certain values before we highlight something?");            
        }     ,
        afterShow: () => {
            console.log("And put the values back if needed?");
        },
        beforeHide: () => {
            console.log("I think we go to next step");
        },
        afterHide: () => {
            console.log("I am hidden now");
        }
    }, {
        anchorId: 'angular-ui-tour',
        content: 'Thanks to angular-ui-tour for the inspiration for the library',
        title: 'angular-ui-tour',
        beforeShow: () => {
            console.log("Step is about to show   2");
        }     ,
        afterShow: () => {
            console.log("step was shown   2");
        },
        beforeHide: () => {
            console.log("I think we go to next step   2");
        },
        afterHide: () => {
            console.log("I am hidden now   2");
        }
    }, {
        anchorId: 'installation',
        content: 'First, install the library...',
        title: 'Installation',
        route: 'md-menu/Setup',
        beforeShow: () => {
            console.log("Step is about to show  3");
        }     ,
        afterShow: () => {
            console.log("step was shown   3");
        },
        beforeHide: () => {
            console.log("I think we go to next step   3");
        },
        afterHide: () => {
            console.log("I am hidden now   3");
        }
    }, {
        anchorId: 'usage',
        content: '...then use it.',
        title: 'Usage',
        route: 'md-menu/Setup'
    }, {
        anchorId: 'tourService.start',
        content: 'Don\'t forget to actually start the tour.',
        title: 'Start the tour',
        route: 'md-menu/Setup'
    }, {
        anchorId: 'config.anchorId',
        content: 'Every step needs an anchor.',
        title: 'Anchor',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.enableBackdrop',
        content: 'You can enable backdrop to highlight active element.',
        title: 'Backdrop',
        enableBackdrop: true,
        route: 'md-menu/API'
    }, {
        anchorId: 'config.route',
        content: 'Tours can span multiple routes.',
        title: 'Route',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.placement',
        content: 'Steps can be positioned around an anchor.',
        title: 'Placement',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.centerAnchorOnScroll',
        content: 'Enable this config to keep active anchor element centered when possible.',
        title: 'Center active anchor',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.smoothScroll',
        content: 'Enable "smoothScroll" option to smoothly scroll to an active element.',
        title: 'Smooth scroll',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.buttons.custom',
        content: 'You can set custom step button names',
        title: 'Button Titles',
        prevBtnTitle: 'My Prev',
        nextBtnTitle: 'My Next',
        endBtnTitle: 'My End',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.isAsync',
        content: 'Mark your step as async if anchor element is added to DOM with a delay',
        title: 'Wait for async event',
        route: 'md-menu/API'
    }, {
        anchorId: 'config.nextOnAnchorClick',
        content: 'Click on the config description to go to the next step',
        title: 'Next on Anchor Click',
        route: 'md-menu/API',
        nextOnAnchorClick: true
    }, {
        anchorId: 'events',
        content: 'You can subscribe to events',
        title: 'Events',
        route: 'md-menu/API'
    }, {
        anchorId: 'hotkeys',
        content: 'Try using the hotkeys to navigate through the tour.',
        title: 'Hotkeys',
        route: 'md-menu/Misc'
    }];
    readonly defaultTemplate = defaultTemplate as string;

    public readonly tourService = inject(TourService);
    private readonly delayAfterNavigation = inject(DELAY_AFTER_NAVIGATION);

    ngOnInit() {
        this.tourService.initialize(this.tourSteps, {
            route: 'md-menu',
            delayAfterNavigation: this.delayAfterNavigation
        });
    }

}
